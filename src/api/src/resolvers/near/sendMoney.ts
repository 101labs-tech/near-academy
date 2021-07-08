const fs = require('fs');

import { keyStores, KeyPair, Contract, Near, Account, utils } from "near-api-js";
const getConfig = require('./config');
// const contractName = 'ethan_1.testnet'
// const networkId = 'testnet'

const { nodeUrl, networkId, contractName, contractMethods } = getConfig(true);

// console.log('Loading Credentials:\n', `${process.env.HOME}/.near-credentials/${networkId}/${contractName}.json`);

const credentials = JSON.parse(fs.readFileSync(`${process.env.HOME}/.near-credentials/${networkId}/${contractName}.json`));

// console.log(credentials, Near, Account, utils)

const keyStore = new keyStores.InMemoryKeyStore();

keyStore.setKey(networkId, contractName, KeyPair.fromString(credentials.private_key));
// console.log(keyStore);

const near = new Near({
	networkId, nodeUrl,
	deps: { keyStore },
});

const { connection } = near;
const contractAccount = new Account(connection, contractName);
  /* @ts-ignore */
contractAccount.addAccessKey = (publicKey) => contractAccount.addKey(publicKey, contractName, contractMethods.changeMethods, parseNearAmount('0.1'));
// const contract = new Contract(contractAccount, contractName, contractMethods);

// console.log(contract)

async function sendMoney(receiver : string, amount : string) {
  const amountInYocto = utils.format.parseNearAmount(amount);
  const result = await contractAccount.sendMoney(receiver, amountInYocto)
  // console.log(result);
  return result;
}

sendMoney('bob3.testnet', "1")
