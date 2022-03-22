//const web3 = new Web3("https://cloudflare-eth.com")
const btns = document.getElementById("btns"); 
const watchDiv = document.getElementById("watch"); 
const inp = document.getElementById("urlInp"); 


function create(){
	//	sessionStorage.setItem("streamUrl","https://google.com")
	//	web3.eth.getBlockNumber(function (error, result) {
	//console.log(result)
	//})

	location.href="/create";
}

function triggerWatch(){
	btns.style.display="none";	
	watchDiv.style.display="flex";
}
function watch (){
	var streamUrl=inp.value;
	sessionStorage.setItem("streamUrl",streamUrl);
	location.href='/watch';
}
