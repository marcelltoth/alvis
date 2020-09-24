const fs = require("fs");
const tmp = require("tmp");
const streams = require("memory-streams");
const Docker = require("dockerode");
const dir = "./code";

const docker = new Docker();

const responseFileName = "response.json";
const mainCode = `
const fs = require("fs");
const source = require("./source");

const iterator = source.default({ data: [5, 2, 12, 32, 1, 0] });

let output = [];
for (const i of iterator) {
  output.push([...i]);
}
  fs.writeFileSync("/tmp/source/${responseFileName}", JSON.stringify(output));
`;

// docker run -v /var/folders/ly/zby897kn3d1_wpndq7_wj15m0000gn/T/tmp-37621-SAWAp5cKifKe:/tmp/source/ node node /tmp/source/main.js

// docker run --rm -p 9229:9229 -v /Users/pricet/Desktop:/tmp/source node node --inspect-brk=0.0.0.0 /tmp/source/hello.js
export const executeJsInContainer = async (code: string) => {
  // Output the content as a string
  const tmpobj = tmp.dirSync({ unsafeCleanup: true });
  let data = null;
  try {
    const writer = new streams.WritableStream();
    // write user input
    fs.writeFileSync(`${tmpobj.name}/source.js`, code);
    // user file
    // fs.writeFileSync(`${tmpobj.name}/source-input.js`, code);
    fs.writeFileSync(`${tmpobj.name}/main.js`, mainCode);

    data = await docker.run(
      "node",
      // debugging
      // ["node", "--inspect-brk=0.0.0.0", `/tmp/source/source.js`],
      ["node", "/tmp/source/main.js"],
      writer,
      {
        AutoRemove: true,
        // ${tmpobj.name} local folder and :/tmp/source/ in container
        Binds: [`${tmpobj.name}:/tmp/source/`],
        // debugging
        // ExposedPorts: [9229],
        //   HostConfig: {
        //     PortBindings: tcp
        //   },
      }
    );
    const output = writer.toString();
    let result;

    try {
      result = JSON.parse(
        fs.readFileSync(`${tmpobj.name}/${responseFileName}`, "utf8")
      );
      return { result, output };
    } catch (e) {
      console.log("e", e);
      return { result: undefined, output };
    }
  } finally {
    // fs.unlinkSync(`${tmpobj.name}/source.js`);
    tmpobj.removeCallback();
  }
  // catch (e) {
  //   console.log("Error", e);
  //   console.log("Docker error object", data[0]);
  // }
};
