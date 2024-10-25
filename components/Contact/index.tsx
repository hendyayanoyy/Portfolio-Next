"use client";
import React, { useState } from "react";

export default function Index() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Tambahkan logika pengiriman pesan di sini
        console.log("Form data submitted:", formData);
        // Reset form jika perlu
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="container px-4 mx-auto py-40">
            <div id="contact" className="mx-auto">
                <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your email"
                                name="email"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-blue-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
