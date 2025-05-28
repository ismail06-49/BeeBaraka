"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans p-8 bg-app-background text-app-foreground transition-colors duration-300">
      <button
        onClick={() => setDark((d) => !d)}
        className="absolute top-6 right-6 bg-app-muted text-app-muted-foreground border-none rounded-app px-4 py-2 cursor-pointer font-medium text-base shadow transition-colors duration-200"
      >
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="bg-app-card text-app-card-foreground rounded-app shadow-lg p-8 max-w-md text-center transition-colors duration-300">
        <Image
          src="/honey-jar.png"
          alt="Honey Jar"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-app-primary text-2xl mb-2 font-bold transition-colors duration-300">
          BeeBaraka
        </h1>
        <p className="text-app-accent text-lg mb-4 transition-colors duration-300">
          Pure Honey, Natural Oils, and Authentic Amlou.<br />
          Taste the goodness of nature!
        </p>
        <button className="bg-app-primary text-app-primary-foreground border-none rounded-app px-6 py-3 font-semibold cursor-pointer text-base shadow transition-colors duration-200">
          Shop Now
        </button>
      </div>
    </main>
  );
}