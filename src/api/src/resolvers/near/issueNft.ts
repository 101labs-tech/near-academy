// const fs = require('fs');
import * as dotenv from 'dotenv'
import { keyStores, KeyPair, Contract, Near, utils, Account } from "near-api-js";
const getConfig = require('./nftConfig');

dotenv.config()

const { nodeUrl, networkId, contractMethods } = getConfig(true);
const contractName = "test.museum-nft.testnet"

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

contractMethods.sender = contractAccount;
/* @ts-ignore */
const contract = new Contract(contractAccount, contractName, contractMethods);

const token_type: string = "test"

export async function issueNftCertificate(username: string, tokenId: number, accountName: string) {
  /*@ts-ignore*/
  // const r = await contract.nft_tokens({ "from_index": "0", "limit": "10000" })
  const now: string = Date.now().toString();

  const amountInYocto = utils.format.parseNearAmount("1");
  /*@ts-ignore*/
  const receipt = await contract.nft_mint({
    token_id: tokenId.toString(),
    "receiver_id": accountName,
    "owner_id": accountName,
    "metadata": { media: "https://near.academy/certificate/" + username, issued_at: now },
    token_type
  },
    300000000000000, // attached GAS (optional)
    amountInYocto // attached deposit in yoctoNEAR
  )

  return receipt
}
