import {Request, Response} from 'express'
import {AuthUserService} from '../services/AuthUserService'

class AuthUserController{
    async handle(request: Request, response: Response){
        const { code } = request.body

        const service = new AuthUserService()
        const result = await service.execute(code)

        response.json(result)
    }
}

export {AuthUserController}