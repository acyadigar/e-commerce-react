import Boom from 'boom'
import UserService from '../../services/user-service.js'
import UserSchema from './validations.js'

const register = async (req, res, next) => {
  const { error } = UserSchema.validate(req.body)
  if (error) return next(Boom.badRequest('Bad request!'))
  
  if (await UserService.findUser(req.body.email)) {
    return next(Boom.conflict('The email already registered!'))
  }

  const user = await UserService.register(req.body)
  res.send(user)
}

export default register