import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from "../models/user";

class UserService {
  model = UserModel

  deleteKeys(data) {
    const user = data.toObject()
    delete user.__v
    delete user.password
    return user
  }

  findUser(email) {
    return this.model.findOne({email: email})
  }

  async register(userData) {
    const user = await this.model.create(userData)
    return this.deleteKeys(user)
  }
  
  async comparePassword(inputPassword, userPassword) {
    return await bcrypt.compare(inputPassword, userPassword)
  }

  signToken(user) {
    return new Promise((res, rej) => {
      const options = {
        expiresIn: '7d'
      }
      const payload = {
        ...user
      }

      jwt.sign(payload, process.env.SECRET_KEY_JWT, options, (err, token) => {
        if(err) return rej(err)
        res(token)
      })
    })
  }
}

export default new UserService()