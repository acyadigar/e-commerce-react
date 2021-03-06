import Boom from "boom";
import UserService from "../../services/user-service";
import UserSchema from "./validations";

const register = async (req, res, next) => {
  const { error } = UserSchema.validate(req.body);
  if (error) return next(Boom.badRequest("Bad request!"));

  if (await UserService.findUser(req.body.email)) {
    return next(Boom.conflict("The email already registered!"));
  }

  const createdUser = await UserService.register(req.body);
  const token = await UserService.signToken(createdUser)
  const user = { user: createdUser, token }
  
  res.send(user);
};

export default register;
