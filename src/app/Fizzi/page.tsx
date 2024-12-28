"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import soda from '../Fizzi/soda.png'; 
import Typewriter from 'typewriter-effect';

const Fizzi = () => {
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
        <div className="bg-[#96e6ec]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            {isClient && ( // Render Typewriter only on the client
                                <Typewriter
                                    options={{
                                        strings: ["Welcome to Fizzi Soda: A 3D Animated Experience! 🍹✨"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            Hello and welcome to the Fizzi Soda website! I’m excited to take you on a journey through our vibrant world of 3D animation, powered by cutting-edge technologies like GSAP, Prismic, Next.js, and Three.js. This project combines creativity and tech to create a unique and engaging experience for all soda lovers. 🎨🌐
                            <br />
                            Using <strong>Three.js</strong>, I was able to craft stunning 3D visuals that bring our fizzy beverages to life. From dynamic bubbles to immersive environments, every detail is designed to enhance your interaction with our brand. 💫✨ The use of <strong>Next.js</strong> ensures a smooth and fast experience, allowing users to navigate effortlessly through our animated world.
                            <br />
                            To add a layer of sophistication, I integrated <strong>GSAP</strong> for smooth animations, creating a lively and playful feel throughout the site. The animations capture the essence of our products, making it fun for visitors to explore and engage with the content. 🌀🔧 Additionally, I utilized <strong>Prismic</strong> as a headless CMS, making it easy to manage and update content dynamically, ensuring the site stays fresh and relevant. 📚💻
                            <br />
                            I truly hope you enjoy exploring the Fizzi Soda website as much as I enjoyed building it! 🚀 If you have any feedback or ideas, I’d love to hear from you. Stay tuned for more updates, animations, and fizzy adventures ahead! Cheers! 🥤🎉
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://fizzi-3d-animated-page.vercel.app/">
                            <button className="inline-flex text-white bg-[#404c42] border-0 py-3 px-8 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button></Link>
                            <Link href="">
                            <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#b3dabd] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Soda"
                                src={soda}
                                layout="responsive"
                                width={500}
                                height={300}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#404c42] border-0 py-2 px-4 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Fizzi;
