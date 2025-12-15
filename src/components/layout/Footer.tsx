import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Research & Site Acquisition', href: '/services' },
        { name: 'Project Management', href: '/services' },
        { name: 'Quality Control & Assurance', href: '/services' },
        { name: 'Project Procurement', href: '/services' },
        { name: 'Development Consultancy', href: '/services' },
    ],
    social: [
        { name: 'Facebook', href: 'https://facebook.com/sinbadbdl', icon: Facebook },
        { name: 'Instagram', href: 'https://instagram.com/sinbadbdl', icon: Instagram },
        { name: 'Twitter', href: 'https://twitter.com/sinbadbdl', icon: Twitter },
        { name: 'LinkedIn', href: 'https://linkedin.com/company/sinbadbdl', icon: Linkedin },
    ],
};

export function Footer() {
    return (
        <footer className="bg-green-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="Sinbad Builders & Developers Logo"
                                width={50}
                                height={50}
                                className="h-12 w-auto"
                            />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white tracking-tight">Sinbad Builders</span>
                                <span className="text-xs text-green-200">& Developers</span>
                            </div>
                        </div>
                        <p className="text-sm leading-6 text-green-100">
                            We work to deliver quality and aspirational real estate developments that encourage great community living. Building your dreams with excellence and integrity.
                        </p>
                        <div className="flex space-x-4">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="h-10 w-10 bg-green-800 rounded-lg flex items-center justify-center text-green-200 hover:bg-gold-500 hover:text-green-900 transition-all duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gold-400">Quick Links</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.main.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-green-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gold-400">Our Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.services.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-green-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gold-400">Contact Us</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <h4 className="text-xs font-semibold text-green-300 mb-2">Dhaka Office</h4>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                                            <span className="text-sm leading-6 text-green-100">
                                                506, Omar-Shajahan Tower (3rd floor),<br />
                                                Shah Kabir Mazar Road, Azampur Railgate,<br />
                                                Uttara, Dhaka-1230
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="text-xs font-semibold text-green-300 mb-2">Chattogram Office</h4>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                                            <span className="text-sm leading-6 text-green-100">
                                                11th Floor, IIUC Tower, Plot# 09,<br />
                                                Sheikh Mujib Road,<br />
                                                Chattogram-4100, Bangladesh
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                                        <div className="text-sm leading-6 text-green-100">
                                            <span>+880 1308-407027</span><br />
                                            <span>+880 1894-442911-19</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                                        <a href="mailto:info@sinbadbdl.com" className="text-sm leading-6 text-green-100 hover:text-white transition-colors">
                                            info@sinbadbdl.com
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Globe className="h-5 w-5 text-gold-500 shrink-0" />
                                        <a href="https://www.sinbadbdl.com" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-green-100 hover:text-white transition-colors">
                                            www.sinbadbdl.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-green-800 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm leading-5 text-green-200">
                            &copy; {new Date().getFullYear()} Sinbad Builders & Developers. All rights reserved.
                        </p>
                        <p className="text-xs text-green-300">
                            Quality Real Estate Development for Great Community Living
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
