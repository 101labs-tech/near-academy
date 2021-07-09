// const fs = require('fs');
import * as dotenv from 'dotenv'
import { keyStores, KeyPair, Near, Account, utils } from "near-api-js";
const getConfig = require('./config');

dotenv.config()

const { nodeUrl, networkId, contractName, contractMethods } = getConfig(true);

// const credentials = JSON.parse(fs.readFileSync(`${process.env.HOME}/.near-credentials/${networkId}/${contractName}.json`));
const credentials = {
  account_id: process.env.account_id,
  public_key: process.env.public_key,
  private_key: process.env.private_key
};

const keyStore = new keyStores.InMemoryKeyStore();

/* @ts-ignore */
keyStore.setKey(networkId, contractName, KeyPair.fromString(credentials.private_key));

const near = new Near({
  networkId, nodeUrl,
  deps: { keyStore },
});

const { connection } = near;
const contractAccount = new Account(connection, contractName);
/* @ts-ignore */
contractAccount.addAccessKey = (publicKey) => contractAccount.addKey(publicKey, contractName, contractMethods.changeMethods, parseNearAmount('0.1'));

async function sendMoney(receiver: string, amount: string) {
  const amountInYocto = utils.format.parseNearAmount(amount);
  const result = await contractAccount.sendMoney(receiver, amountInYocto)

  return result;
}

import { Context, Next } from 'koa'
export const getReward = async (ctx: Context, next: Next): Promise<void> => {
  const transaction = await sendMoney('bob3.testnet', "1")

  const response: any = { transaction }

  ctx.status = 200
  ctx.body = response

  await next()
}
