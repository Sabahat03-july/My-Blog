"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import portfolio from '../MyPortfolio/portfolio.png'; 
import Typewriter from 'typewriter-effect';

const Portfolio = () => {
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
        <div className="bg-[#efa665]">
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-blue-400 p-4 rounded-md">
                            {isClient && ( // Render Typewriter only on the client
                                <Typewriter
                                    options={{
                                        strings: ["Welcome to My Portfolio! 🎨✨"],
                                        autoStart: true,
                                        loop: false,
                                        deleteSpeed: 50,
                                        delay: 75,
                                    }}
                                />
                            )}
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#333]">
                            Hello and welcome! I’m excited to share my journey and showcase my work through this portfolio. Here, you’ll find a collection of my projects, skills, and experiences that reflect my passion for [your field—e.g., web development, graphic design, etc.].
                            <br/>
                            Each project is a testament to my dedication and creativity. 💡 From [briefly mention a couple of projects or skills, e.g., creating responsive websites to designing engaging graphics], I strive to deliver high-quality results that exceed expectations. I believe in the power of collaboration and continuously seek opportunities to learn and grow in my craft.
                            <br/>
                            I also value feedback and insights from others. 📈 Your thoughts and suggestions help me refine my skills and push my creative boundaries. I invite you to explore my work, and please feel free to reach out with any questions or collaboration ideas!
                            <br/>
                            Thank you for visiting my portfolio! 🌟 I look forward to sharing my journey with you and connecting over our mutual interests. Stay tuned for updates and new projects as I continue to evolve in this exciting field! 🚀
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://my-profile-website-one.vercel.app/">
                            <button className="inline-flex text-white bg-[#3898b6] border-0 py-3 px-8 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300">
                                Check it Here
                            </button></Link>
                            <Link href="https://github.com/Sabahatsabahat/latestPortfolio.git">
                           <button className="inline-flex text-[#333] bg-[#e1e4e8] border-0 py-3 px-8 focus:outline-none hover:bg-[#d1d5da] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button> </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Portfolio"
                                src={portfolio}
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#3898b6] border-0 py-2 px-4 focus:outline-none hover:bg-[#0056b3] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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

export default Portfolio;
