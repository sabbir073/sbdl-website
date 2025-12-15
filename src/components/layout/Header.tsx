'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Info, Briefcase, FolderKanban, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';

const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100 shadow-sm">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Sinbad Builders & Developers</span>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="Sinbad Builders & Developers Logo"
                                    width={50}
                                    height={50}
                                    className="h-12 w-auto"
                                    priority
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-green-900 tracking-tight leading-tight">Sinbad Builders</span>
                                    <span className="text-xs text-green-700 tracking-tight">& Developers</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-green-800 hover:bg-green-50 transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-green-900 hover:text-gold-600 transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                        <Link href="tel:+8801308407027" className="text-sm font-medium text-green-800 hover:text-green-600 flex items-center gap-1">
                            <span className="hidden xl:inline">+880 1308-407027</span>
                        </Link>
                        <Link href="/contact">
                            <Button variant="primary" size="sm">Get a Quote</Button>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Mobile menu - Separate from header for proper z-index */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100]">
                    {/* Dark backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu panel */}
                    <div className="absolute top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white shadow-2xl flex flex-col">
                        {/* Header with logo and close button */}
                        <div className="flex items-center justify-between p-4 bg-green-800">
                            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                                <Image
                                    src="/logo.png"
                                    alt="SBD Logo"
                                    width={36}
                                    height={36}
                                    className="h-9 w-auto"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white">Sinbad Builders</span>
                                    <span className="text-xs text-green-200">& Developers</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="p-2 rounded-full text-white hover:bg-green-700 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation Links - scrollable */}
                        <div className="flex-1 overflow-y-auto bg-white p-3">
                            <nav className="space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-900 hover:bg-green-50 active:bg-green-100 transition-colors border border-green-100"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="h-9 w-9 bg-green-100 rounded-lg flex items-center justify-center">
                                            <item.icon className="h-5 w-5 text-green-700" />
                                        </div>
                                        <span className="font-semibold">{item.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* CTA Button - Fixed at bottom */}
                        <div className="p-3 bg-green-50 border-t border-green-100">
                            <Link
                                href="/contact"
                                className="block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button variant="primary" size="md" className="w-full">
                                    Get a Free Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
