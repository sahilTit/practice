const fs = require("fs");

// fs.writeFile("Message.txt", "Hello From sahil", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });

// fs.readFile("Message.txt","utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const data = new Uint8Array(Buffer.from("Hello from Node.js"));
fs.writeFile("Message.txt", data, (err) => {
  if (err) throw err;
  console.log("file Has Been Saved");
});
