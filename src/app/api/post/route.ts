import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../utils/dbConnect'

export async function GET(req: Request): Promise<NextResponse> {
  return NextResponse.json({ message: 'welcome' }, { status: 200 })
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { content }: { content: object } = await req.json()

    if (!content || content == null) {
      throw new Error('محتوا نباید خالی باشه')
    }

    const db = await connectToDatabase()
    await db.collection('posts').insertOne({ content, createdAt: new Date() })

    return NextResponse.json('ok', { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }
}
