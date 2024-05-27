import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO.URI)
    console.log('DB connected')
  } catch (error) {
    console.log('db connecting error', error)
  }
}
export default connectDB
