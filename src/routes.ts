import {Router} from 'express'
import { AuthUserController } from './controller/AuthUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { EnsureAuthenticated } from './middleware/EnsureAuthenticated'

const router= Router()

router.post("/authenticate", new AuthUserController().handle)

router.post("/message", EnsureAuthenticated ,new CreateMessageController().handle)


export {router}