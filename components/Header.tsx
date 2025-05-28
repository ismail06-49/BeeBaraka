'use client';

import { AlignJustify, Moon, Search, ShoppingCart, Sun, User, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from "react";

// Header component for the store's main navigation and announcement bar
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(true);
    
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);

    return (
        <header className="fixed top-0 w-full bg-muted shadow-lg z-20">
            {/* Main navigation bar */}
            <nav className="container mx-auto grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 items-center px-6">
                {/* Store logo/title */}
                <h1 className="font-bold text-2xl text-primary">BeeBaraka</h1>
                <button
                    className="md:hidden mx-auto me-0 text-accent hover:text-primary cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className='size-6' /> : <AlignJustify className='size-6' />}
                </button>
                {/* Navigation links */}
                <ul className={`mx-auto flex gap-4 ${menuOpen ? "block" : "hidden md:flex"}`}>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#home'>
                            الرئيسية
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#about'>
                            معلومات عنا
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#product'>
                            منتجاتنا
                        </Link>
                    </li>
                    <li className="font-normal py-2 text-foreground text-lg hover:text-primary border-t-4 border-t-transparent hover:border-t-4 hover:bg-accent/5 hover:border-t-accent cursor-pointer transition-colors">
                        <Link href='#contact'>
                            اتصل بنا
                        </Link>
                    </li>
                </ul>
                {/* Search input and action icons */}
                <div className="mx-auto py-4 mt-1 lg:mt-0 lg:me-0 col-span-2 lg:col-span-1 flex items-center gap-4">
                    {/* Search input with icon inside */}
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="بحث عن"
                            className="border border-accent rounded-md pl-10 pr-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 text-primary placeholder:text-accent"
                        />
                        {/* Search icon positioned inside the input */}
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                    </div>
                    {/* User icon */}
                    <User className="w-6 h-6 text-accent hover:text-primary cursor-pointer transition-colors" />
                    {/* Shopping cart icon */}
                    <ShoppingCart className="w-6 h-6 text-accent hover:text-primary cursor-pointer transition-colors" />
                    <button
                        onClick={() => setDark((d) => !d)}
                        className="w-6 h-6 text-accent hover:text-primary cursor-pointer transition-colors duration-200"
                    >
                        {dark ? <Sun /> : <Moon />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header