import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Truck, 
  Home as HomeIcon, 
  Hotel, 
  Package, 
  ArrowRight, 
  Award, 
  Users, 
  CheckCircle,
  Globe2,
  TrendingUp,
  Briefcase,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Industries Served', value: '12+', icon: Globe2 },
  { label: 'Projects Completed', value: '150+', icon: CheckCircle },
  { label: 'Workforce Strength', value: '1,200+', icon: Users },
  { label: 'Total Investment', value: '$500M+', icon: TrendingUp },
];

const divisions = [
  {
    title: 'Manufacturing',
    description: 'Advanced industrial production and bulk manufacturing systems.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/manufacturing'
  },
  {
    title: 'Construction',
    description: 'Infrastructure development and high-end residential engineering.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/construction'
  },
  {
    title: 'Real Estate',
    description: 'Luxury property development and land investment management.',
    icon: HomeIcon,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/real-estate'
  },
  {
    title: 'Hospitality',
    description: 'Curating world-class hotels, resorts, and luxury event spaces.',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/hospitality'
  },
  {
    title: 'Industrial Logistics',
    description: 'Large-scale industrial supply and chain management solutions.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/logistics'
  },
  {
    title: 'Processing',
    description: 'Food processing and commercial state-of-the-art packaging systems.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    href: '/divisions/processing-packaging'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Excellence" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
              Investor Ready • ISO Certified
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8">
              Driving Industrial Growth & <span className="text-brand-gold">Infrastructure</span> Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              Macsigro Ventures Limited is a diversified corporate group delivering high-impact solutions across manufacturing, construction, real estate, and hospitality sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/divisions" 
                className="px-8 py-4 bg-brand-gold text-white rounded-xl font-bold hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Divisions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-xl font-bold transition-all text-center"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 border-l border-white/20 pl-6">
                <div className="p-2 bg-brand-gold/20 rounded-lg text-brand-gold">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-light py-10 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="font-display font-bold text-2xl">STACKSTON</span>
           <span className="font-display font-bold text-2xl">INDUSTRIAL</span>
           <span className="font-display font-bold text-2xl">GLOBAL-X</span>
           <span className="font-display font-bold text-2xl">CONSTRUCT+</span>
           <span className="font-display font-bold text-2xl">VISTA-PRO</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                alt="Corporate Leadership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border-[12px] border-brand-navy/5 rounded-full -z-0" />
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
              <Award className="text-brand-gold mb-3" size={32} />
              <p className="text-sm font-bold text-brand-navy">Excellence in Industrial Innovation 2025</p>
            </div>
          </div>

          <div>
            <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Corporate Profile</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
              A Visionary Conglomerate Built on <span className="text-gradient underline decoration-brand-gold/30 underline-offset-8">Trust & Excellence</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Macsigro Ventures Limited has emerged as a cornerstone of industrial and infrastructure development. We believe in building more than just structures; we build value for our investors and communities.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Corporate Strategy</h4>
                  <p className="text-sm text-gray-500">Execution-focused management ensuring high ROI across all business verticals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy flex-shrink-0">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Scalable Operations</h4>
                  <p className="text-sm text-gray-500">From agro-processing to heavy machinery, our operations are built to scale.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all">
              Learn Our Full Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-32 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Business Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Diversified Impact Across <span className="text-brand-gold italic font-light">Global Industries</span></h2>
            </div>
            <p className="text-gray-400 max-w-sm ml-auto">
              Our multidisciplinary approach allows us to dominate key sectors while maintaining specialized expertise in each division.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={div.title}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-brand-gold text-white rounded-xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 transition-transform">
                    <div.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{div.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                    {div.description}
                  </p>
                  <Link 
                    to={div.href} 
                    className="flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest"
                  >
                    View Division <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Portfolio Highlights</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Built for the Future</h2>
            <p className="text-gray-600">A showcase of our landmark infrastructure, manufacturing plants, and luxury developments across the country.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 h-[700px]">
             {/* Bento Style Grid */}
             <div className="md:col-span-8 group relative rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541888941257-2009265f2425?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Infrastructure" />
                <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-end">
                   <h3 className="text-3xl font-display font-bold text-white mb-2">Central City Infrastructure</h3>
                   <p className="text-white/80">Urban Development Project | Abuja</p>
                </div>
             </div>
             <div className="md:col-span-4 flex flex-col gap-8">
                <div className="flex-1 group relative rounded-3xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1574139908281-12962139046c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Manufacturing" />
                   <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                      <h4 className="text-xl font-bold text-white">Industrial Hub A2</h4>
                      <p className="text-sm text-white/80">Lagos</p>
                   </div>
                </div>
                <div className="flex-1 group relative rounded-3xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hospitality" />
                   <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                      <h4 className="text-xl font-bold text-white">Azure Resorts</h4>
                      <p className="text-sm text-white/80">Cross River</p>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/projects" className="px-10 py-5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-black transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3">
                Explore Full Portfolio <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Sticky - Floating */}
      <a 
        href="https://wa.me/123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed left-8 bottom-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute left-full ml-4 bg-brand-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
