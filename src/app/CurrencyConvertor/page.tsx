"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import currency from "../CurrencyConvertor/currency.png"; 
import Typewriter from 'typewriter-effect';

const Currency = () => {
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
        <div className="bg-[#dca0d7]"> 
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white p-4 rounded-md">
                            <Typewriter
                                options={{
                                    strings: ["Introducing My CLI Currency Converter: Simplifying Your Transactions! 💱"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h1>
                        <p className="mb-4 leading-relaxed text-lg text-gray-700">
                            An easy-to-use Command Line Interface (CLI) Currency Converter! 🌍💸 This tool allows you to convert currencies quickly and efficiently, all from the comfort of your terminal.
                            <br />
                            Why a CLI Currency Converter? 🤔 In our globalized economy, currency conversion is a common necessity. Having a reliable tool at your fingertips can make all the difference.
                            <br />
                            Key Features of the Currency Converter 💻
                        </p>
                        <ul className="list-disc ml-6 mb-4 text-gray-700">
                            <li>Real-Time Conversion Rates: The converter uses an API to fetch up-to-date exchange rates. 📈</li>
                            <li>User-Friendly Interface: Input the amount and currencies easily via command line.</li>
                            <li>Error Handling: Includes robust error handling for invalid inputs. ⚠️</li>
                            <li>Extensibility: Designed for future growth with potential additional features. 🌟</li>
                        </ul>
                        <div className="flex space-x-4 mt-8 ml-16">
                            <Link href="">
                            <button className="inline-flex text-[#8bc34a] bg-[#f0f4c3] border-0 py-3 px-8 focus:outline-none hover:bg-[#e6e7a3] rounded-lg shadow-md transition duration-300">
                                Source Code
                            </button></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                            <Image
                                className="rounded-lg shadow-lg"
                                alt="Currency Converter"
                                src={currency}
                                width={600}
                                height={400}
                                layout="responsive"
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
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-[#8bc34a] border-0 py-2 px-4 focus:outline-none hover:bg-[#7cb342] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
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
}

export default Currency;
