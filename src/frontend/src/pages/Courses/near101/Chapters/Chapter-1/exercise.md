// Here is your easy win to get started: integrate the payment gateway in line 44.
// Make sure you do not add extra spaces for code validation purposes.
const nearAPI = require("near-api-js");
const { connect, KeyPair, keyStores, utils } = nearAPI;
const { config } = require('./config'); // loads config settings

// configure accounts, network, and amount of NEAR to send
const sender = "sender.testnet";
const receiver = "receiver.testnet";
const networkId = "testnet";
const amount = utils.format.parseNearAmount("1.5");

async function main() {
  // setup an empty keyStore object in memory using near-api-js
  const keyStore = new keyStores.InMemoryKeyStore();
  // create a keyPair from the private key provided in your .env file
  const keyPair = KeyPair.fromString(process.env.SENDER_PRIVATE_KEY);
  // add the key you just created to your keyStore which can hold multiple keys
  await keyStore.setKey(networkId, sender, keyPair);

  // connect to NEAR! :)
  const near = await connect(config);
  // create a NEAR account object
  const senderAccount = await near.account(sender);

  // TODO send those tokens here
  const result = ;
  console.log("Transaction Results: ", result.transaction);
}