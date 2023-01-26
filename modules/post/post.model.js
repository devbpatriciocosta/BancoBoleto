import mongoose from 'mongoose'

// eslint-disable-next-line no-unused-vars
import User from '../user/user.model'

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true },
  number: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
