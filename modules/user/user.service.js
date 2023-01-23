/* eslint-disable no-useless-catch */
import { hashPassword, comparePassword } from '../../utils/bcrypt'
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

export const loginUser = async (body) => {
  try {
    const user = await User.findOne({
      $or: [{ email: body.userOrEmail }, { user: body.userOrEmail }]
    })
    if (!user) throw new Error('not found')
    const passwordIsCorrect = comparePassword(body.password, user.password)
    if (!passwordIsCorrect) throw new Error('password incorrect')

    return user
  } catch (err) {
    throw err
  }
}
