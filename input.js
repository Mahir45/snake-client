const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};
const handleUserInput = function (key) {
  console.log("Leave") 
  // if (key === '\u0003') { if (key === "w") {
  //   console.log("Move up")
  //   stdin.write("move: up")
  //   if (key === "a") {
  //     console
    
  
    process.exit();
  
};

module.exports = setupInput 
