// Footer component for the website
const Footer = () => {
    return (
        // Footer container with background, border, and shadow styling
        <footer className="bg-muted border-t border-accent mt-16 py-6 text-center shadow-inner">
            {/* Copyright and site name */}
            <p className="text-foreground text-lg">
                © {new Date().getFullYear()} <span className="font-bold text-primary">BeeBaraka</span> — جميع الحقوق محفوظة.
            </p>
        </footer>
    );
};

export default Footer;