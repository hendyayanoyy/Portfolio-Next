"use client";

import React, { useState, useEffect } from "react";
import Loaders from "@/components/Loaders"; // Pastikan import path Loaders sesuai
import About from "@/components/About";
import Jumbotron from "@/components/Jumbotron";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol loading

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 2 detik, loading berhenti
    }, 2000);

    return () => clearTimeout(timer); // Membersihkan timer jika komponen di-unmount
  }, []);

  return (
    <main>
      {isLoading ? (
        // Tampilkan Loader jika halaman masih loading
        <div className="min-h-screen flex items-center justify-center">
          <Loaders />
        </div>
      ) : (
        <>
          <Jumbotron />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  );
}
