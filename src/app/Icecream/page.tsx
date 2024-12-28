"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ice from '../Icecream/ice-cream.png';
import Typewriter from 'typewriter-effect';

const Icecream = () => {
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
        <div className="bg-[#f7e3e7]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500 p-4 rounded-md">
                            {isClient && ( 
                                <Typewriter
                                    options={{
                                        strings: ["Welcome to My Ice Cream Website: Chill Out with My Voice Chatbot! 🍦🤖🎤"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#424242]">
                            Hello, and welcome to my ice cream website! I’m thrilled to introduce a delightful new feature: our voice-enabled chatbot! This fun and interactive tool is designed to enhance your experience by allowing you to ask questions and receive answers about our delicious ice cream flavors and products—all by simply using your voice. 🌟
                            <br />
                            Our chatbot is your friendly assistant, ready to help you discover everything from classic flavors to seasonal specials. 🍨💬 Whether you’re curious about ingredients, looking for recommendations, or wanting to know about our latest promotions, just speak up, and the chatbot will respond instantly, making your ice cream journey sweeter and easier!
                            <br />
                            Integrating voice functionality into the chatbot has been a delightful challenge. 🛠️ I focused on creating a seamless user experience, ensuring that it understands and responds to your queries naturally. This feature is designed to make ordering and exploring our ice cream offerings a breeze, even when you’re busy or on the go.
                            <br />
                            I hope you enjoy interacting with our voice-enabled chatbot as much as I enjoyed creating it! 🚀 If you have any feedback or ideas for improvement, I’d love to hear from you. Stay tuned for more updates and exciting flavors as I continue to enhance the ice cream website for all dessert lovers! 🍧🌈
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://ice-cream-website-using-chatbot.vercel.app/">
                            <button className="inline-flex text-white bg-[#992ba3] border-0 py-3 px-8 focus:outline-none hover:bg-[#9e73b3] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button></Link>
                           <Link href="">
                           <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#757579] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Ice Cream"
                                src={ice}
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
                        className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 resize-none"
                        maxLength={200}
                        required
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{comments.length}/200</span>
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#992ba3] border-0 py-2 px-4 focus:outline-none hover:bg-[#a100b3] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Icecream;
