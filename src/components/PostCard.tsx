import Image from 'next/image'
import React from 'react'

function PostCard() {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-col">
        {/* <div className='py-3'>
            <Image alt='post-image' className='object-cover' src={''}/> 
        </div> */}
        <div className="flex flex-col">
          <h3 className="text-gray-800 pb-3">title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam architecto aperiam
            laborum, sint consequatur accusamus! Adipisci dolore reiciendis id alias cumque!
            Delectus cum a placeat ducimus. Accusantium, illo repellendus?
          </p>
        </div>
        <button className="px-3 py-2 text-white bg-blue-700 mt-2">Details</button>
      </div>
    </div>
  )
}

export default PostCard
