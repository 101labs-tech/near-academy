const fs = require('fs');

import { keyStores, KeyPair, Contract, Near, utils, Account } from "near-api-js";
const getConfig = require('./nftConfig');

const { nodeUrl, networkId, contractMethods } = getConfig(true);
const contractName = "test.museum-nft.testnet"

// console.log('Loading Credentials:\n', `${process.env.HOME}/.near-credentials/${networkId}/${contractName}.json`);

const credentials = JSON.parse(fs.readFileSync(`${process.env.HOME}/.near-credentials/${networkId}/${contractName}.json`));

// console.log(credentials, Near, Account, utils)

const keyStore = new keyStores.InMemoryKeyStore();

keyStore.setKey(networkId, contractName, KeyPair.fromString(credentials.private_key));
// console.log(keyStore);

// const nodeUrl = "https://rpc.testnet.near.org";

const near = new Near({
  networkId, nodeUrl,
  deps: { keyStore },
});

const { connection } = near;
const contractAccount = new Account(connection, contractName);
// console.log(contractAccount)
contractMethods.sender = contractAccount;
/* @ts-ignore */
// contractAccount.addAccessKey = (publicKey) => contractAccount.addKey(publicKey, contractName, contractMethods.changeMethods, parseNearAmount('0.1'));
const contract = new Contract(contractAccount, contractName, contractMethods);


// console.log(contract)
// const GAS: string = "200000000000000"
const token_type: string = "test"
// readContract("mark1994", 7)

export async function issueNftCertificate(username: string, tokenId: number, accountName: string) {
  /*@ts-ignore*/
  const r = await contract.nft_tokens({ "from_index": "0", "limit": "10000" })
  const now: string = Date.now().toString();
  console.log(now)
  // const gas = utils.format.parseNearAmount("0.1");
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
  amountInYocto // attached deposit in yoctoNEAR (optional));
  )
  console.log(receipt)

  return receipt

  // console.log(r, token_type)
  // }
}
// import { Context, Next } from 'koa'
// export const issueNftCertificate = async (ctx: Context, next: Next): Promise<void> => {
//   const response: any = { "transaction" : 1 }
  
//   ctx.status = 200
//   ctx.body = response

//   await next()
// }

  // //   const transaction = await sendMoney('bob3.testnet', "1")
  //   // console.log(now, contract)

  //   /*@ts-ignore*/
  //   const r = await contract.nft_tokens({"from_index" : "0", "limit" : "10000"})
  //   console.log(r,token_type)
  //   // /*@ts-ignore*/
  //   // contract.nft_mint( { token_id: 5,
  //   //             "receiver_id": 'albert.testnet',
  //   //             "owner_id":"museum-nft.testnet",
  //   //             "metadata": { media: "https://media.giphy.com/media/laUY2MuoktHPy/giphy.gif", issued_at: now },
  //   //             token_type
  //   //             },

  //   //             );

  //   // const receipt = await contractAccount.functionCall({
  //   //       contractId: 'museum-nft.testnet',
  //   //       methodName: 'nft_mint',
  //   //       args: {
  //   //           token_id: 7,
  //   //           receiver_id: 'albert.testnet',
  //   //           owner_id:"museum-nft.testnet",
  //   //           metadata: { media: "https://media.giphy.com/media/laUY2MuoktHPy/giphy.gif", issued_at: now },
  //   //           token_type,
  //   //       },
  //   //       gas: GAS,
  //   //       attachedDeposit: utils.format.parseNearAmount('1')
  //   //   });


  // import { Context, Next } from 'koa'
  // export const issueNftCertificate = async (ctx: Context, next: Next): Promise<void> => {
    
  //   const response: any = { "transaction" : "2" }
    
  //   ctx.status = 200
  //   ctx.body = response
  
  //   await next()
  // }
  
