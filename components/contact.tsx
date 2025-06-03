// Contact Us section component
const Contact = () => {
    return (
        // Main section container with styling and ID for navigation
        <section id="contact" className="flex justify-center mt-20">
            <div className="bg-card rounded-2xl shadow-lg p-8 max-w-4xl w-full text-center">
                {/* Section title */}
                <h2 className="text-3xl font-bold text-primary mb-4">تواصل معنا</h2>
                
                {/* Introductory message */}
                <p className="text-lg text-foreground mb-6">
                    يسعدنا تواصلكم معنا لأي استفسار أو طلب خاص.<br />
                    يمكنكم التواصل عبر النموذج أو المعلومات التالية:
                </p>
                
                {/* Contact information */}
                <div className="mb-6">
                    {/* Phone number */}
                    <div className="mb-2">
                        <span className="font-semibold text-accent">الهاتف:</span>
                        <span className="text-foreground me-2" dir="ltr">+212 600-000000</span>
                    </div>
                    {/* Email address */}
                    <div className="mb-2">
                        <span className="font-semibold text-accent">البريد الإلكتروني:</span>
                        <span className="text-foreground ms-2">info@beebaraka.com</span>
                    </div>
                    {/* Physical address */}
                    <div>
                        <span className="font-semibold text-accent">العنوان:</span>
                        <span className="text-foreground ms-2">سيدي بوعثمان، المغرب</span>
                    </div>
                </div>
                
                {/* Contact form */}
                <form className="flex flex-col gap-4">
                    {/* Name input */}
                    <input
                        type="text"
                        placeholder="الاسم"
                        className="rounded-md border border-accent px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {/* Email input */}
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="rounded-md border border-accent px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {/* Message textarea */}
                    <textarea
                        placeholder="رسالتك"
                        rows={4}
                        className="rounded-md border border-accent px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-md px-6 py-2 font-semibold hover:bg-accent cursor-pointer hover:text-accent-foreground transition-colors"
                    >
                        إرسال
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;