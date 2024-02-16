const fs = require("fs");

// fs.writeFile("message.txt", "hello from Node", (err) => {   
//   if (err) throw err;
//   console.log("the File Has Been Saved");
// });

// fs.watchFile("message.txt",(err,prev) =>{
//   console.log("the current mtime is : ${err.mtime}");
//   console.log("the previous mtime is : ${prev.mtime}");
// });

// fs.watch('message.txt', (err, fs) => {
//   console.log(`event type is: ${err}`);
//   if (Message.txt) {
//     console.log(`filename provided: ${fs}`);
//   } else {
//     console.log('filename not provided');
//   }
// });

fs.readFile("./message.txt", "utf8",(err,data) =>{
  if (err) throw err;
  console.log(data);
})