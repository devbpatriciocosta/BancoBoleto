import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { signInUser } from '../../../modules/user/user.service'
import { sigInSchema } from '../../../modules/user/user.schema'

import { ironConfig } from '../../../lib/middlewares/ironSession'

const signIn = createHandler()

signIn.post(validate({ body: sigInSchema }), async (req, res) => {
  try {
    const user = await signInUser(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.status(201).json({ ok: true })
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default withIronSessionApiRoute(signIn, ironConfig)
