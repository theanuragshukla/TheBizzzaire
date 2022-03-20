const player = document.getElementById("player");
window.onload = function(){
	var url = sessionStorage.getItem("streamUrl");
	player.setAttribute("src",url);
}

