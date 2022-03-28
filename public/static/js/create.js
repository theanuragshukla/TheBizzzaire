		const RATE = 1000
			function setVal(e){
							document.getElementById("cost").innerHTML=RATE*e.value;
							document.getElementById("streamDur").innerHTML=e.value;
						}

			async function submit(){

							var name = document.getElementById("name").value;
							sessionStorage.setItem('streamName',name);
					//		var dur = document.getElementById("duration").value;
							var dur =0;
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
		
