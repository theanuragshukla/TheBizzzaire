const express = require('express')
const app = express()
const PORT =process.env.PORT || 3000
const axios = require('axios')
require('dotenv').config()

const API_KEY = process.env.API_KEY

app.use('/static',express.static(__dirname + "/static"))
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
	res.sendFile(__dirname +'/index.html')
})

app.get("/show",(req,res)=>{
	res.status=200
	res.sendFile(__dirname + '/showData.html')
})

app.get("/create",(req,res)=>{
	res.status=200
	res.sendFile(__dirname + '/create.html')
})

app.post("/create",async (req,res)=>{
	res.status=200
	var createStreamResponse =await requestStream(req.body.data.name,req.body.data.dur)
	if (createStreamResponse && createStreamResponse.data) {
		  res.statusCode = 200;
		var finalData = createStreamResponse.data;
		  res.json({streamKey:finalData.streamKey,pId:finalData.playbackId});
		console.log(createStreamResponse.data)
	} else {
	 res.statusCode = 500;
	 res.json({ error: "Something went wrong" });
	  }
    })

app.get("/watch",(req,res)=>{
	res.status=200
	res.sendFile(__dirname + '/view.html')
})

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT}`)
})

const requestStream= async (streamName,duration)=>{
	var streamProfiles =  [
    {
      "name": "720p",
      "bitrate": 2000000,
      "fps": 30,
      "width": 1280,
      "height": 720
    },
    {
      "name": "480p",
      "bitrate": 1000000,
      "fps": 30,
      "width": 854,
      "height": 480
    },
    {
      "name": "360p",
      "bitrate": 500000,
      "fps": 30,
      "width": 640,
      "height": 360
    }]
	    try {
			const createStreamResponse = await axios.post(
				"https://livepeer.com/api/stream",
				{
					name: streamName,
					profiles: streamProfiles,
				},
				{
					headers: {
						"content-type": "application/json",
						authorization: "Bearer "+ API_KEY,
					},
				})

			return createStreamResponse 
		}
	catch (error) {
    /*  res.statusCode = 500;
console.log(error)
      if (error.response.status === 403) {
        res.statusCode = 403;
      }
      res.json({ error });
   */ 
	}

}
