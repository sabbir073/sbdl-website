'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-green-800 text-white shadow-lg hover:bg-green-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center group ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
            aria-label="Back to top"
        >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />

            {/* Pulse ring effect */}
            <span className="absolute inset-0 rounded-full bg-gold-500/20 animate-ping opacity-0 group-hover:opacity-100" />

            {/* Gold accent border on hover */}
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gold-500 transition-colors" />
        </button>
    );
}
