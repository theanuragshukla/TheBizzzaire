const RATE=0.008;
const logs = document.getElementById('logs');
var usdToEther;
		async	function setVal(e){
			document.getElementById("cost").innerHTML=RATE*e.value;
			document.getElementById("streamDur").innerHTML=e.value;
		}

			async function submit(){

				var name = document.getElementById("name").value;
				sessionStorage.setItem('streamName',name);
				var dur =0;
				dur = document.getElementById("duration").value;
				await fetch('/create',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							data: {
								name: name,
								dur: dur
							}
						})
					})
					.then(response=>response.json())
					.then(data=>{ sessionStorage.setItem('streamData',JSON.stringify(data)); })


				location.href="/show";
						}
	

async function setRate(){
await	fetch("/getRate").then(data=>data.json())
	.then(data => {
	//	console.log(data.ETH);
	usdToEther= (data.ETH);
});
}

async function payFirst(e){

	var name = document.getElementById("name").value;
	if(!checkSpaces(name,false)){
		alert("please enter a valid name");
		return;
	}

	logs.style.display="block";

	await setRate();
	var timeToPay = document.getElementById("duration").value;
	var amount = RATE*timeToPay*usdToEther;
	e.innerHTML="Please Wait..."
	logs.innerHTML+=`<h3>Starting Payment sequence...</h3><p>Amount: ${amount} ether</p><p>Amount in USD: ${RATE*timeToPay} USD</p><p>Stream Name: </p>`;
//	console.log(amount);
	initiateTxn(amount.toString(),e);	
}



function checkSpaces(str,exact) {
	var len = str.replace(/\s/g, '').length
	return (exact ? len===str.length && len!==0 : len!==0) 
}



