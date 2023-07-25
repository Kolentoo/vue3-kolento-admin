const express = require("express")

const server = express();
   
server.listen(80, function () { 
    console.log('Example app listening on port 80');
})

server.use('', express.static('./dist'))