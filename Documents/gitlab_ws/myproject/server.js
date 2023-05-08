const express = require("express")

const app = express()

function lw(req,res){
	res.send("Welcome")
	console.log("Client connected on data Page....")
}

	
app.get("/data" , lw)
app.listen(3000)
