import UserService from "../../services/user-service"

const users = async (req, res) => {
  const users = await UserService.findAll()
  res.send(users.reverse())
}

export default users