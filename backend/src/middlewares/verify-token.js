import Boom from 'boom'
import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {
  const authorizationToken = req.headers["authorization"]
	if (!authorizationToken) return next(Boom.unauthorized())

  jwt.verify(authorizationToken, process.env.SECRET_KEY_JWT, (err, payload) => {
		if (err) {
			return next(
				Boom.unauthorized(
					err.name === "JsonWebTokenError" ? "Unauthorized" : err.message
				)
			)
		}

		req.payload = payload
		next()
	})
}

export default verifyToken