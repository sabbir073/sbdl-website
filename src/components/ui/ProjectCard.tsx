import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    category: string;
    location: string;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    imageUrl: string;
    slug: string;
}

export function ProjectCard({ title, category, location, status, imageUrl, slug }: ProjectCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${
                        status === 'Ongoing' ? 'bg-gold-500 text-green-900' :
                        status === 'Completed' ? 'bg-green-600 text-white' :
                        'bg-green-900 text-white'
                    }`}>
                        {status}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <p className="text-sm font-medium text-green-600 mb-2">{category}</p>
                <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                    <Link href={`/projects`}>
                        {title}
                    </Link>
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1 text-gold-500" />
                    {location}
                </div>
                <Link
                    href={`/projects`}
                    className="inline-flex items-center text-sm font-semibold text-green-800 hover:text-gold-600 transition-colors"
                >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
