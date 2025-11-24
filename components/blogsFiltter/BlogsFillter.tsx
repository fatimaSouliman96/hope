"use client"
import React, { useState } from 'react'
import './blogsFiltter.css'
import BlogCard from '../blogCard/BlogCard';
import { cards, posts } from '@/constant/blogsArticle';
import ResentPostsCard from '../recentPosrCard/ResentPostsCard';

export default function BlogsFillter() {
  const options = [
    "All Categories",
    "Success Stories",
    "Children with Disabilities",
    "Partnerships & Cooperation",
    "Youth Initiatives",
    "Community Awareness",
    "Volunteer Opportunities",
  ];

  const [currentTab, setCurrentTab] = useState("All Categories");

  return (
    <div className="tabs-blogs">
     
      <div className='posts posts-mob'>
         <p className='title-options title-options-mob'>Recent Posts:</p>
        {
          posts.map((ele, index) => {
            return <ResentPostsCard key={index} title={ele.title} desc={ele.description} img={ele.image} />
          })
        }
      </div>
      {/* محتوى التاب */}
      <div className="tab-content">
        <p className='title-options'>Blog Posts</p>
        <div className="content-cards">

          {currentTab === "All Categories"
            ? cards.map((ele, index) => (
              <BlogCard
                title={ele.title}
                desc={ele.description}
                img={ele.image}
                key={index}
              />
            ))
            : (() => {
              const index = options.indexOf(currentTab) - 1;
              const card = cards[index];
              return card ? (
                <BlogCard
                  title={card.title}
                  desc={card.description}
                  img={card.image}
                />
              ) : null;
            })()}
        </div>
      </div>

      {/* أزرار التابات */}
      <div className="tabs-option mb-3" role="group">
        <p className='title-options title-options-desk'>categories</p>
        {options.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`option ${currentTab === tab ? "active-option" : ""}`}
          >
            {tab}
          </button>
        ))}
        <p className='title-options title-options-desk'>Recent Posts:</p>
        <div className='posts posts-desk'>
          {
            posts.map((ele, index) => {
              return <ResentPostsCard key={index} title={ele.title} desc={ele.description} img={ele.image} />
            })
          }
        </div>
      </div>
      



    </div>
  );
};




