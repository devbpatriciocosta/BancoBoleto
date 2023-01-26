import Post from './post.model'

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    number: body.number,
    createdBy: user.id
  })
}

export const getPosts = async (limit = 10) => {
  return await Post.find().populate('createdBy', 'user').limit(limit)
}
