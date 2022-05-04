import UserService from "../../services/user-service"

const me = async (req, res) => {
  const decodedToken = req.payload
  const userMail = decodedToken._doc.email
  const decodedUser = await UserService.findUser(userMail)
  const token = await UserService.signToken(decodedUser)
  const user = { user: decodedUser, token }

  res.send(user)
};

export default me
