import Joi from 'joi'

export const createPostSchema = Joi.object({
  text: Joi.string().required().max(256),
  number: Joi.number().required()
})
