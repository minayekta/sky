import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [40, 'Title cannot be more than 40 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [500, 'Title cannot be more than 500 characters'],
    },
  },
  { timestamps: true },
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
