const fs = require('fs');
const path = require('path');
const readline = require('readline');
const filepath = path.join(__dirname,'s.txt');
const output = fs.createWriteStream("s.html");
const rl = readline.createInterface({
  input: fs.createReadStream(filepath)
});


rl.on('line', (line) => {
  const list = line.split(",");
  console.log(typeof list,list.length);
  for(let i=0;i<list.length;i++){
      output.write('<div class="bk-area"><a href="#">'+list[i]+'</a></div>');
  }
});


console.log("reading file:",filepath);
