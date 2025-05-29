const About = () => {
    return (
        <section id="about" className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-card rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">من نحن</h2>
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-accent">BeeBaraka</span> هو متجر مغربي متخصص في تقديم أجود المنتجات الطبيعية الأصيلة: 
                <span className="font-semibold text-primary"> العسل، الزيوت الطبيعية، وأملو المغربي</span>.
                نحن نؤمن بأن الصحة تبدأ من الطبيعة، ولذلك نختار منتجاتنا بعناية من مصادر موثوقة، لنضمن لكم الجودة والنقاء في كل قطرة وكل ملعقة.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
                <div className="flex-1 bg-muted rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">قيمنا</h3>
                    <p className="text-foreground">
                        الأمانة، الجودة، والشفافية في التعامل مع عملائنا، مع الحفاظ على التراث المغربي الأصيل.
                    </p>
                </div>
                <div className="flex-1 bg-muted rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">رؤيتنا</h3>
                    <p className="text-foreground">
                        أن نكون الخيار الأول لكل من يبحث عن منتجات طبيعية وصحية، تجمع بين الأصالة والحداثة.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About