import { connectToDatabase } from '../../../utils/dbConnect'
export async function GET(req, res) {
  res.status(200).json({ message: 'welcome' })
}

export async function POST(req, res) {
  try {
    const { content } = await req.json()
    if (content.trim().length === 0) {
      throw new error('محتوا نباید خالی باشه')
    }
    const db = await connectToDatabase()
    db.collection('posts').insertOne({ content, createdAt: new Date() })
  } catch (err) {
    res.status(400).json(err.message)
  }
}
