import Image from "next/image";
import Honey from "@/public/honey.jpg";
import Link from "next/link";

type HeroProps = {
    lang: 'ar' | 'en';
};

// Hero section component
const Hero = ({ lang }: HeroProps) => {
    return (
        // Main hero section container with background, spacing, and layout
        <section className="relative bg-card mt-24 w-full max-w-6xl mx-auto rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-12 overflow-hidden">

            {/* Decorative background pattern with gradients and blurred circles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-80" />
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
            </div>

            {/* Text content: badge, title, description, and call-to-action buttons */}
            <div className="flex-1 z-10 text-center">
                {/* Authenticity badge */}
                <span className="inline-block mb-4 px-4 py-1 rounded-full bg-accent text-accent-foreground font-semibold text-base shadow-sm">
                    {lang === 'ar' ? 'جودة مغربية أصيلة' : 'Authentic Moroccan Quality'}
                </span>
                {/* Main title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 drop-shadow-sm">
                    BeeBaraka
                </h1>
                {/* Description */}
                <p className="text-xl md:text-2xl text-foreground mb-8 font-medium leading-relaxed">
                    {lang === 'ar'
                        ? <>عسل طبيعي، زيوت طبيعية، وأملو أصيل<br />منتجات طبيعية مختارة بعناية من قلب المغرب</>
                        : <>Pure honey, natural oils, and authentic Amlou.<br />Carefully selected natural products from the heart of Morocco.</>
                    }
                </p>
                {/* Call-to-action buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href='#product' className="bg-primary text-primary-foreground border-2 border-accent hover:border-primary px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer">
                        {lang === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                    </Link>
                    <Link href="#about" className="bg-accent text-accent-foreground border-2 border-primary hover:border-accent px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                        {lang === 'ar' ? 'تعرف علينا' : 'About Us'}
                    </Link>
                </div>
            </div>

            {/* Responsive honeycomb grid */}
            <div className="relative w-full md:w-1/2 aspect-square max-w-[500px] flex items-center justify-center z-10">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 w-full max-w-[400px]">
                    {/* Top row - 2 hexagons */}
                    <div className="col-span-3 grid grid-cols-2 gap-2 sm:gap-3 mx-auto w-2/3">
                        <div className="relative aspect-square">
                            <Image
                                src={Honey}
                                alt="BeeBaraka Honey"
                                fill
                                className="object-cover [clip-path:polygon(50%_0,_100%_30%,_100%_70%,_50%_100%,_0_70%,_0_30%)] transform hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <div className="relative aspect-square">
                            <Image
                                src={Honey}
                                alt="BeeBaraka Honey"
                                fill
                                className="object-cover [clip-path:polygon(50%_0,_100%_30%,_100%_70%,_50%_100%,_0_70%,_0_30%)] transform hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* Middle row - 3 hexagons */}
                    <div className="col-span-3 grid grid-cols-3 gap-2 sm:gap-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative aspect-square">
                                <Image
                                    src={Honey}
                                    alt="BeeBaraka Honey"
                                    fill
                                    className="object-cover [clip-path:polygon(50%_0,_100%_30%,_100%_70%,_50%_100%,_0_70%,_0_30%)] transform hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom row - 2 hexagons */}
                    <div className="col-span-3 grid grid-cols-2 gap-2 sm:gap-3 mx-auto w-2/3">
                        {[1, 2].map((i) => (
                            <div key={i} className="relative aspect-square">
                                <Image
                                    src={Honey}
                                    alt="BeeBaraka Honey"
                                    fill
                                    className="object-cover [clip-path:polygon(50%_0,_100%_30%,_100%_70%,_50%_100%,_0_70%,_0_30%)] transform hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;