import {Router} from 'express'
import { AuthUserController } from './controller/AuthUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { GetLast3MessagesController } from './controller/GetLast3MessagesControllers'
import { ProfileUserController } from './controller/ProfileUserController'
import { EnsureAuthenticated } from './middleware/EnsureAuthenticated'

const router= Router()

router.post("/authenticate", new AuthUserController().handle)

router.post("/message", EnsureAuthenticated ,new CreateMessageController().handle)

router.get("/message/last3", new GetLast3MessagesController().handle)

router.get("/profile", EnsureAuthenticated ,new ProfileUserController().handle)

export {router}