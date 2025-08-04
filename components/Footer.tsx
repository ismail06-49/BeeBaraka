type ProductsProps = {
    lang: 'ar' | 'en';
};

// Footer component for the website
const Footer = ({ lang }: ProductsProps) => {
    return (
        // Footer container with background, border, and shadow styling
        <footer className="bg-muted border-t border-accent mt-16 py-6 text-center shadow-inner">
            {/* Copyright and site name */}
            <p className="text-foreground text-lg">
                {lang === 'ar'
                    ? <>© {new Date().getFullYear()} <span className="font-bold text-primary">BeeBaraka</span> — جميع الحقوق محفوظة.</>
                    : <>© {new Date().getFullYear()} <span className="font-bold text-primary">BeeBaraka</span> — All rights reserved.</>
                }
            </p>
        </footer>
    );
};

export default Footer;