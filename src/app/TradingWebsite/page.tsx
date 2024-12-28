"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import trading from '../TradingWebsite/trading.webp'; 
import Typewriter from 'typewriter-effect';

const Trading = () => {
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
        <div className="bg-black"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-blue-400 p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Navigating the Market: Insights from My Trading Journey! 📈💼"],
                                    autoStart: true,
                                    loop: false,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-white">
                            Welcome to my trading website! Here, I’ll share my experiences and insights as I navigate the dynamic world of trading. Whether you’re a beginner or a seasoned trader, I hope to provide valuable tips and strategies that can enhance your trading journey.
                            <br/>
                            One of the key lessons I’ve learned is the importance of having a solid trading plan. 📊 A well-structured plan not only helps in identifying potential opportunities but also minimizes emotional decision-making. By setting clear goals, risk management strategies, and entry/exit points, you can approach the market with confidence.
                            <br/>
                            Another vital aspect is continuous learning. 📚 The financial markets are constantly evolving, and staying informed about market trends, economic indicators, and news events can significantly impact your trading outcomes. I regularly read articles, watch webinars, and engage with fellow traders to keep my knowledge sharp.
                            <br/>
                            I invite you to join me on this journey! 🚀 Share your experiences, ask questions, and let’s build a community of informed traders. Stay tuned for more updates, tips, and market analyses as I continue to explore the exciting world of trading! 💪💰
                        </p>
                        
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://trading-website-seven.vercel.app/">
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
                                alt="Trading"
                                src={trading}
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

export default Trading;
