import { hashPassword } from '../../utils/bcrypt'

export const signInUser = (body) => {
  const user = {
    ...body,
    password: hashPassword(body.password)
  }
  console.log(body)
  console.log(user)
  return true
}
