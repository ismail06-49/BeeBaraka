import Image from "next/image";
import Honey from '@/public/honey.jpg';

const Hero = () => {
    return (
        <section className="relative bg-card mt-24 w-full max-w-6xl mx-auto rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-12 overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-80" />
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
            </div>
            {/* Text content */}
            <div className="flex-1 z-10 text-center md:text-right">
                <span className="inline-block mb-4 px-4 py-1 rounded-full bg-accent text-accent-foreground font-semibold text-base shadow-sm">
                    جودة مغربية أصيلة
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 drop-shadow-sm">
                    BeeBaraka
                </h1>
                <p className="text-xl md:text-2xl text-foreground mb-8 font-medium leading-relaxed">
                    عسل طبيعي، زيوت طبيعية، وأملو أصيل<br />
                    منتجات طبيعية مختارة بعناية من قلب المغرب
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer">
                        تسوق الآن
                    </button>
                    <a href="#about" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                        تعرف علينا
                    </a>
                </div>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center z-10">
                <Image
                    src={Honey}
                    alt="BeeBaraka Honey"
                    width={340}
                    height={340}
                    className="[clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;