const fs = require("fs");
const source = require("./source");

const iterator = source.default({ data: [5, 2, 12, 32, 1, 0] });

let output = [];
for (const i of iterator) {
  output.push([...i]);
}

fs.writeFileSync(`./response.json`, JSON.stringify(output));
