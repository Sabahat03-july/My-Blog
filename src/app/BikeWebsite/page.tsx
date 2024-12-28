"use client";
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import bike from '../BikeWebsite/bike.webp';
import Typewriter from 'typewriter-effect';

const Bike = () => {
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
        <div className="bg-[#5c68ec]"> 
            <section className="text-white body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            {isClient && ( 
                                <Typewriter
                                    options={{
                                        strings: ["Welcome to My Bike Website: Chat and Ride with Our Voice-Enabled Chatbot! 🚴‍♂️🤖🎤"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg">
                            Hello and welcome to my bike website! I’m excited to introduce a game-changing feature: our AI-powered chatbot with voice capabilities! This innovative tool is designed to enhance your browsing experience by allowing you to ask questions and receive answers through voice commands—making your visit even more interactive and enjoyable. 🌟
                            <br />
                            Integrating both chat and voice functionality has been a rewarding journey. 🛠️ I aimed to create an intuitive interface that is responsive and user-friendly, allowing you to engage in a natural conversation. This feature is designed to make your shopping experience smoother and more enjoyable, especially when you’re on the go.
                            <br />            
                            I hope you find the voice-enabled chatbot as useful as I intended it to be! 🚀 If you have any feedback or suggestions for improvements, I’d love to hear from you. Stay tuned for more updates and features as I continue to enhance the bike website for all cycling enthusiasts! 🌈
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://bike-website-six.vercel.app/">
                            <button className="inline-flex text-white bg-[#0e161f] border-0 py-3 px-8 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button></Link>
                            <Link href="https://github.com/Sabahat03-july">
                            <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#91b4e0] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Bike"
                                src={bike}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#656bc3] border-0 py-2 px-4 focus:outline-none hover:bg-[#5f92c8] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Bike;
