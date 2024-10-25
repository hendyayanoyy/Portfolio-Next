"use client";
import React from "react";
import Image from "next/image";
import ButtonCV from "./button";

export default function Index() {
    return (
        <div id="about" className="container mx-auto py-52 lg:py-40">
            <div className="bg-base-200 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:max-w-sm">
                        <div className="w-64 h-80 rounded-3xl shadow-xl overflow-hidden border-2 border-white">
                            <Image
                                src="/Image/foto-2.jpeg"
                                alt="Hero Image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="lg:ml-8 mt-6 lg:mt-0 lg:w-1/2 w-full">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
                            <p className="text-base lg:text-start text-center md:text-lg mb-6 text-slate-300">
                                I&#39;m Hendi Saputra, a passionate web developer with a keen interest in creating innovative
                                and user-friendly digital experiences. Currently, I ampursuing a degree in Informatics
                                Engineering, which has provided me with a strong foundation in both front-end and 
                                back-end development.
                            </p>
                            <Image
                                src="/Image/kutip.png"
                                alt="Quote Image"
                                width={500}
                                height={500}
                                className="lg:w-28 w-32 h-auto absolute lg:right-48 lg:block hidden transform rotate-12"
                            />
                        </div>

                        {/* Hire Me Button */}
                        <div className="flex justify-center mb-4 lg:justify-start">
                            <ButtonCV />
                        </div>

                        <div className="w-full lg:w-1/2 mt-6">
                            <hr className="border-t-2 border-gray-600" />
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-row gap-4 py-6 justify-center lg:justify-start">
                        <ul className="flex justify-center mt-5 space-x-5 cursor-pointer">
                        {/* Facebook */}
                        <li>
                            <a href="https://www.facebook.com/hendy.saputra.923171?mibextid=ZbWKwL" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 relative group">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-10 h-10 transition-transform duration-300 hover:scale-150"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-gray-300 text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Facebook
                                </span>
                            </a>
                        </li>

                        {/* Instagram */}
                        <li>
                            <a href="https://www.instagram.com/hendyayanoyy?igsh=cjYweDkzeGF5ajQ5" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 relative group">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-10 h-10 transition-transform duration-300 hover:scale-150"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-gray-300 text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Instagram
                                </span>
                            </a>
                        </li>

                            {/* GitHub */}
                            <li>
                                <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 relative group">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-10 h-10 transition-transform duration-300 hover:scale-150"
                                    >
                                        <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.801 8.205 11.387.6.11.82-.261.82-.577 0-.285-.01-1.235-.015-2.236-3.338.724-4.043-1.61-4.043-1.61-.546-1.38-1.333-1.747-1.333-1.747-1.089-.743.083-.728.083-.728 1.205.084 1.838 1.237 1.838 1.237 1.067 1.829 2.8 1.298 3.48.992.108-.774.418-1.298.76-1.597-2.665-.303-5.466-1.332-5.466-5.93 0-1.313.469-2.387 1.236-3.23-.124-.303-.536-1.53.117-3.183 0 0 1.008-.323 3.303 1.23.96-.266 1.99-.398 3.008-.403 1.018.005 2.048.137 3.008.403 2.295-1.553 3.303-1.23 3.303-1.23.653 1.653.241 2.88.118 3.183.77.843 1.236 1.917 1.236 3.23 0 4.606-2.805 5.623-5.465 5.924.43.37.814 1.095.814 2.207 0 1.594-.014 2.876-.014 3.265 0 .318.217.694.825.577C20.563 22.097 24 17.5 24 12.296c0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-gray-300 text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                        GitHub
                                    </span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
