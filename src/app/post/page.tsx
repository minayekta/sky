import React from 'react'
import PostCard from '@/components/PostCard'



export default function Post() {

  return (
    <div className="flex flex-wrap mx-3">
        <div className="w-full md:w-1/3 p-3">
            <PostCard/>
        </div>
        <div className="w-full md:w-1/3 p-3">
            <PostCard/>
        </div>
        <div className="w-full md:w-1/3 p-3">
            <PostCard/>
        </div>
        <div className="w-full md:w-1/3 p-3">
            <PostCard/>
        </div>
        <div className="w-full md:w-1/3 p-3">
            <PostCard/>
        </div>
  </div>
  );
};

