import {Router} from 'express'
import { AuthUserController } from './controller/AuthUserController'

const router= Router()

router.post("/authenticate", new AuthUserController().handle)


export {router}