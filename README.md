# 🧭 Table of contents

- [`Introduction`](#Introduction)
- [🚀 Quick Start](#🚀-Quick-Start)
- [🚀 How this works](#How-this-dApp-works)
	- [`Frontend`](#Frontend)
	- [`Backend`](#Backend)
	- [`Smart Contract`](#Smart-Contract)


# Introduction

This is our Project for Submission in the Hackathon `ETHernals`.

This is a decentralised App(dApp), which provides Users with the ability to create LiveStreams and also in-borowser Straming facilities.

Users can choose to stream from any other Streaming Software of their Choice or use our Builtin Streaming Service(beta) for in-browser streaming.

Currently, the Payment infrastructure is deployed on `Ropsten Testnet`, due to which Transactions doesn't mean anything here because, Fake ethers is being used on this Testnet but it will work flawless on `Ethereum Mainnet` also.

# 🚀 Quick Start

📄 Clone or fork this repo and change current directory to `theBizzzaire/public`:

```sh
git clone https://github.com/zaidazaize/thebizzzaire.git
```

💿 Install all dependencies:

```sh
cd theBizzzaire/public
npm install
```

✏ Rename `.env.example` to `.env` in the public folder and provide your `API_KEY` from Livepeer ([How to get Livepeer API KEY](https://livepeer.com/docs/guides/api-keys/create-an-api-key))

Example:

```jsx
API_KEY = xxxx-xxxx-xxxx-xxxx
```

🚴‍♂️ Run your App:

```sh
npm start
```

# How this dApp works

### This dApp has three main parts 
- [`Frontend`](#Frontend)
- [`Backend`](#Backend)
- [`Smart Contract`](#Smart-Contract)


# Frontend

This dApp uses `HTML`,`CSS` and `Javascript` at its core for frontend applications.
This dapp runs on and rendered by  a `Nodejs` server.

# Backend

At the `Backend` of this dApp , A `Nodejs` server is running, which manages all the `requests` and `responses` from the user. 

We've also implemented LiveStreaming from the browser with the help of `Ffmpeg` CLI, which also run on the same server but as a node `child_process`.

This dApp also `Socket.io` at its backend to maintain a active connection between user and server.

# Smart-Contract

The Smart Contract for this dApp is written in `Solidity` language and is currently deployed on the `Ropsten TestNet`.

This Smart Contract can be found in the `contracts` folder of this repo.

This Contract takes care of the Transactions happening at the clients end and ensures security and mutual trustfullness.

### Contract Address
```
contractAddress: 0xca29077f2c687406bbab7dbaae283fa2d00f2773
```
#### View Contract Info
```
https://ropsten.etherscan.io/address/0xCA29077F2C687406BbAB7dbaaE283FA2d00f2773
```

# Where is this dApp deployed

Currently this dApp is deployed on [`Heroku`](https://livepeer.herokuapp.com) and the Smart-Contract is deployed on the `Ropsten test Network`.

```
Contract Address: 0xca29077f2c687406bbab7dbaae283fa2d00f2773
```


# ⭐️ `Star us`

If this repo helped you in any possible ways - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help with setting up the boilerplate or have other questions - don't hesitate to write to us on our email or social media  and we will check asap. [our Telegram Channel](https://t.me/+ZNgNXhNmMtliZTY9).




