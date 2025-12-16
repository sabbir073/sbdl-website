import Image from "next/image";
import { Target, Eye, Shield, Users, Award, Lightbulb, Clock, TrendingUp, CheckCircle2, Anchor } from "lucide-react";

export const metadata = {
    title: "About Us | Sinbad Builders & Developers",
    description: "Learn about Sinbad Builders & Developers - a real estate development firm delivering quality aspirational developments for great community living.",
};

const teamMembers = [
    { name: 'Capt. Md. Ashraful Alam', role: 'Managing Partner & CEO', title: 'Master Mariner (Class-1), Marine Surveyor and Consultant, Bay Pilot, Founder & Director: Welcome Properties Ltd', image: '/partner/md-ashraful-alam.jpg' },
    { name: 'Capt. Md. Ashikur Rahman', role: 'Partner', title: 'Master Mariner (Class-1)', image: '/partner/md-ashikur-rahman.jpg' },
    { name: 'Capt. Mohammad Faizur Rahman', role: 'Partner', title: 'Master Mariner (Class-1)', image: '/partner/mohammad-faizur-rahman.jpg' },
    { name: 'CE. Md Lutful Kabir', role: 'Partner', title: 'Marine Chief Engineer (Class-1)', image: '/partner/md-lutful-kabir.jpg' },
    { name: 'Capt. Md Rahmat Ullah Shahidi', role: 'Partner', title: 'Master Mariner (Class-1)', image: '/partner/md-rahmat-ullah-shahidi.jpg' },
    { name: 'Ms. Rubana Parvin', role: 'Partner', title: 'Wife of Mahmodur Rahman, MMD Surveyor, Ex: Marine Ch. Eng. (Class-1)', image: '/partner/ms-rubana-parvin.jpg' },
    { name: 'Mr. Md. Atiqul Islam', role: 'Partner', title: 'Chartered Accountant, Managing Director SNBD', image: '/partner/md-atiqul-islam.jpg' },
    { name: 'Mr. M.A. Hakim', role: 'Partner', title: 'Businessman', image: '/partner/ma-hakim.jpg' },
    { name: 'Capt. Md Masud Alam', role: 'Partner', title: 'Master Mariner (Class-1), Marine Surveyor and Consultant, Bay Pilot', image: '/partner/md-masud-alam.jpg' },
    { name: 'Mr. Efthekhar Ahmed', role: 'Partner', title: 'Businessman', image: '/partner/efthekhar-ahmed.jpg' },
    { name: 'Capt. Abdul Alim', role: 'Partner', title: 'Master Mariner (Class-1)', image: '/partner/abdul-alim.jpg' },
    { name: 'Capt. Salahuddin Ahmed Prodhan', role: 'Partner', title: 'Master Mariner (Class-1), Marine Surveyor and Consultant, Bay Pilot', image: '/partner/salahuddin-ahmed-prodhan.jpg' },
];

const qualityGoals = [
    'Ensure timely project delivery',
    'Provide value for money',
    'Ensure quality products that conform to standards',
    'Ensure safety',
    'Ensure product functionality'
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-green-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Office"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/20 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-700/30 rounded-tl-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <Anchor className="h-4 w-4 text-gold-400" />
                        <span className="text-green-100 text-sm font-medium">Founded by Maritime Professionals</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        A team of experienced professionals delivering quality and aspirational real estate developments.
                    </p>
                </div>
            </div>

            {/* Company Introduction */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Introduction</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
                                Sinbad Builders & Developers
                            </h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    We are a real estate development firm that seeks to develop institutional grade real estate
                                    having a team with extensive and deep experience in real estate development and finance.
                                </p>
                                <p>
                                    At Sinbad Builders & Developers, we work to deliver quality and aspirational real estate
                                    developments that encourage great community living.
                                </p>
                                <p>
                                    Our team comprises experienced professionals, many with backgrounds in maritime industries,
                                    bringing discipline, precision, and commitment to excellence that defines every project we undertake.
                                </p>
                            </div>

                            {/* Key differentiators */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { title: 'Experienced Team', desc: 'Dynamic team across various real estate sectors' },
                                    { title: 'Institutionalized Development', desc: 'Demand and supply under one roof' },
                                    { title: 'Strong Partnerships', desc: 'Diverse local and global networks' },
                                    { title: 'Staff Alignment', desc: 'Compensation aligned to project performance' },
                                ].map((item) => (
                                    <div key={item.title} className="bg-green-50 p-4 rounded-xl border border-green-100">
                                        <h4 className="font-bold text-green-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-xs">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
                                alt="Sinbad Builders Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900 to-transparent p-6">
                                <p className="text-white font-bold">Building Quality Communities</p>
                                <p className="text-green-200 text-sm">Since establishment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-gold-400 font-semibold tracking-wide uppercase mb-3">Our Mission</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                We work to deliver quality aspirational real estate developments for our clients
                            </h3>
                            <p className="text-green-100 mb-8 leading-relaxed">
                                Quality control and assurance involves overseeing project implementation processes from
                                pre-development to project exit. We aim for the highest quality standards that ensure
                                client&apos;s interests and expectations are met.
                            </p>
                            <div className="space-y-3">
                                {qualityGoals.map((goal) => (
                                    <div key={goal} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0" />
                                        <span className="text-white">{goal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <Clock className="h-8 w-8 text-gold-400 mb-3" />
                                <h4 className="text-white font-bold mb-2">Timely Delivery</h4>
                                <p className="text-green-200 text-sm">Projects delivered on schedule</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <TrendingUp className="h-8 w-8 text-gold-400 mb-3" />
                                <h4 className="text-white font-bold mb-2">Value for Money</h4>
                                <p className="text-green-200 text-sm">Quality at competitive prices</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <Shield className="h-8 w-8 text-gold-400 mb-3" />
                                <h4 className="text-white font-bold mb-2">Quality Standards</h4>
                                <p className="text-green-200 text-sm">Products conforming to standards</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <Award className="h-8 w-8 text-gold-400 mb-3" />
                                <h4 className="text-white font-bold mb-2">Functionality</h4>
                                <p className="text-green-200 text-sm">Ensuring product functionality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest in Real Estate */}
            <section className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Why Invest in Real Estate</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">The Best Investment on Earth is Earth</h3>
                        <p className="text-gray-500 italic">- Louis Glickman</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-lg transition-shadow text-center">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-green-800">1</span>
                            </div>
                            <div className="text-4xl font-bold text-gold-500 mb-2">24%</div>
                            <h3 className="text-xl font-bold text-green-900 mb-3">High Returns</h3>
                            <p className="text-gray-600 text-sm">
                                Real estate has consistently outperformed other asset classes over the last five years,
                                with returns of about 24% p.a. against an average of 13.5% p.a. in all asset classes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-lg transition-shadow text-center">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-green-800">2</span>
                            </div>
                            <div className="h-12 w-12 mx-auto mb-2">
                                <TrendingUp className="h-12 w-12 text-gold-500" />
                            </div>
                            <h3 className="text-xl font-bold text-green-900 mb-3">Inflation Hedge</h3>
                            <p className="text-gray-600 text-sm">
                                Real estate provides a hedge against inflation as the asset&apos;s value grows in tandem
                                or higher than the inflation rate.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-lg transition-shadow text-center">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-green-800">3</span>
                            </div>
                            <div className="h-12 w-12 mx-auto mb-2">
                                <Shield className="h-12 w-12 text-gold-500" />
                            </div>
                            <h3 className="text-xl font-bold text-green-900 mb-3">Security of Returns</h3>
                            <p className="text-gray-600 text-sm">
                                Unlike traditional investments whose returns fluctuate with market performance,
                                real estate returns have minimal variance and provide stable, consistent returns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Our Team</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-green-900">Meet Our Partners</h3>
                        <p className="mt-4 text-gray-600">
                            Our team comprises experienced professionals with backgrounds in maritime industries,
                            finance, and business, bringing discipline and expertise to every project.
                        </p>
                    </div>

                    {/* CEO Highlight */}
                    <div className="bg-green-50 rounded-2xl p-8 mb-12 border border-green-100">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-gold-500 shadow-xl">
                                <Image
                                    src={teamMembers[0].image}
                                    alt={teamMembers[0].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 bg-gold-500 text-green-900 text-xs font-bold rounded-full mb-2">
                                    Managing Partner & CEO
                                </span>
                                <h4 className="text-2xl font-bold text-green-900">Capt. Md. Ashraful Alam</h4>
                                <p className="text-green-700 font-medium mt-1">Master Mariner (Class-1), Marine Surveyor and Consultant, Bay Pilot</p>
                                <p className="text-gray-600 mt-2">Founder & Director: Welcome Properties Ltd</p>
                            </div>
                        </div>
                    </div>

                    {/* Other Team Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.slice(1).map((member) => (
                            <div key={member.name} className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-lg transition-shadow group">
                                <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full overflow-hidden mx-auto mb-5 border-3 border-green-200 group-hover:border-gold-500 transition-colors shadow-md">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2">
                                        {member.role}
                                    </span>
                                    <h4 className="text-lg font-bold text-green-900 mb-1">{member.name}</h4>
                                    <p className="text-gray-600 text-sm">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600">
                            For detailed bios, visit{' '}
                            <a href="https://www.sinbadbdl.com" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:text-green-600">
                                www.sinbadbdl.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
