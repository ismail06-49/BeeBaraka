'use client';

import { useState, useEffect } from "react";
import About from "@/components/About";         // About Us section
import Contact from "@/components/Contact";      // Contact section
import Footer from "@/components/Footer";        // Footer component
import Header from "@/components/Header";        // Header/navigation bar
import Hero from "@/components/Hero";            // Hero/banner section
import Products from "@/components/Products";    // Products listing

// Main homepage component
export default function Home() {

  // State for language and direction
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  // Update html lang and dir attributes when lang changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    // Main container with background, text color, and spacing
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 space-y-10">
      {/* Site header/navigation */}
      <Header lang={lang} setLang={setLang} />

      {/* Hero section (main banner) */}
      <section
        id='home'
        className="w-full pt-6 px-6"
      >
        <Hero lang={lang} />
      </section>

      {/* Products section */}
      <section
        id='product'
        className="w-full pt-6 px-6"
      >
        <Products lang={lang} />
      </section>

      {/* About Us section */}
      <section
        id='about'
        className="w-full pt-6 px-6"
      >
        <About lang={lang} />
      </section>

      {/* Contact section */}
      <section
        id='contact'
        className="w-full pt-6 px-6"
      >
        <Contact lang={lang} />
      </section>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}