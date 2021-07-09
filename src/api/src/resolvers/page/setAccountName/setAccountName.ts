import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { toPublicUser } from '../../../helpers/toPublicUser'
import { SetAccountNameInputs, SetAccountNameOutputs } from '../../../shared/page/SetAccountName'
import { PublicUser } from '../../../shared/user/PublicUser'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../../user/helpers/authenticate'
import { issueNftCertificate } from '../../near/issueNft'


export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified progress createdAt'

export const setAccountName = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.request.body)
  const setAccountNameArgs = plainToClass(SetAccountNameInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(setAccountNameArgs, { forbidUnknownValues: true }).catch(firstError)
  const { accountName } = setAccountNameArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  await UserModel.updateOne(
    { _id: user._id },
    { $set: { accountName } },
  ).exec()

  let count = await UserModel.countDocuments({ tokenId : { $exists: true }}).exec();
  const offset = 100
  await UserModel.updateOne(
    { _id: user._id },
    { $set: { tokenId: count + offset } },
  ).exec()
  user.tokenId = count + offset;

  issueNftCertificate(user.username, user.tokenId, accountName)

  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User

  const publicUser: PublicUser = toPublicUser(updatedUser)
  
  const response: SetAccountNameOutputs = { user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
