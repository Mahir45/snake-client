const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function (PORT, IP) {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on("connect" ,() => {
  console.log("connection deya")
  conn.write("Name: HSM")
  // conn.write("Move: right")
})
  return conn;
};
module.exports = connect 


