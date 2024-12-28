"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import gemini from '../GeminiBot/gemini.png'; 
import Typewriter from 'typewriter-effect';

const Gemini = () => {
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
        <div className="bg-[#c1b8ad]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-blue-400 p-4 rounded-md">
                            {isClient && ( // Render Typewriter only on the client
                                <Typewriter
                                    options={{
                                        strings: ["Unlock the Power of Automation with Gemini Bot! 🤖✨"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            Welcome to my Gemini Bot website! Here, I’m excited to share how this powerful automation tool can simplify tasks and enhance productivity in various areas of your life. Whether you are managing trades, organizing your schedule, or streamlining workflows, Gemini Bot is designed to help you achieve more with less effort.
                            <br/>
                            One of the key advantages of using Gemini Bot is its versatility. 🌟 From automated trading to personal finance management, this bot adapts to your specific needs, allowing you to focus on what truly matters. Imagine having a virtual assistant that works around the clock, optimizing your tasks and ensuring you never miss an opportunity!
                            <br/>
                            User-friendliness is at the core of Gemini Bot’s design. 🛠️ With an intuitive interface, setting up and customizing the bot is a breeze. You can easily define your preferences, monitor progress, and make adjustments as needed, all while enjoying a seamless experience.
                            <br/>
                            I’m thrilled to embark on this journey with you! 🚀 As I explore the capabilities of Gemini Bot, I’ll be sharing tips, tutorials, and insights to help you maximize its potential. Join me, and let’s embrace the future of automation together! 💡💼
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://gemini-bot-rouge.vercel.app/">
                            <button className="inline-flex text-white bg-[#477db6] border-0 py-3 px-8 focus:outline-none hover:bg-[#3d6591] rounded-lg shadow-md transition duration-300">
                                Check it
                            </button></Link>
                           <Link href=""> <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#6d6e70] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Gemini Bot"
                                src={gemini}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#477db6] border-0 py-2 px-4 focus:outline-none hover:bg-[#3d6591] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Gemini;
