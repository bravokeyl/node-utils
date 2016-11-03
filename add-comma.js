const fs = require('fs');
const path = require('path');
const readline = require('readline');
const filepath = path.join(__dirname,'s.txt');
const output = fs.createWriteStream("s.html");
const rl = readline.createInterface({
  input: fs.createReadStream(filepath)
});

rl.on('line', (line) => {
  output.write(line+",");
});


console.log("reading file:",filepath);
