import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="group relative p-8 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-gold-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-14 w-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors">
                <Icon className="h-7 w-7 text-green-700 group-hover:text-gold-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
