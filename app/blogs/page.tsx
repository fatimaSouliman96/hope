import BlogsFillter from '@/components/blogsFiltter/BlogsFillter'
import MainSection from '@/components/MainSection/MainSection'
import React from 'react'

export default function blogsPage() {
  return (
    <div>
        <MainSection page='blogs-page' firsttext='The Anis Saadeh Angelic Association Blog'
        finaltext='A space to share our stories, achievements, and community impact.' />
        <div className='main' >
            <BlogsFillter/>

        </div>
    </div>
  )
}
