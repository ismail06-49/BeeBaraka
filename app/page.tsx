import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 space-y-10">
      <Header />
      <section
        id='home'
        className="w-full py-6 px-6"
      >
        <Hero />
      </section>
    </div>
  );
}