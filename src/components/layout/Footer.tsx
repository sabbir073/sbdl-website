import Link from 'next/link';
import Image from 'next/image';
import { Facebook, MapPin, Phone, Mail, Globe } from 'lucide-react';

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

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
                            <Link
                                href="https://www.facebook.com/sinbadproperties/"
                                className="h-10 w-10 bg-green-800 rounded-lg flex items-center justify-center text-green-200 hover:bg-blue-600 hover:text-white transition-all duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="https://wa.me/8801813087877"
                                className="h-10 w-10 bg-green-800 rounded-lg flex items-center justify-center text-green-200 hover:bg-green-500 hover:text-white transition-all duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <WhatsAppIcon className="h-5 w-5" />
                            </Link>
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
                                        <a href="tel:+8801813087877" className="text-sm leading-6 text-green-100 hover:text-white transition-colors">
                                            +880 1813-087877
                                        </a>
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
