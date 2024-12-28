"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import recipe from '../RecipeSearch/recipe.png'; 
import Typewriter from 'typewriter-effect';

const Recipe = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isClient, setIsClient] = useState(false); 

    useEffect(() => {
        setIsClient(true); 
    }, []);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList([...commentList, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!');
            setTimeout(() => setFeedback(''), 3000);
        }
    };

    return (
        <div className="bg-[#f6f5f5]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-black p-4 rounded-md">
                            {isClient && ( 
                                <Typewriter
                                    options={{
                                        strings: ["Welcome to My Recipe Search App! 🍽️✨"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#424242]">
                            Hello, and welcome to my Recipe Search App! I’m thrilled to share this project with you, where cooking meets technology. Built with <strong>Next.js</strong>, this app allows users to effortlessly search for delicious recipes using a powerful API, all styled with the sleek and responsive design of <strong>Tailwind CSS</strong>. 🌟
                            <br />
                            The app features a user-friendly interface that makes it easy to find recipes based on ingredients, dietary preferences, and cuisine types. 🥗🍝 By leveraging a robust API, users can access a wide range of recipes, ensuring that there’s something for everyone, whether you’re a seasoned chef or just starting out in the kitchen.
                            <br />
                            Throughout the development process, I honed my skills in <strong>Next.js</strong> for building a fast and scalable application. The dynamic routing capabilities make it simple to navigate between recipes and search results. 📲🔍 Meanwhile, <strong>Tailwind CSS</strong> allowed me to create a clean and modern aesthetic, ensuring a delightful user experience on both desktop and mobile devices.
                            <br />
                            I hope you enjoy using the Recipe Search App as much as I enjoyed building it! 🚀 If you have any suggestions or feedback, I’d love to hear from you. Stay tuned for more updates, features, and culinary adventures ahead! 🍳🎉
                        </p>
                        <div className="flex space-x-4 mt-8">
                           <Link href="https://recipe-search-website-theta.vercel.app/">
                            <button className="inline-flex text-white bg-[#007bff] border-0 py-3 px-8 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button></Link>
                            <Link href="">
                            <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#d1d5da] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Recipe"
                                src={recipe}
                                layout="responsive"
                                width={720}
                                height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment Section */}
            <section className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
                {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <textarea
                        value={comments}
                        onChange={handleCommentChange}
                        placeholder="Add your comment here..."
                        className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                        maxLength={200}
                        required
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{comments.length}/200</span>
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#007bff] border-0 py-2 px-4 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                            Submit Comment
                        </button>
                    </div>
                </form>
                <div className="mt-4 max-h-60 overflow-y-auto">
                    {commentList.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {commentList.map((comment, index) => (
                                <li key={index} className="text-gray-700 py-1 border-b last:border-b-0">{comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No comments yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Recipe;
