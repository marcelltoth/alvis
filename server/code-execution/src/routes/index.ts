import { Router } from 'express'
import expressWs from 'express-ws'

import CodeExecutionRouter from './CodeExecution'

// Init router and path
const router = Router() as expressWs.Router

// Add sub-routes
router.use('/code-execution', CodeExecutionRouter)

// Export the base-router
export default router
