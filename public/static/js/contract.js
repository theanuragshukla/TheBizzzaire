const contractAddress = "0xca29077f2c687406bbab7dbaae283fa2d00f2773";

const url = 'https://ropsten.infura.io/v3/efa707c6917a4632923f9084bd38e85a';
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pay",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var ethaddress,rate;
async function connectWallet() {
       if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);  }

          conn = await window.ethereum.enable();

        ethconnected = conn.length > 0
        if (ethconnected) {
            ethaddress = conn[0]
        }
         web3.eth.getAccounts().then(console.log);

         return true;
}
//var time=30;
window.onload=async function(){
//	await connectWallet();
//	contract =await new web3.eth.Contract(abi,contractAddress);
//	contract.methods.setRate(5000).send({"from":ethaddress});
//	rate=await contract.methods.rate().call().then(rate=>console.log(rate));
//	contract.methods.owner().call().then(data=>console.log(data));
/*	contract.methods.pay(time).send({"from":ethaddress,"value":web3.utils.toWei("0.5", "ether")}, async function (error, transactonHash) {
        console.log(transactonHash);
    });*/
}

async function waitForTxToBeMined (txHash) {
  let txReceipt
  while (!txReceipt) {
    try {
      txReceipt = await web3.eth.getTransactionReceipt(txHash)
    } catch (err) {
      return indicateFailure(err)
    }
  }
  indicateSuccess()
}

async function initiateTxn(amt){
	await connectWallet();
	contract =await new web3.eth.Contract(abi,contractAddress);
	contract.methods.pay().send({"from":ethaddress,"value":web3.utils.toWei(amt, "ether")}, async function (error, transactonHash) {
		console.log(transactonHash);
	});

}
