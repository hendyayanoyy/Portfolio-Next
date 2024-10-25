"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import "../../app/globals.css";

export default function Index() {
    useEffect(() => {
        class TxtType {
            toRotate: string[];
            el: HTMLElement;
            loopNum: number = 0;
            period: number;
            txt: string = '';
            isDeleting: boolean = false;

            constructor(el: HTMLElement, toRotate: string[], period: number) {
                this.toRotate = toRotate;
                this.el = el;
                this.period = period;
                this.tick();
            }

            tick() {
                const i = this.loopNum % this.toRotate.length;
                const fullTxt = this.toRotate[i];
                this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);

                this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

                let delta = this.isDeleting ? 100 : 200 - Math.random() * 100;

                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                setTimeout(() => this.tick(), delta);
            }
        }

        const elements = document.getElementsByClassName('typewrite') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), parseInt(period || '2000', 10));
            }
        }

        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000 }";
        document.body.appendChild(css);
    }, []);

    return (
        <div id="home" className="container py-72 mx-auto flex flex-col justify-center items-center text-center sm:items-start sm:text-left -mt-20 relative">
            <div className="blob absolute top-60 lg:left-2/4 left-0 z-0"></div>
            <div className="z-10 pt-12">
                {/* Animasi untuk teks "Hi There!" */}
                <motion.h1
                    className="lg:text-slate-300 text-slate-600 text-2xl sm:text-3xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi There!
                </motion.h1>

                {/* Animasi untuk nama */}
                <motion.p
                    className="lg:text-slate-300 text-slate-600 text-4xl sm:text-6xl md:text-7xl font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    I&#39;m <span className="text-blue-700">Hendi Saputra</span>
                </motion.p>

                {/* Animasi untuk teks berjalan (typewriter effect) */}
                <motion.a
                    href="#/"
                    className="typewrite text-xl sm:text-2xl lg:text-slate-300 text-slate-600 text-shadow-xl"
                    data-period="3000"
                    data-type='[ "Web Developer.", "Front-End Developer.", "Back-End Developer." ]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="wrap"></span>
                </motion.a>
            </div>
        </div>
    );
}
