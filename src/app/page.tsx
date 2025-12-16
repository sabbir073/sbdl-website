import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  Home as HomeIcon,
  Building2,
  Map,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Handshake,
  TrendingUp,
  Shield,
  Clock,
  Award
} from "lucide-react";

const stats = [
  { label: 'Projects Completed', value: '7+' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Land Developed (Katha)', value: '134+' },
  { label: 'Team Members', value: '12+' },
];

const features = [
  { title: 'Experienced Team', description: 'Dynamic team with experience spanning various sectors in the real estate industry', icon: Users },
  { title: 'Institutionalized Development', description: 'Bringing together demand and supply side of real estate under one roof', icon: Building2 },
  { title: 'Strong Partnerships', description: 'Diverse local and global networks through joint venture agreements', icon: Handshake },
  { title: 'Staff Alignment', description: 'Every staff member is an owner with compensation aligned to project performance', icon: Target },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-green-800/60" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[150px] border-l-gold-500/30 border-b-[150px] border-b-transparent z-10" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[150px] border-r-green-700/40 border-t-[150px] border-t-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="h-2 w-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-green-100 text-sm font-medium">Quality Real Estate Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Building <span className="text-gold-400">Quality</span> Aspirational<br />
            <span className="text-gold-400">Real Estate</span> Developments
          </h1>
          <p className="text-lg sm:text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sinbad Builders & Developers delivers quality and aspirational real estate developments
            that encourage great community living, backed by extensive experience in real estate development and finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                Explore Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-green-900">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-green-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                  alt="Sinbad Builders Construction Site"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-green-800 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-gold-400 text-4xl font-bold mb-1">7+</div>
                <div className="text-green-100 text-sm">Successful Projects</div>
              </div>
            </div>
            <div>
              <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">About Sinbad Builders & Developers</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
                Institutional Grade Real Estate Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a real estate development firm that seeks to develop institutional grade real estate
                having a team with extensive and deep experience in real estate development and finance.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Sinbad Builders & Developers, we work to deliver quality and aspirational real estate
                developments that encourage great community living.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: 'Timely Project Delivery' },
                  { icon: TrendingUp, text: 'Value for Money' },
                  { icon: Shield, text: 'Quality Standards' },
                  { icon: Award, text: 'Product Functionality' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-green-800">
                    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">What Sets Us Apart</h3>
            <p className="text-gray-600">Our commitment to excellence and customer satisfaction makes us the preferred choice for real estate development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="h-14 w-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-green-700" />
                </div>
                <h4 className="text-lg font-bold text-green-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Our Comprehensive Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-green-900">Full-Service Real Estate Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Research & Site Acquisition"
              description="Understanding the market, identifying opportunities, and achieving the highest and best use of land through strategic research and acquisition."
              icon={Map}
            />
            <ServiceCard
              title="Project Management"
              description="Ensuring projects are delivered on time, on budget, and to the best quality through experienced leadership and proven methodologies."
              icon={Building2}
            />
            <ServiceCard
              title="Quality Control & Assurance"
              description="Overseeing project implementation from pre-development to exit, maintaining the highest quality standards that ensure client expectations are met."
              icon={Shield}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" className="text-green-800 border-green-800 hover:bg-green-800 hover:text-white">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-4 text-center sm:text-left">
            <div>
              <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Our Track Record</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-green-900">Featured Projects</h3>
            </div>
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Omar-Shajahan Tower"
              category="Commercial & Residential"
              location="Shah Kabir Mazar Road, Dakkhinkhan"
              status="Completed"
              imageUrl="/project/omar-shahjahan-tower.jpg"
              slug="omar-shajahan-tower"
            />
            <ProjectCard
              title="New Uttara City"
              category="Residential"
              location="Gono Koborsthan Road, Dakshinkhan"
              status="Ongoing"
              imageUrl="/project/New-Uttara-City.jpg"
              slug="new-uttara-city"
            />
            <ProjectCard
              title="SBD Sailor's Solace"
              category="Residential"
              location="Agrabad, Chattogram"
              status="Ongoing"
              imageUrl="/project/solace.jpg"
              slug="sbd-sailors-solace"
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-green-600 font-semibold tracking-wide uppercase mb-3">Why Invest in Real Estate</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
                The Best Investment on Earth is Earth
              </h3>
              <p className="text-gray-500 italic mb-8">- Louis Glickman</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Real estate has continuously delivered long stable returns compared to other asset classes,
                with returns of about 24% p.a. against an average of 13.5% p.a. in all asset classes.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'High Returns', desc: 'Real estate has consistently outperformed other asset classes over the last five years.' },
                  { title: 'Inflation Hedge', desc: 'Real estate provides a hedge against inflation as asset value grows with inflation rate.' },
                  { title: 'Security of Returns', desc: 'Unlike traditional investments, real estate returns have minimal variance and provide stable, consistent returns.' },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Real Estate Investment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-gold-400 text-5xl font-bold mb-2">24%</div>
                  <div className="text-green-100">Average Annual Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700/20 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-green-100 mb-10 max-w-2xl mx-auto">
            Contact Sinbad Builders & Developers today to discuss your requirements and let us help you find the perfect property solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="tel:+8801813087877">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-green-900">
                Call: +880 1813-087877
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
