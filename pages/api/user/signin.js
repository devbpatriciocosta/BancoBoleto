import { signInUser } from '../../../modules/user/user.service'

function signIn(req, res) {
  signInUser()
  res.status(200).json({ teste: 'ok' })
}

export default signIn
