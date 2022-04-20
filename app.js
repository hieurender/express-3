const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var udp = require('dgram');// --------------------creating a udp server --------------------//

app.get("/", (req, res) => res.send("Hello there 2!"));
app.get("/envs", (req, res) => res.send(`SECRET: ${process.env['SECRET']}; SECRET_2: ${process.env['SECRET_2']}`));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  var server = udp.createSocket('udp4');

  server.on('listening',function(){
    var address = server.address();
    var port = address.port;
    console.log('UDP Server is listening at port', port);
  });

  server.bind(port);
});
