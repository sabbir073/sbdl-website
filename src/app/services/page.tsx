import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
    MapPin,
    Building2,
    Shield,
    ShoppingCart,
    Wallet,
    Lightbulb,
    Search,
    FileText,
    BarChart3,
    Settings,
    Handshake,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

export const metadata = {
    title: "Our Services | Sinbad Builders & Developers",
    description: "Explore our comprehensive real estate capabilities including Research & Site Acquisition, Project Management, Quality Control, Procurement, Project Finance, and Development Consultancy.",
};

const services = [
    {
        title: "Research and Site Acquisition",
        description: "To us, real estate research is not just about data collection and analysis. We go further to look at existing gaps, enhancing market knowledge and informing concept development. It requires understanding the market, identifying an opportunity and tapping into it with the main focus of achieving the highest and best use.",
        icon: Search,
        quote: "Purchased with common sense, paid for in full, and managed with reasonable care, real estate is about the safest investment in the world.",
        quoteAuthor: "Franklin D. Roosevelt"
    },
    {
        title: "Project Management",
        description: "To deliver on real estate, projects must be done on time, on budget and to the best quality. In real estate, you make or lose money depending on the people you choose to work with. Backed by extensive experience, we apply lessons from previous projects to ensure delivery within budget, time and quality.",
        icon: Building2,
        features: ["Concept design", "Project planning", "Project execution", "Monitoring and control", "Project exit"]
    },
    {
        title: "Quality Control & Assurance",
        description: "Quality control and assurance involves overseeing project implementation processes from pre-development to project exit. We aim for the highest quality standards that ensure client's interests and expectations are met.",
        icon: Shield,
        quote: "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution.",
        quoteAuthor: "William A. Foster",
        features: ["Timely project delivery", "Value for money", "Quality products conforming to standards", "Safety assurance", "Product functionality"]
    },
    {
        title: "Project Procurement",
        description: "An effective procurement system is key to the success of a project. At Sinbad Builders & Developers, this function is core to the delivery of our projects. We go beyond obtaining goods and services from external vendors to realize value for money through strategic sourcing.",
        icon: ShoppingCart,
        quote: "Efficiency is doing things right; effectiveness is doing the right things.",
        quoteAuthor: "Peter Drucker",
        features: ["Cost effectiveness through local and global sourcing", "Quality of goods and services", "Timely delivery", "Value optimization from supplier relationships"]
    },
    {
        title: "Project Finance",
        description: "We provide comprehensive financial solutions for real estate projects, including investment analysis, funding strategies, and financial structuring to ensure project viability and optimal returns for stakeholders.",
        icon: Wallet,
        features: ["Investment analysis", "Funding strategy", "Financial structuring", "Risk assessment", "Return optimization"]
    },
    {
        title: "Development Consultancy",
        description: "We partner with other developers and help them get great concepts that offer great investment returns by offering our capabilities to support their projects and monitor the execution to fruition. We serve as a ONE STOP SHOP to enable external parties achieve success in their projects.",
        icon: Lightbulb,
        features: ["Fundraising", "Joint Venture Structuring", "Market Research", "Concept Development", "Project Management", "Quality Assurance", "Sales & Facilities Management", "Deal Structuring"]
    },
];

const siteAcquisitionProcess = [
    { step: '01', title: 'Identify Location', icon: MapPin },
    { step: '02', title: 'Market Research', icon: Search },
    { step: '03', title: 'Investment Analysis', icon: BarChart3 },
    { step: '04', title: 'Preparation of Business Case', icon: FileText },
    { step: '05', title: 'Joint Venture / Land Purchase Agreement', icon: Handshake },
    { step: '06', title: 'Implementation', icon: Settings },
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-green-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                        alt="Planning"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/20 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-700/30 rounded-tl-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Comprehensive Capabilities</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        Full-service real estate solutions from research to project completion.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.title} className="group relative p-8 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-gold-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="h-14 w-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors">
                                    <service.icon className="h-7 w-7 text-green-700 group-hover:text-gold-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-green-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>

                                {service.features && (
                                    <ul className="space-y-2 mt-4">
                                        {service.features.slice(0, 4).map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                        {service.features.length > 4 && (
                                            <li className="text-sm text-green-600 font-medium">+{service.features.length - 4} more</li>
                                        )}
                                    </ul>
                                )}

                                {service.quote && (
                                    <div className="mt-4 pt-4 border-t border-green-100">
                                        <p className="text-xs text-gray-500 italic">"{service.quote}"</p>
                                        <p className="text-xs text-green-700 font-medium mt-1">- {service.quoteAuthor}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Site Acquisition Process */}
            <section className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">The Site Acquisition Process</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-green-900">How We Find the Best Locations</h3>
                    </div>

                    <div className="relative">
                        {/* Connection line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {siteAcquisitionProcess.map((item, index) => (
                                <div key={item.step} className="relative z-10">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 text-center hover:shadow-lg transition-shadow">
                                        <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="h-8 w-8 text-gold-400" />
                                        </div>
                                        <div className="text-2xl font-bold text-green-300 mb-2">{item.step}</div>
                                        <h4 className="text-sm font-bold text-green-900">{item.title}</h4>
                                    </div>
                                    {index < siteAcquisitionProcess.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                                            <ArrowRight className="h-6 w-6 text-green-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Management Cycle */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Project Management</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
                                Delivering Projects on Time, Budget & Quality
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                In real estate, you make or lose money depending on the people you choose to work with in your projects.
                                Backed by the extensive and deep experience of our team, Sinbad Builders & Developers applies experience
                                gathered from previous projects to ensure that our projects are delivered within budget, time and quality.
                            </p>
                            <div className="space-y-4">
                                {['Project Initiation', 'Project Definition', 'Detail Planning', 'Project Execution', 'Monitoring & Control', 'Project Review', 'Project Exit'].map((phase) => (
                                    <div key={phase} className="flex items-center gap-3">
                                        <div className="h-3 w-3 bg-green-600 rounded-full" />
                                        <span className="text-green-900 font-medium">{phase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                                alt="Project Management"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="text-gold-400 font-bold text-lg">Our Commitment</p>
                                    <p className="text-green-100">On Time. On Budget. Best Quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Consultancy - One Stop Shop */}
            <section className="py-20 bg-green-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Buildings"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-gold-400 font-semibold tracking-wide uppercase mb-3">Development Consultancy</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your One Stop Shop</h3>
                        <p className="text-green-100">
                            We partner with other developers and help them get great concepts that offer great investment returns.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { num: '1', title: 'Fundraising' },
                            { num: '2', title: 'Joint Venture Structuring' },
                            { num: '3', title: 'Market Research' },
                            { num: '4', title: 'Concept Development' },
                            { num: '5', title: 'Project Management' },
                            { num: '6', title: 'Quality Assurance' },
                            { num: '7', title: 'Sales & Facilities Management' },
                            { num: '8', title: 'Deal Structuring' },
                        ].map((item) => (
                            <div key={item.num} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                <div className="h-10 w-10 bg-gold-500 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-green-900 font-bold">{item.num}</span>
                                </div>
                                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact">
                            <Button variant="gold" size="lg">
                                Partner With Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how our comprehensive capabilities can help bring your real estate vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Get in Touch</Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg">View Our Projects</Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-gray-500">
                        For more information contact us: <a href="mailto:info@sinbadbdl.com" className="text-green-700 font-medium">info@sinbadbdl.com</a> | <a href="tel:+8801813087877" className="text-green-700 font-medium">+880 1813-087877</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
