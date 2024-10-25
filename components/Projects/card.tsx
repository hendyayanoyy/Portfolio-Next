"use client"; // Pastikan ini ada

import React from "react";
import Image from "next/image";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "../../app/globals.css";

interface CardProjectProps {
    imageSrc: string;
    title: string;
    description: string;
    buttons: string[];
}

export default function CardProject({
    imageSrc,
    title,
    description,
    buttons,
}: CardProjectProps) {
    const openGallery = (event: React.MouseEvent<HTMLDivElement>) => {
        // Mencegah event click jika sudah ada gallery yang terbuka
        const lightGalleryElement = lightGallery(event.currentTarget, {
            dynamic: true,
            dynamicEl: [
                {
                    src: imageSrc,
                    thumb: imageSrc,
                    subHtml: `<h4>${title}</h4>`,
                },
            ],
        });
        lightGalleryElement.openGallery(); // Pastikan untuk memanggil ini
    };

    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
            {/* Image Section */}
            <div
                className="relative cursor-pointer mx-4 -mt-6 h-40 overflow-hidden border-2 border-white rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-xl shadow-blue-gray-500/40 "
                onClick={openGallery}
            >
                <Image
                    src={imageSrc}
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-full object-fill"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className="p-4">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased max-h-28 overflow-y-scroll scrollbar-hide">
                    {description}
                </p>
            </div>

            {/* Button Section */}
            <div className="flex items-center px-4 py-1 gap-2">
                {buttons.map((buttonLabel, index) => (
                    <p
                        key={index}
                        className="inline-block text-sm border border-blue-600 rounded-3xl px-2 text-center bg-transparent hover:bg-blue-600 cursor-pointer hover:border-gray-500 transition duration-300 ease-in-out"
                    >
                        {buttonLabel}
                    </p>
                ))}
            </div>

            {/* Read More Button */}
            <div className="p-4 pt-2">
                <button
                    type="submit"
                    className="flex justify-start gap-1 items-center mx-auto shadow-md text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-blue-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border-2 rounded-full group"
                >
                    Explore
                    <svg
                        className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
