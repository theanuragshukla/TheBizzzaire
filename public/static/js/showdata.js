var track = null;
var localStream ='';
const cameraView = document.querySelector("#camera--view");
var constraints = { video: { facingMode: "user" }, audio: false };
var  screen = false;
let socket;
let key;
window.onload=async function(){
	var data = await sessionStorage.getItem('streamData');
	if(data!=null){
		data=JSON.parse(data);
		document.getElementById('key').value=data.streamKey;
		key=data.streamKey;
		document.getElementById('url').value=`https://cdn.livepeer.com/hls/${data.pId}/index.m3u8`;
	}else{
		location.href='/';
	}
}


function startStream(){
	destroyViews();
	socket = io.connect("/",{ query: `streamKey=${key}` });
	cameraStart();
}

function stopStream(){
	localStream.getTracks().forEach( (track) => {
		track.stop();
	});
}

function screenShare(){
	!screen ? startCapture() : cameraStart();
	document.getElementById('switchMode').innerHTML=!screen ? "Switch to Camera" : "Share Screen";
	screen=!screen
}

async function startCapture(displayMediaOptions) {
	if(localStream!==''){
		stopStream();
	}
	let captureStream = null;

	try {
		captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)		.then(function(stream) {
			localStream=stream;
			track = stream.getTracks()[0];
			cameraView.srcObject = stream;
			let mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start(250);
			mediaRecorder.ondataavailable = function(e) {
				socket.emit("stream",e.data);
			}
		})
		.catch(function(error) {
			alert("please make sure to allow camera permissions from your browser's settings");
			console.error("Oops. Something is broken.", error);
		});
	} catch(err) {
		console.error("Error: " + err);
	}
	return captureStream;
}
function destroyViews(){
	// document.getElementById("values").remove();
//	document.getElementById("streamButton").remove();
	document.getElementById("showStream").style.display = 'flex';
	document.getElementById("streamButton").style.display = 'none';
	document.querySelector(".streamtitle h1").innerHTML = sessionStorage.getItem("streamName");
//	var videoele = document.createElement("video");
//	videoele.setAttribute("src",sessionStorage.getItem("streamUrl"))
}


function cameraStart() {
	if(localStream!==''){
		stopStream();
	}
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(function(stream) {
			localStream=stream;
			track = stream.getTracks()[0];
			cameraView.srcObject = stream;
			let mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start(250);
			mediaRecorder.ondataavailable = function(e) {
				socket.emit("stream",e.data);
			}
		})
		.catch(function(error) {
			alert("please make sure to allow camera permissions from your browser's settings");
			console.error("Oops. Something is broken.", error);
		});
}

 function copyFunction(a) {
	/* Get the text field */
	var copyText = document.getElementsByClassName("val")[a];

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);

	}


