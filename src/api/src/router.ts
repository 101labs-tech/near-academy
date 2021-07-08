import * as Router from '@koa/router'
import { Context } from 'koa'

import { getPublicUser } from './resolvers/page/getPublicUser/getPublicUser'
import { setName } from './resolvers/page/setName/setName'
import { setAccountName } from './resolvers/page/setAccountName/setAccountName'
import { addProgress } from './resolvers/user/addProgress/addProgress'
import { changePassword } from './resolvers/user/changePassword/changePassword'
import { forgotPassword } from './resolvers/user/forgotPassword/forgotPassword'
import { isCertified } from './resolvers/user/isCertified/isCertified'
import { login } from './resolvers/user/login/login'
import { resetPassword } from './resolvers/user/resetPassword/resetPassword'
import { signUp } from './resolvers/user/signUp/signUp'
import { getReferralStats } from './resolvers/user/referral/getReferralStats'
import { getReward } from './resolvers/near/getReward'
// import { issueNftCertificate } from './resolvers/near/issueNft'

const router = new Router()

router.get('/', async (ctx: Context) => {
  ctx.body = 'You are not supposed to be here ;)'
})

router.post('/user/sign-up', signUp)
router.post('/user/login', login)
router.post('/user/add-progress', addProgress)
router.post('/user/reset-password', resetPassword)
router.post('/user/forgot-password', forgotPassword)
router.post('/user/change-password', changePassword)
router.get('/user/is-certified', isCertified)
router.get('/user/referral', getReferralStats)

router.post('/page/get-user', getPublicUser)
router.post('/page/set-name', setName)
router.post('/page/set-account-name', setAccountName)

router.get('/near/getReward', getReward)
// router.get('/near/issueNft', issueNftCertificate)


export { router }
