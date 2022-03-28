
const btns = document.getElementById("btns"); 
const welcome = document.querySelector(".welcome"); 
const watchDiv = document.getElementById("watch"); 
const inp = document.getElementById("urlInp"); 
const view = document.querySelector(".super");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

function create(){
	location.href="/create";
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
