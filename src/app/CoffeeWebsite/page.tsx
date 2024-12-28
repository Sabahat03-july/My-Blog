"use client"; 
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useState, ChangeEvent, FormEvent } from 'react';
import coffee from "../CoffeeWebsite/coffee.webp";
import Link from "next/link";

const Coffee = () => {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setIsSubmitting(true);
            setCommentList([...commentList, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!'); 
            setTimeout(() => {
                setFeedback('');
                setIsSubmitting(false); 
            }, 3000);
        }
    };

    return (
        <div className="bg-[#fff8e1] min-h-screen"> 
            <section className="max-w-6xl mx-auto text-gray-800 body-font">
                <div className="container flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-[#3e2712] leading-tight">
                            <Typewriter
                                options={{
                                    strings: ["☕️ Brewed to Perfection: My Coffee Website with Dynamic Animations 🌟"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-[#4e342e]">
                            Welcome to my coffee website, where every cup tells a story! ☕✨ This project allowed me to blend my passion for coffee with web design, creating an interactive experience that highlights the rich flavors and aromas of coffee culture.
                            <br />
                            Each section of the site is infused with creative animations that enhance user engagement, making it a delightful journey for coffee lovers. From bean to brew, I’ve meticulously designed each detail to celebrate the art of coffee.
                            <br />
                            I'm excited to share this project with you and can't wait to continue exploring the depths of web development and design!
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href="https://coffee-website-kappa-ruddy.vercel.app/">
                                <button className="inline-flex text-white bg-[#6d4c41] border-0 py-3 px-8 focus:outline-none hover:bg-[#8d6e63] rounded-lg shadow-md transition duration-300">
                                    Check it Here
                                </button>
                            </Link>

                            <Link href="">
                                <button className="inline-flex text-[#4e342e] bg-[#ffe0b2] border-0 py-3 px-8 focus:outline-none hover:bg-[#ffcc80] rounded-lg shadow-md transition duration-300">
                                    Source Code
                                </button> 
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Coffee Website"
                                src={coffee}
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
                        <button 
                            type="submit" 
                            className={`inline-flex items-center justify-center text-white bg-[#6d4c41] border-0 py-2 px-4 focus:outline-none hover:bg-[#8d6e63] rounded-lg shadow-md transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            disabled={isSubmitting} // Disable button while submitting
                        >
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

export default Coffee;
