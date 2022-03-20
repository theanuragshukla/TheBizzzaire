const express = require('express')
const app = express()
const PORT =process.env.PORT || 3000

app.use('/static',express.static(__dirname + "/static"))

app.get("/",(req,res)=>{
	res.sendFile(__dirname +'/index.html')
})

app.get("/watch",(req,res)=>{
	res.status=200
	res.sendFile(__dirname + '/view.html')
})

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT}`)
})
