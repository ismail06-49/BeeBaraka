type ProductsProps = {
    lang: 'ar' | 'en';
};

// About Us section component
const About = ({ lang }: ProductsProps) => {
    // Content for both languages
    const content = {
        ar: {
            title: "من نحن",
            intro: (
                <>
                    <span className="font-semibold text-accent">BeeBaraka</span> هو متجر مغربي متخصص في تقديم أجود المنتجات الطبيعية الأصيلة:
                    <span className="font-semibold text-primary"> العسل، الزيوت الطبيعية، وأملو المغربي</span>.
                    نحن نؤمن بأن الصحة تبدأ من الطبيعة، ولذلك نختار منتجاتنا بعناية من مصادر موثوقة، لنضمن لكم الجودة والنقاء في كل قطرة وكل ملعقة.
                </>
            ),
            valuesTitle: "قيمنا",
            values: "الأمانة، الجودة، والشفافية في التعامل مع عملائنا، مع الحفاظ على التراث المغربي الأصيل.",
            visionTitle: "رؤيتنا",
            vision: "أن نكون الخيار الأول لكل من يبحث عن منتجات طبيعية وصحية، تجمع بين الأصالة والحداثة.",
        },
        en: {
            title: "About Us",
            intro: (
                <>
                    <span className="font-semibold text-accent">BeeBaraka</span> is a Moroccan store specializing in premium authentic natural products:
                    <span className="font-semibold text-primary"> honey, natural oils, and Moroccan amlou</span>.
                    We believe health starts with nature, so we carefully select our products from trusted sources to ensure quality and purity in every drop and every spoonful.
                </>
            ),
            valuesTitle: "Our Values",
            values: "Integrity, quality, and transparency in dealing with our customers, while preserving authentic Moroccan heritage.",
            visionTitle: "Our Vision",
            vision: "To be the first choice for anyone seeking natural and healthy products that blend authenticity and modernity.",
        }
    };

    const t = content[lang];

    return (
        // Main section container with styling and ID for navigation
        <section id="about" className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-card rounded-2xl shadow-lg text-center">
            {/* Section title */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.title}</h2>
            
            {/* Introduction and description */}
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                {t.intro}
            </p>
            
            {/* Values and vision cards */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
                {/* Values card */}
                <div className="flex-1 bg-muted rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">{t.valuesTitle}</h3>
                    <p className="text-foreground">
                        {t.values}
                    </p>
                </div>
                {/* Vision card */}
                <div className="flex-1 bg-muted rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">{t.visionTitle}</h3>
                    <p className="text-foreground">
                        {t.vision}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About