# What is NEAR?

<Difficulty>Difficulty: 2/5 | Estimated reading time: 8 min</Difficulty>

<Image>
    <img src="/images/chap_3.png">
</Image>

<Spacer />
<narrativeText>
Lucky you! Your application was accepted. You’ve landed in Rio de Janeiro and head towards the beach where the museum is located.
This is your first working day in the Meme Museum. You meet the director of the museum who gets you setup.
<Spacer />
"Today we're going to bring you up to speed with the latest stack from NEAR, and get you your work account which you will use for everything from now on."

</narrativeText>
<Spacer />

**NEAR is an open source platform that accelerates the development of decentralized applications.**

What is the reason why NEAR was created ?

None of the original blockchain networks nor any of those which followed have managed to bridge the gap towards mainstream adoption of the applications which are built on top of them nor provide the kind of scale needed **to support an entire Web**.

The technical architecture of early blockchain platforms creates substantial problems with both usability and scalability which are crucial for mainstream adoption. Fixing these problems in existing living networks would require substantial and complex changes to entire ecosystems.

**The NEAR platform and organization have been designed specifically to solve the usability and scalability problems.**

The organization and governance structure were designed to be able to rapidly ship and continuously evolve the Network so it will always keep an edge.

The core platform, which is made up of the cloud of community-operated validator nodes, is the most basic piece of infrastructure provided. Developers can interact with this cloud and users can use the applications they power, all in a permissionless fashion. dApp ranging from consumer-facing games to digital currencies can store their code and state securely on the platform.

## Native Primitives

In order to clearly understand the NEAR platform, we may start to highlight these primitives:

**1. Assets.** Assets of all types (from money to data) are now digitally native, meaning they are verifiably unique, individually owned and completely programmable.
**2.Accounts.** Every actor in the ecosystem has an account which gives them secure storage for their assets, an easy way to verify their identity to applications and an accumulation of reputation over time
**3\.Transactions.** Because assets are digitally native and accounts are part of the global pool, programmable transactions between parties are simple, cheap, secure and near-instant.
**4\.Verification.** Because NEAR’s storage is an immutable public ledger, data and code that are saved to the platform are publicly verifiable.

## The NEAR token

The NEAR platform uses a token — called “NEAR”. This token allows cloud resources, regardless of where they are in the world, to be fairly compensated for their services. Validator nodes get compensated in tokens for their service.
The NEAR token is also used for voting and governance of the network. Token holders govern the network; updates about the future of the network are generated from the community and subject to a token-based governance process.

To summarize, each NEAR token can be used to:
Pay the system for processing transactions and data storage.
Run a validating node by participating in token staking.
Govern how network resources are allocated and where its future technical direction will go.

## NEAR in Protocol in Numbers

The NEAR network has been processing over 1.5M transactions at time of writing, at a super high speed of 1 second per block on average. These are definitely encouraging numbers for a protocol that is so young.

The network is supported by 60 validator nodes and a large community, with already over 50’000 active accounts.

<Image>
    <img src="/images/chap_3_1.png">
</Image>
<Spacer />

<Image>
    <img src="/images/chap_3_2.png">
</Image>
<Spacer />

The NEAR ecosystem is attracting developers and founders from all over the world. The network is production-ready, enabling the development of high-quality apps and services in record time.

## Interoperability & The bridge with Ethereum

With NEAR, developers should not have to choose between different blockchains like NEAR and Ethereum networks and commit to only one. Developers have the same asset on both blockchains and even have apps that seamlessly communicate across the boundary. This has been enabled by a bridge, called <a target="_blank" rel="noreferrer" href="https://github.com/near/rainbow-bridge" >Rainbow Bridge</a>, that requires the lowest possible trust level one can have for an interoperability solution.

<Image>
    <img src="/images/chap_3_3.png">
</Image>

<Spacer />

<narrativeText>
“Hey there, I’m Ethan, welcome to the team!”
“Nice to meet you! I checked your personal account, you’re a rockstar !”
<Spacer />
“Let me show you how to set up a Testnet Account”

</narrativeText>

## NEAR Account Overview and Set Up

NEAR uses readable account IDs similar to Twitter handles. In addition, account IDs work like website domains; they can have sub-domains.
For example, only the account “alice” can create a sub-account like “work.alice”, and now only “work.alice” can create a “ http://dayjob.work.alice”.
Each of these subaccounts has their own public key, so one account can have multiple public keys representing multiple profiles.

These public keys, also called access keys grant permission to act on behalf of the account. There are 2 types of permissions: full-permission and function-call limited permission.

Full-permissions allows the keys owners to fully interact with the NEAR platform, from deploying code to sending a transaction.
Function call permission of access keys is the most powerful usability feature of NEAR. It allows limited permission for other accounts to call methods of a script.
Imagine a NEAR based platform that register new user roles that have the ability to perform actions that normal users couldn't.

## Create your NEAR Test Network account

1\. Visit <a target="_blank" rel="noreferrer" href="https://wallet.testnet.near.org/">https://wallet.testnet.near.org/</a>
<Image>
<img src="/images/chap_3_4.png">
</Image>

2\. Choose your personal nickname (i.e. Account ID). The cool thing about NEAR is that it offers the option to personalize your wallet. If the nickname is available, you are ready to join the protocol!

<Image>
    <img src="/images/chap_3_5.png">
</Image>

3\. Now it is the time to choose the security method to secure and recover your account.
4\. For simplicity, using Email Recovery is OK on the test network as it is simpler and quicker. This is however not very secure and wouldn’t be advised for the main network.
5\. You are now part of the NEAR test network.

From now, you have the possibility to interact with the NEAR testnet and do your first transaction. Your test account comes with 200 NEAR, which come quite handy to experiment.
