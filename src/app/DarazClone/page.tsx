"use client";
import Link from "next/link";
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import daraz from "../DarazClone/daraz.jpg";

const Daraz = () => {
  const [comments, setComments] = useState('');
  const [commentList, setCommentList] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comments.trim()) {
      setCommentList([...commentList, comments]);
      setComments('');
      setFeedback('Comment submitted! Thank you!'); // Feedback message
      setTimeout(() => setFeedback(''), 3000); // Clear feedback after 3 seconds
    }
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen">
      <section className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="lg:w-1/2 w-full mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-6 leading-tight mt-10">
              {isMounted && (
                <Typewriter
                  options={{
                    strings: ["Cloning Daraz with HTML, CSS, Bootstrap, and Slick.js! 🛍️"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              )}
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-700">
              Created a clone of Daraz using HTML, CSS, Bootstrap, and Slick.js! 🎉 This project provided an incredible opportunity to apply my web development skills and dive deeper into creating responsive designs and interactive user experiences.
              <br />
              Utilizing Bootstrap was key in ensuring that the website is mobile-friendly and visually appealing across all devices.
            </p>
            <div className="flex space-x-4 mt-4 ml-16">
              <Link href="https://daraz-clone-mocha.vercel.app/">
             <button className="inline-flex items-center justify-center text-white bg-red-600 border-0 py-3 px-6 focus:outline-none hover:bg-red-700 rounded-lg shadow-md transition duration-300">
                Check it Here
              </button> </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative transition-transform transform hover:scale-105 duration-500 w-full max-w-md">
              <Image
                className="rounded-lg shadow-lg object-cover mt-24"
                alt="Daraz Clone"
                src={daraz}
                width={720}
                height={480}
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
          {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
          <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
            <textarea
              value={comments}
              onChange={handleCommentChange}
              placeholder="Add your comment here..."
              className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 resize-none"
              maxLength={200}
              required
            />
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{comments.length}/200</span>
              <button type="submit" className="inline-flex items-center justify-center text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded-lg shadow-md transition duration-300">
                Submit Comment
              </button>
            </div>
          </form>
          <div className="mt-4 max-h-60 overflow-y-auto">
            {commentList.length > 0 ? (
              <ul className="list-disc pl-5">
                {commentList.map((comment, index) => (
                  <li key={index} className="text-gray-700 py-1">{comment}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No comments yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daraz;
