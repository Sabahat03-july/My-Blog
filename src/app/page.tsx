"use client";
import Image from 'next/image';
import { useState } from 'react';
import img from "../sabahat1.jpg";
import HtmlCss from './components/html-css';
import Javascript from './components/javascript';
import Typescript from './components/typescript';
import Reactjs from './components/reactjs';
import Nextjs from './components/nextjs';

const blogs = [
  { id: 1, title: 'Intro to HTML & CSS', category: 'HTML & CSS', content: <HtmlCss /> },
  { id: 2, title: 'Advanced JavaScript', category: 'JavaScript', content: <Javascript /> },
  { id: 3, title: 'Getting Started with TypeScript', category: 'TypeScript', content: <Typescript /> },
  { id: 4, title: 'React.js Best Practices', category: 'React.js', content: <Reactjs /> },
  { id: 5, title: 'Building with Next.js', category: 'Next.js', content: <Nextjs /> },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All'
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  // Determine if profile section should be visible
  const showProfile = selectedCategory === 'All';

  return (
    <div className="container mx-auto px-4 py-10 bg-black">

      {showProfile && (
        <>
          <div className="flex justify-center mb-6 mt-22">
            <Image
              src={img}
              alt="Profile Photo"
              className="w-40 h-40 rounded-full shadow-lg"
            />
          </div>

          <div className="text-center mb-6">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white leading-tight">SABAHAT </h1>
            <p className="text-slate-300 mt-2">
            Welcome to my personal blog, where I explore web development concepts and share insightful tutorials.            </p>
          </div>
        </>
      )}

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-8">
        {['All', 'HTML & CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'].map(category => (
          <button
            key={category}
            className={`m-2 px-6 py-3 text-sm rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl 
              ${selectedCategory === category ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 shadow-md'}`}
            onClick={() => setSelectedCategory(category)}
            style={{ minWidth: '120px' }} // Minimum width for buttons
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="grid gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-4"> {/* Added mb-4 for spacing */}
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600">{blog.category}</p>
              <div className="mt-2 text-gray-700">{blog.content}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
