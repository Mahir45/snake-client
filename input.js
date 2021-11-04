
let connection 
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

  
 if (key === '\u0003') {
  console.log("Leave") 
     process.exit();
   } else if (key === "w") {
     console.log("Move: up")
     connection.write("Move: up")
  } else if (key === "a") {
     console.log("Move LEFT")
     connection.write("Move: left")
   }else if (key === "d") {
     console.log("Move RIGHT")
    connection.write("Move: right")
  }else if (key === "s"){
  console.log("Move DOWN")
  connection.write("Move: down")

   };
  
   
  
  
  


module.exports = setupInput 
