import { Request, Response, Router } from 'express'
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes'
import { ParamsDictionary } from 'express-serve-static-core'
const { spawn } = require('child_process')

import { paramMissingError } from '@shared/constants'
import expressWs from 'express-ws'

const CDP = require('chrome-remote-interface')

// Init shared
const router = Router() as expressWs.Router

router.get('/health', async (req: Request, res: Response) => {
  return res.status(OK).json()
})

// --inspect-brk=9222
// node /Users/pricet/Documents/alvis/node_modules/chrome-remote-interface/bin/client.js inspect
// const child = execSync('node', ['--inspect-brk=9222'])
const ls = spawn('node', ['--inspect-brk=9222'])
// const a = spawnSync('node', ['--inspect-brk=9222'])

// child.kill()
// a.kill()
// ls.kill()

router.post('/execute-code', async (req: Request, res: Response) => {
  let client
  try {
    // connect to endpoint
    client = await CDP()
    // extract domains
    const { Debugger, Runtime } = client
    await Runtime.enable()
    await Debugger.enable()
    await Debugger.pause()

    const { scriptId } = await Runtime.compileScript({
      expression: '42',
      sourceURL: 'http://localhost',
      persistScript: true,
    })

    await Debugger.setBreakpoint({ location: { scriptId, lineNumber: 0 } })

    Debugger.paused((x: any) => {
      // console.log('Debugger.paused', x)
      // Debugger.resume()
    })

    const runScript = await Runtime.runScript({ scriptId, returnByValue: true })

    await Debugger.setBreakpointsActive({ active: true })

    Debugger.pause()

    // console.log('runScript', runScript)

    // const res = await Runtime.evaluate({ expression: '42' })

    console.log('res', res)
  } catch (err) {
    console.error(err)
  } finally {
    if (client) {
      await client.close()
    }
  }

  //   const { user } = req.body
  //   if (!user) {
  //     return res.status(BAD_REQUEST).json({
  //       error: paramMissingError,
  //     })
  //   }
  //   await userDao.add(user)
  //   return res.status(CREATED).end()
  return res.status(OK).json()
})

export default router

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
