var express = require('express');
var app = express()
var multer  = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.get("/", function(req,res){
    res.sendfile(__dirname + "/page.html");
})

app.post("/api/readFile", upload.single("file"), function(req,res){
    res.json({"size": req.file.size + " bytes"})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

