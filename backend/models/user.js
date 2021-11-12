import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		toJSON: false,
	},
	role: {
		type: String,
		default: "user",
		enum: ["user", "admin"],
	}
})

userSchema.pre('save', async function() {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashed = await bcrypt.hash(this.password, salt);
		this.password = hashed;
	} 
	catch (error) {
		return error
	}
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel