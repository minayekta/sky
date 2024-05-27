import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../utils/dbConnect'
export async function GET(req, res) {
  return NextResponse.status(200).json({ message: 'welcome' })
}

export async function POST(req, res) {
  try {
    const { content } = await req.json()
    if (content.trim().length === 0) {
      throw new error('محتوا نباید خالی باشه')
    }
    const db = await connectToDatabase()
    await db.collection('posts').insertOne({ content, createdAt: new Date() })
  } catch (err) {
    return NextResponse.status(400).json(err.message)
  }
}
