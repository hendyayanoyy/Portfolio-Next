import React from "react";
import Image from "next/image";

export default function Index() {
    return (
        <div className="w-full">
            <footer className="footer bg-base-300 text-base-content p-10 bg-orange-500">
                <div className="container mx-auto flex flex-col md:flex-row gap-32">
                    <nav className="flex-1">
                        <h6 className="footer-title underline font-bold text-xl mb-4">About Me</h6>
                        <p>
                            I&#39;m Hendi Saputra, a passionate web developer with a keen interest in creating innovative and user-friendly digital experiences.
                        </p>
                    </nav>
                    <nav className="flex-1">
                        <h6 className="footer-title underline font-bold text-xl mb-4">Contact Info</h6>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                <Image
                                src="/Image/icon-phone.png"
                                alt="Contact Icon"
                                width={500}
                                height={500}
                                className="w-8 h-auto object-cover"
                                />
                                <a href="" className="font-bold text-lg">0896-5114-7717</a>
                                </div>

                                <div className="flex items-center gap-2">
                                <Image
                                src="/Image/icon-mail.png"
                                alt="Contact Icon"
                                width={500}
                                height={500}
                                className="w-8 h-auto object-cover"
                                />
                                <a href="" className="font-bold text-lg">hendisaputra2205@gmail.com</a>
                                </div>
                            </div>

                    </nav>
                    <nav className="flex-1">
                        <h6 className="footer-title underline font-bold text-xl mb-4">Follow Me</h6>
                        {/* Social Icons */}
                        <div className="flex flex-row gap-2 py-6 justify-start">
                            <a href="#" aria-label="Facebook" className="transform hover:scale-110 transition duration-300 ease-in-out">
                                <Image
                                    src="/Image/icon-fb.png"
                                    alt="Facebook Icon"
                                    width={500}
                                    height={500}
                                    className="lg:w-12 w-10 h-auto object-cover"
                                />
                            </a>
                            <a href="#" aria-label="Instagram" className="transform hover:scale-110 transition duration-300 ease-in-out">
                                <Image
                                    src="/Image/icon-ig.png"
                                    alt="Instagram Icon"
                                    width={500}
                                    height={500}
                                    className="lg:w-12 w-10 h-auto object-cover"
                                />
                            </a>
                            <a href="#" aria-label="GitHub" className="transform hover:scale-110 transition duration-300 ease-in-out">
                                <Image
                                    src="/Image/icon-github.png"
                                    alt="GitHub Icon"
                                    width={500}
                                    height={500}
                                    className="lg:w-12 w-10 h-auto object-cover"
                                />
                            </a>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
