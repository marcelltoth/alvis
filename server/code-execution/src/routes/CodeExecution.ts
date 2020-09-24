import { Request, Response, Router } from "express";
import {
  BAD_REQUEST,
  CREATED,
  OK,
  INTERNAL_SERVER_ERROR,
} from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";
const { spawn } = require("child_process");

import { paramMissingError } from "@shared/constants";
import expressWs from "express-ws";

import { executeJsInContainer } from "./dockerode";

const CDP = require("chrome-remote-interface");

// Init shared
const router = Router() as expressWs.Router;

router.get("/health", async (req: Request, res: Response) => {
  return res.status(OK).json();
});

// --inspect-brk=9222
// node /Users/pricet/Documents/alvis/node_modules/chrome-remote-interface/bin/client.js inspect
// const child = execSync('node', ['--inspect-brk=9222'])

// spawn docker container with the right node instance
// https://github.com/StepicOrg/epicbox
const ls = spawn("node", ["--inspect-brk=9222"]);
// const a = spawnSync('node', ['--inspect-brk=9222'])

// global list of docker containers (session cookies)
//

// child.kill()
// a.kill()
// ls.kill()

// Two main methods
// - record events with two sets of breakpoints, one for the user and then another to record the code
// - get the events from running the code and printing json

// start a framework, where the user should write something
// generate the array they're working on
// list of events, display which would run through that, backwards and forwards

// - create the file from the code in the browser
// - run the docker the container
// - connect to the debugger from the code OR dump the results from the container to some file in each iteration
// - expose the debugger container as an endpoint

// docker run --rm -p 9229:9229 -v /Users/pricet/Desktop:/tmp/source node node --inspect-brk=0.0.0.0 /tmp/source/hello.js
router.post("/execute-code", async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { result, output } = await executeJsInContainer(body.code);

    return res.status(OK).json({ result, output });
  } catch (e) {
    console.log("e", e);
    return res.status(INTERNAL_SERVER_ERROR).json({ error: e });
  }
});

export default router;

// Runtime.compileScript({"expression": "42", "sourceURL": "http://localhost", "persistScript": true})
// Debugger.setBreakpoint({"location": {"scriptId": "95", "lineNumber": 0}})
// Runtime.runScript({"scriptId": "95", "returnByValue": true})
// Debugger.setBreakpointsActive({"active": true})
// Debugger.pause()

// Have pre-made functions that the user calls, for swap and compare
// swapping index a and b and show that in the UI
// for compare it is the same

// Instead of having these functions, they should be runnable
// Don't allow the user to use anything other than those two operations
// define a breakpoint for them
// whenever you hit the breakpoint, you look at the arguments, and update the browser
// to change the animation

// use websockets (instead of http), run the javascript engine and wait until hits a breakpoint and gives you a response
