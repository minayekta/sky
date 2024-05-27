'use client'

import PostCard from '@/components/PostCard'
import { useState } from 'react'

export default function Home() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: any) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      body: JSON.stringify(inputValue),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await response.json()
    if (!response.ok) {
      console.error(res)
    } else {
      alert('با موفقیت ایجاد شد')
    }
  }

  return (
    <>
      <PostCard />
      <form onSubmit={handleSubmit} className="space-y-5">
        <textarea className="" value={inputValue} onChange={handleChange} />
        <button>submit</button>
      </form>
    </>
  )
}
