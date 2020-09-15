const fs = require("fs");
const tmp = require("tmp");
const streams = require("memory-streams");
const Docker = require("dockerode");
const dir = "./code";

const docker = new Docker();

// docker run --rm -p 9229:9229 -v /Users/pricet/Desktop:/tmp/source node node --inspect-brk=0.0.0.0 /tmp/source/hello.js
export const executeJsInContainer = async (code: string) => {
  // Output the content as a string

  const tmpobj = tmp.dirSync();
  let data = null;
  try {
    const writer = new streams.WritableStream();
    fs.writeFileSync(`${tmpobj.name}/source.js`, code);

    data = await docker.run(
      "node",
      // debugging
      // ["node", "--inspect-brk=0.0.0.0", `/tmp/source/source.js`],
      ["node", "/tmp/source/source.js"],
      writer,
      {
        AutoRemove: true,
        Binds: [`${tmpobj.name}:/tmp/source/`],
        // debugging
        // ExposedPorts: [9229],
        //   HostConfig: {
        //     PortBindings: tcp
        //   },
      }
    );
    console.log(writer.toString());
    return writer.toString();
  } catch (e) {
    console.log("Error", e);
    console.log("Docker error object", data[0]);
  } finally {
    fs.unlinkSync(`${tmpobj.name}/source.js`);
    tmpobj.removeCallback();
  }
};
