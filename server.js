const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("<h1>main page!</h1>")
})

app.listen(80, function(){
    console.log("PORT 80 OPEND")
})