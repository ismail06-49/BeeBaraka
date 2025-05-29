import About from "@/components/About";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 space-y-10">
      <Header />
      <section
        id='home'
        className="w-full pt-6 px-6"
      >
        <Hero />
      </section>
      <section
        id='product'
        className="w-full pt-6 px-6"
      >
        <Products />
      </section>
      <section
        id='about'
        className="w-full pt-6 px-6"
      >
        <About />
      </section>
      <section
        id='contact'
        className="w-full pt-6 px-6"
      >
        <Contact />
      </section>
      <Footer />
    </div>
  );
}