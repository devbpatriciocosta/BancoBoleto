/* eslint-disable no-useless-catch */
import { hashPassword } from '../../utils/bcrypt'
import User from './user.model'

export const signInUser = async (body) => {
  try {
    const user = {
      ...body,
      password: hashPassword(body.password)
    }
    const dbUser = await User.create(user)
    return dbUser
  } catch (err) {
    throw err
  }
}
