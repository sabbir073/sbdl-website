'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { MapPin, Ruler, Building2 } from "lucide-react";

const projects = [
    {
        title: "Jannat Tower",
        category: "Residential",
        location: "Jannat Tower-3, Memberbari Railgate, Azampur, Uttara, Dhaka-1230",
        status: "Completed",
        landSize: "15 Katha",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        slug: "jannat-tower"
    },
    {
        title: "Omar-Shajahan Tower",
        category: "Commercial & Residential",
        location: "House-506, Shah Kabir Mazar Road, Dakkhinkhan, Dhaka-1230",
        status: "Completed",
        landSize: "26 Katha",
        imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
        slug: "omar-shajahan-tower"
    },
    {
        title: "Hasina Monjil",
        category: "Residential",
        location: "House-923, East Ashkuna, Dakkhinkhan, Dhaka-1230",
        status: "Completed",
        landSize: "13 Katha",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=2070&auto=format&fit=crop",
        slug: "hasina-monjil"
    },
    {
        title: "Shahid Tower",
        category: "Residential",
        location: "Road-8A, North Ranavula, Sector-10, Uttara, Dhaka-1230",
        status: "Completed",
        landSize: "8 Katha",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        slug: "shahid-tower"
    },
    {
        title: "Hashem's Village",
        category: "Residential",
        location: "Shofor Ali Shoroni, Middle Azampur, Kacha Bazar, Dakshinkhan, Dhaka-1230",
        status: "Ongoing",
        landSize: "12 Katha",
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop",
        slug: "hashems-village"
    },
    {
        title: "New Uttara City",
        category: "Residential",
        location: "Opposite of New Dakshinkhan Thana, Gono Koborsthan Road, Dakshinkhan, Dhaka",
        status: "Ongoing",
        landSize: "30 Katha",
        imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop",
        slug: "new-uttara-city"
    },
    {
        title: "Eco Tower",
        category: "Commercial & Residential",
        location: "Dakkhin Chayabithi, Near Shahid Tajuddin Medical College, Gazipur Sadar, Gazipur",
        status: "Ongoing",
        landSize: "30 Katha",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        slug: "eco-tower"
    }
] as const;

// Calculate total statistics
const totalLand = projects.reduce((acc, p) => acc + parseInt(p.landSize), 0);
const completedProjects = projects.filter(p => p.status === 'Completed').length;
const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;

export default function ProjectsPage() {
    const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.status === filter;
    });

    return (
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-green-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
                        alt="Projects"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/20 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-700/30 rounded-tl-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Track Record</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        Discover our portfolio of quality residential and commercial developments across Bangladesh.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <section className="py-8 bg-green-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gold-400">{projects.length}</div>
                            <div className="text-green-100 text-sm">Total Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gold-400">{completedProjects}</div>
                            <div className="text-green-100 text-sm">Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gold-400">{ongoingProjects}</div>
                            <div className="text-green-100 text-sm">Ongoing</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gold-400">{totalLand}+</div>
                            <div className="text-green-100 text-sm">Katha Developed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex justify-center gap-4 mb-12">
                        {['All', 'Ongoing', 'Completed'].map((item) => (
                            <Button
                                key={item}
                                variant={filter === item ? 'primary' : 'outline'}
                                onClick={() => setFilter(item as 'All' | 'Ongoing' | 'Completed')}
                                className="min-w-[100px]"
                            >
                                {item}
                                {item !== 'All' && (
                                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                                        {item === 'Ongoing' ? ongoingProjects : completedProjects}
                                    </span>
                                )}
                            </Button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.title} className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${
                                            project.status === 'Ongoing' ? 'bg-gold-500 text-green-900' :
                                            project.status === 'Completed' ? 'bg-green-600 text-white' :
                                            'bg-green-900 text-white'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 text-green-800 shadow-sm">
                                            {project.landSize}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm font-medium text-green-600 mb-2">{project.category}</p>
                                    <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-start text-gray-500 text-sm">
                                        <MapPin className="h-4 w-4 mr-2 text-gold-500 shrink-0 mt-0.5" />
                                        <span className="line-clamp-2">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Project Highlight */}
            <section className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Featured Project</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-green-900">New Uttara City</h3>
                        <p className="mt-4 text-gray-600">One of our largest ongoing developments</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop"
                                alt="New Uttara City"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl border border-green-100">
                                    <Ruler className="h-6 w-6 text-green-600 mb-2" />
                                    <div className="text-2xl font-bold text-green-900">30 Katha</div>
                                    <div className="text-gray-600 text-sm">Land Size</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-green-100">
                                    <Building2 className="h-6 w-6 text-green-600 mb-2" />
                                    <div className="text-2xl font-bold text-green-900">Residential</div>
                                    <div className="text-gray-600 text-sm">Project Type</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-green-100">
                                    <MapPin className="h-6 w-6 text-green-600 mb-2" />
                                    <div className="text-lg font-bold text-green-900">Dakshinkhan</div>
                                    <div className="text-gray-600 text-sm">Location</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-green-100">
                                    <div className="h-6 w-6 bg-gold-500 rounded-full mb-2 flex items-center justify-center">
                                        <span className="text-green-900 text-xs font-bold">!</span>
                                    </div>
                                    <div className="text-lg font-bold text-gold-600">Ongoing</div>
                                    <div className="text-gray-600 text-sm">Status</div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Located opposite of New Dakshinkhan Thana on Gono Koborsthan Road, New Uttara City is
                                a premium residential development offering modern living spaces with excellent connectivity
                                and amenities.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Inquire About This Project</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Interested in Our Projects?
                    </h2>
                    <p className="text-green-100 mb-8">
                        Contact us today to learn more about available units and investment opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="gold" size="lg">Contact Us</Button>
                        </Link>
                        <Link href="tel:+8801308407027">
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-green-900">
                                Call: +880 1308-407027
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
