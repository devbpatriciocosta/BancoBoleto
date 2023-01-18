import Joi from 'joi'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { signInUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(50),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6)
})

const signIn = createHandler()

signIn.post(validate({ body: postSchema }), (req, res) => {
  signInUser(req.body)
  res.status(200).json({ teste: 'ok' })
})

export default signIn
