import Boom from 'boom'
import UserService from '../../services/user-service.js'
import UserSchema from './validations.js'

const login = async (req, res, next) => {
  const { error } = UserSchema.validate(req.body)
  if (error) return next(Boom.badRequest('Bad request!'))

  let user = await UserService.findUser(req.body.email)
  if(!user) return next(Boom.notFound('No email exist!'))

  const isValidPassword = await UserService.comparePassword(req.body.password, user.password)
  if(!isValidPassword) return next(Boom.unauthorized('Username or password is incorrect!'))

  user = UserService.deleteKeys(user)
  const token = await UserService.signToken(user)
  
  user = {...user, token}
  res.send(user)
}

export default login