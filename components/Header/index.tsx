"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../app/globals.css";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null); // Tambahkan ref untuk tombol menu

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        // Cek apakah menu terbuka dan klik di luar menu dan tombol
        if (
            isMobileMenuOpen &&
            mobileMenuRef.current &&
            menuButtonRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            !menuButtonRef.current.contains(event.target as Node)
        ) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        // Menambahkan event listener untuk klik di luar
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Menghapus event listener saat komponen di-unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div>
            <nav className="container px-4 pt-2 pb-2 bg-opacity-90 sticky top-0 z-50">
                <div className="flex items-center justify-between mx-auto text-slate-800">
                    {/* Logo / Branding */}
                    <a
                        href="#"
                        className="block cursor-pointer py-1.5 text-3xl text-blue-800 font-semibold"
                    >
                        Hendi <span className="text-white">Saputra</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 items-center justify-center space-x-6">
                        <ul className="flex space-x-6 font-bold">
                            <li className="text-md text-slate-300">
                                <a href="#home">Home</a>
                            </li>
                            <li className="text-md text-slate-300">
                                <a href="#about">About</a>
                            </li>
                            <li className="text-md text-slate-300">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="text-md text-slate-300">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hire Me Button */}
                    <button className="relative py-1.5 px-4 text-sm sm:py-2 sm:px-6 sm:text-base text-black font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                        Hire Me
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        ref={menuButtonRef} // Menambahkan ref ke tombol mobile menu
                        className="lg:hidden focus:outline-none"
                    >
                        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                            <div
                                className={`w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-[-45deg] translate-y-[0.45rem]" : "translate-y-[0.45rem]"}`}
                            ></div>
                            <div
                                className={`w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center ${isMobileMenuOpen ? "hidden" : "block"}`}
                            ></div>
                            <div
                                className={`w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-[45deg] -translate-y-[0.45rem]" : "-translate-y-[0.45rem]"}`}
                            ></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef} // Menambahkan ref ke menu mobile
                    className={`lg:hidden fixed z-60 left-0 top-0 w-full h-full bg-slate-600 bg-opacity-90 shadow-lg transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-center h-full">
                        <ul className="flex flex-col items-center justify-center space-y-4 w-full text-center">
                            <li className="text-md text-white">
                                <a href="#home" onClick={toggleMobileMenu}>Home</a>
                            </li>
                            <li className="text-md text-white">
                                <a href="#about" onClick={toggleMobileMenu}>About</a>
                            </li>
                            <li className="text-md text-white">
                                <a href="#projects" onClick={toggleMobileMenu}>Projects</a>
                            </li>
                            <li className="text-md text-white">
                                <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
