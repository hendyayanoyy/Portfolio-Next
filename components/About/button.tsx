import React from "react";

export default function ButtonCV() {
    const handleDownload = () => {
        // Ganti 'cv.pdf' dengan path file CV Anda
        const link = document.createElement('a');
        link.href = '/CV Hendi Saputra.pdf'; // Path ke file CV Anda
        link.setAttribute('download', 'CV_Hendi_Saputra.pdf'); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload} // Menambahkan onClick untuk mengunduh
            className="cursor-pointer flex justify-between bg-slate-200 px-3 py-2 rounded-full text-slate-800 font-bold tracking-wider shadow-xl hover:bg-slate-200 hover:scale-105 duration-500 hover:ring-1 font-mono w-[185px]"
        >
            Download - CV
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
            </svg>
        </button>
    );
}
