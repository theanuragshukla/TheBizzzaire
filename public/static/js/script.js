//const web3 = new Web3("https://cloudflare-eth.com")
const btns = document.getElementById("btns"); 
const welcome = document.querySelector(".welcome"); 
const watchDiv = document.getElementById("watch"); 
const inp = document.getElementById("urlInp"); 
const view = document.querySelector(".super");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");



function create(){
	//	sessionStorage.setItem("streamUrl","https://google.com")
	//	web3.eth.getBlockNumber(function (error, result) {
	//console.log(result)
	//})

	location.href="/public/create.html";
}

function triggerWatch(){
	// btns.style.display="none";	
	welcome.style.display="none";	
	watchDiv.style.display="flex";
	card1.style.display="none";
	card2.style.display="none";

}
function goBack(){
	// btns.style.display="flex";	
	welcome.style.display="flex";	
	watchDiv.style.display="none";
	view.style.height="200vh"
	card1.style.display="flex";
	card2.style.display="flex";
}

function superHeight(){
	view.style.height="100vh";
}

function watch (){
	var streamUrl=inp.value;
	sessionStorage.setItem("streamUrl",streamUrl);
	location.href='/watch';
}
