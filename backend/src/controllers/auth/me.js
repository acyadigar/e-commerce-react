import Boom from "boom"
import UserService from "../../services/user-service"

const me = async (req, res, next) => {
  const decodedToken = await UserService.verifyToken(req.body.token)
  if (!decodedToken) return next(Boom.unauthorized("Invalid token"))

  const userMail = decodedToken._doc.email
  const decodedUser = await UserService.findUser(userMail)
  const token = await UserService.signToken(decodedUser)
  const user = { user: decodedUser, token }

  res.send(user)
};

export default me
