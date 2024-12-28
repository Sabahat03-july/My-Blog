"use client"; 
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useState, ChangeEvent, FormEvent } from 'react';
import food from "../FoodWebsite/food.webp";
import Link from "next/link"

const Food = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList([...commentList, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!'); 
            setTimeout(() => setFeedback(''), 3000); 
        }
    };

    return (
        <div className="bg-[#fff8e1] min-h-screen"> 
            <section className="max-w-6xl mx-auto text-gray-800 body-font">
                <div className="container flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-[#b71c1c] leading-tight">
                            <Typewriter
                                options={{
                                    strings: ["🍽️ Unveiling My Latest Creation: A Food Website with Dynamic Animations 🌟"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#4e342e]">
                            A stunning food website built using HTML and CSS, enhanced with dynamic scroll animations from AOS! 🍔✨ This journey was both challenging and rewarding, allowing me to explore the intricacies of creative design and smooth animations.
                            <br />
                            Throughout the project, each phase was an opportunity to learn and refine my skills. I enjoyed crafting an engaging user experience, where every scroll reveals captivating animations that draw users in. The combination of clean layouts and dynamic effects made the process incredibly enjoyable. 🎉
                            <br />
                            I’m thrilled with the final result and can’t wait to dive into my next web adventure! 🚀 Join me as I continue to push the boundaries of web development and design.
                        </p>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="https://food-responsive-website.vercel.app/">
                                <button className="inline-flex text-white bg-[#d32f2f] border-0 py-3 px-8 focus:outline-none hover:bg-[#c66060] rounded-lg shadow-md transition duration-300">
                                    Check it Here
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Food Website"
                                src={food}
                                width={720}
                                height={600}
                                layout="responsive"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
                {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <textarea
                        value={comments}
                        onChange={handleCommentChange}
                        placeholder="Add your comment here..."
                        className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d32f2f] transition duration-300 resize-none"
                        maxLength={200}
                        required
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{comments.length}/200</span>
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#d32f2f] border-0 py-2 px-4 focus:outline-none hover:bg-[#c66060] rounded-lg shadow-md transition duration-300">
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
        </div>
    );
}

export default Food;
