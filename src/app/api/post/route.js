// export default async function GET(req, res) {
//   res.status(200).json({ message: 'welcome' })
// }

import { connect } from '@/lib/db'
import { NextResponse } from 'next/server'
import Blog from '@/models/Blog'

export async function POST(req) {
  await connect()
  try {
    const body = await req.json()
    const newblog = await Blog.create(body)
    return NextResponse.json(newblog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'POST error (create blog)' })
  }
}

export async function GET(req) {
  await connect()

  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 })

    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json(
      { message: 'GET error' },
      {
        status: 500,
      },
    )
  }
}
