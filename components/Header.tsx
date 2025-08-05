'use client';

import { AlignJustify, Moon, Search, ShoppingCart, Sun, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from "react";

type HeaderProps = {
    lang: 'ar' | 'en';
    setLang: (lang: 'ar' | 'en') => void;
    currency: 'MAD' | 'CAD';
    setCurrency: (currency: 'MAD' | 'CAD') => void;
};

// Header component for the store's main navigation and announcement bar
const Header = ({ lang, setLang, currency, setCurrency }: HeaderProps) => {
    // State for mobile menu toggle
    const [menuOpen, setMenuOpen] = useState(false);
    // State for dark mode toggle
    const [dark, setDark] = useState(true);

    const [settingsOpen, setSettingsOpen] = useState(false);

    // Effect to add/remove dark mode class on body
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);

    return (
        // Header container with background and shadow
        <header className="fixed top-0 w-full bg-muted shadow-lg z-20">
            {/* Main navigation bar */}
            <nav className="container mx-auto grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 items-center px-6">
                {/* Store logo/title */}
                <h1 className="font-bold text-2xl text-primary">BeeBaraka</h1>
                
                {/* Mobile menu toggle button */}
                <button
                    className="md:hidden mx-auto me-0 text-accent hover:text-primary cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className='size-6' /> : <AlignJustify className='size-6' />}
                </button>
                
                {/* Navigation links */}
                <ul className={`mx-auto flex gap-4 md:gap-6 ${menuOpen ? "block" : "hidden md:flex"}`}>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#home'>
                            {lang === 'ar' ? 'الرئيسية' : 'Home'}
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#product'>
                            {lang === 'ar' ? 'منتجاتنا' : 'Products'}
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#about'>
                            {lang === 'ar' ? 'معلومات عنا' : 'About Us'}
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#contact'>
                            {lang === 'ar' ? 'اتصل بنا' : 'Contact'}
                        </Link>
                    </li>
                </ul>
                
                {/* Search input and action icons */}
                <div className="mx-auto py-4 mt-1 lg:mt-0 lg:me-0 col-span-2 lg:col-span-1 flex items-center gap-4">
                    {/* Search input with icon inside */}
                    <div className="relative">
                        <input
                            type="search"
                            placeholder={lang === 'ar' ? "بحث عن" : "Search"}
                            className="w-full border border-accent rounded-md pl-10 pr-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 text-primary placeholder:text-accent"
                        />
                        {/* Search icon positioned inside the input */}
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                    </div>
                    {/* Shopping cart icon */}
                    <ShoppingCart className="w-6 h-6 text-accent hover:text-primary cursor-pointer transition-colors" />
                    {/* Dark mode toggle button */}
                    <button
                        onClick={() => setDark((d) => !d)}
                        className="w-6 h-6 text-accent hover:text-primary cursor-pointer transition-colors duration-200"
                        aria-label="Toggle dark mode"
                    >
                        {dark ? <Sun /> : <Moon />}
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setSettingsOpen((open) => !open)}
                            className="px-3 py-1 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                            aria-label="Open settings menu"
                        >
                            {lang === 'ar' ? 'الإعدادات' : 'Settings'}
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Dropdown menu */}
                        {settingsOpen && (
                            <div className={`absolute ${lang === 'ar' ? '-right-10' : 'right-0'} mt-2 w-40 bg-card border border-accent rounded-md shadow-lg z-50 p-4 flex flex-col gap-3`}>
                                {/* Language selection */}
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-foreground">
                                        {lang === 'ar' ? 'اللغة' : 'Language'}
                                    </label>
                                    <select
                                        value={lang}
                                        onChange={e => {
                                            setLang(e.target.value as 'ar' | 'en');
                                            setSettingsOpen(false); // Close menu after selection
                                        }} 
                                        className="w-full rounded-md border border-accent px-2 py-1 bg-background text-foreground"
                                    >
                                        <option value="ar">العربية</option>
                                        <option value="en">English</option>
                                    </select>
                                </div>
                                {/* Currency selection */}
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-foreground">
                                        {lang === 'ar' ? 'العملة' : 'Currency'}
                                    </label>
                                    <select
                                        value={currency}
                                        onChange={e => {
                                            setCurrency(e.target.value as 'MAD' | 'CAD');
                                            setSettingsOpen(false); // Close menu after selection
                                        }}
                                        className="w-full rounded-md border border-accent px-2 py-1 bg-background text-foreground"
                                    >
                                        <option value="MAD">{lang === 'ar' ? 'درهم مغربي' : 'MAD'}</option>
                                        <option value="CAD">{lang === 'ar' ? 'دولار كندي' : 'CAD'}</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;