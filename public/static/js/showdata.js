function startStream(){

}
async function startCapture(displayMediaOptions) {
    let captureStream = null;
  
    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch(err) {
      console.error("Error: " + err);
    }
    return captureStream;
  }
function destroyViews(){
      document.getElementById("values").remove();
      document.getElementById("streamButton").remove();
      var videoele = document.createElement("video");
      videoele.setAttribute("src",sessionStorage.getItem("streamUrl"))
  }

  