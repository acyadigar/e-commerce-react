import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user";

class UserService {
  model = UserModel;

  findUser(email) {
    return this.model.findOne({ email: email });
  }

  findAll() {
    return this.model.find();
  }

  async register(userData) {
    return await this.model.create(userData);
  }

  async comparePassword(inputPassword, userPassword) {
    return await bcrypt.compare(inputPassword, userPassword);
  }

  signToken(user) {
    return new Promise((res, rej) => {
      const options = {
        expiresIn: "7d",
      };
      const payload = {
        ...user,
      };

      jwt.sign(payload, process.env.SECRET_KEY_JWT, options, (err, token) => {
        if (err) return rej(err);
        res(token);
      });
    });
  }
}

export default new UserService();
