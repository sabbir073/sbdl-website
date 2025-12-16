import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Globe, Building2 } from "lucide-react";

export const metadata = {
    title: "Contact Us | Sinbad Builders & Developers",
    description: "Get in touch with Sinbad Builders & Developers for your real estate needs. Visit our offices in Dhaka and Chattogram.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-green-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                        alt="Contact"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/20 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-700/30 rounded-tl-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        We are here to help you build your dreams. Reach out to us today.
                    </p>
                </div>
            </div>

            {/* Quick Contact Bar */}
            <section className="py-6 bg-green-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <Link href="tel:+8801813087877" className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors">
                            <Phone className="h-5 w-5 text-gold-400" />
                            <span>+880 1813-087877</span>
                        </Link>
                        <Link href="mailto:info@sinbadbdl.com" className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors">
                            <Mail className="h-5 w-5 text-gold-400" />
                            <span>info@sinbadbdl.com</span>
                        </Link>
                        <Link href="https://www.sinbadbdl.com" target="_blank" className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors">
                            <Globe className="h-5 w-5 text-gold-400" />
                            <span>www.sinbadbdl.com</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Get in Touch</h2>
                            <h3 className="text-3xl font-bold text-green-900 mb-8">
                                Let's Discuss Your Project
                            </h3>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                Whether you are looking for your dream home, a commercial space, or a real estate investment opportunity,
                                our experienced team is ready to assist you. Visit our offices or contact us via phone or email.
                            </p>

                            <div className="space-y-8">
                                {/* Dhaka Office */}
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-12 w-12 bg-green-800 rounded-lg flex items-center justify-center shrink-0">
                                            <Building2 className="h-6 w-6 text-gold-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-green-900">Dhaka Head Office</h4>
                                            <span className="text-xs text-green-600 font-medium">Main Office</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3 ml-15">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                                            <p className="text-gray-600 text-sm">
                                                506, Omar-Shajahan Tower (3rd floor),<br />
                                                Shah Kabir Mazar Road, Azampur Railgate,<br />
                                                Uttara, Dhaka-1230
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chattogram Office */}
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-12 w-12 bg-green-700 rounded-lg flex items-center justify-center shrink-0">
                                            <Building2 className="h-6 w-6 text-gold-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-green-900">Chattogram Office</h4>
                                            <span className="text-xs text-green-600 font-medium">Regional Office</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3 ml-15">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                                            <p className="text-gray-600 text-sm">
                                                11th Floor, IIUC Tower, Plot# 09,<br />
                                                Sheikh Mujib Road,<br />
                                                Chattogram-4100, Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100">
                                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Phone className="h-5 w-5 text-green-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-green-900 mb-1">Phone</h4>
                                            <p className="text-gray-600 text-sm">+880 1813-087877</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100">
                                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Mail className="h-5 w-5 text-green-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-green-900 mb-1">Email</h4>
                                            <a href="mailto:info@sinbadbdl.com" className="text-gray-600 text-sm hover:text-green-700">
                                                info@sinbadbdl.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100">
                                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Globe className="h-5 w-5 text-green-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-green-900 mb-1">Website</h4>
                                            <a href="https://www.sinbadbdl.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-green-700">
                                                www.sinbadbdl.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100">
                                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Clock className="h-5 w-5 text-green-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-green-900 mb-1">Business Hours</h4>
                                            <p className="text-gray-600 text-sm">Sat - Thu: 9AM - 6PM</p>
                                            <p className="text-gray-500 text-xs">Friday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative">
                <div className="h-96 w-full bg-green-100 relative overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.743814099727!2d90.39999237595645!3d23.875397978596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5c14d02c127%3A0x67e39c2d8d1c5f8!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1702900000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                {/* Map Info Card */}
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-sm hidden md:block">
                    <h4 className="font-bold text-green-900 mb-2">Sinbad Builders & Developers</h4>
                    <p className="text-gray-600 text-sm mb-3">
                        506, Omar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230
                    </p>
                    <a
                        href="https://maps.google.com/?q=Uttara,Dhaka,Bangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 text-sm font-medium hover:text-green-600"
                    >
                        Get Directions
                    </a>
                </div>
            </section>
        </div>
    );
}
