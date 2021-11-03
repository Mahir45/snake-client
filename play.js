const  connect  = require("./client");
const net = require("net");
const  stdin  = require("process");
const  setupInput  = require("./input");

// console.log("Connecting ...");
// connect();

// setupInput();

// let connection = connect 
const handleUserInput = function (key) {
  console.log("Leave") 
  // if (key === '\u0003') { if (key === "w") {
  //   console.log("Move up")
  //   stdin.write("move: up")
  //   if (key === "a") {
  //     console
    
  
    process.exit();
  
};



// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput)
//   return stdin;
// };
// establishes a connection with the game server
setupInput()

console.log("Connecting ...");
connect();
