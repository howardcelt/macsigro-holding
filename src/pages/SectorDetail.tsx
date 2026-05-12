import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Factory, Building2, Home as HomeIcon, Hotel, Package, Truck, Layers, 
  CheckCircle, ArrowRight, Quote, Calendar, MapPin, Briefcase, FileText
} from 'lucide-react';

const sectorData: Record<string, any> = {
  manufacturing: {
    title: 'Manufacturing Division',
    headline: 'Powering Industrial Excellence Through State-of-the-Art Operations',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    description: 'Our manufacturing division focuses on bulk production of industrial components and consumer goods, utilizing automated processes to ensure precision and scalability.',
    highlights: ['Industrial Scale Operations', 'Quality Control Lab', 'Export Readiness'],
    services: [
      { title: 'Component Manufacturing', desc: 'Precision engineering of industrial spare parts and components.' },
      { title: 'Contract Production', desc: 'High-volume manufacturing partnerships for global brands.' },
      { title: 'Supply Chain Management', desc: 'End-to-end industrial logistics and inventory control.' }
    ]
  },
  construction: {
    title: 'Construction & Infrastructure',
    headline: 'Engineering Landmark Developments That Define Living Standards',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1541888941257-2009265f2425?q=80&w=2000&auto=format&fit=crop',
    description: 'From civil engineering for national infrastructure to premium residential high-rises, our construction division is the backbone of urban development.',
    highlights: ['Civil Engineering', 'Infrastructure Maintenance', 'Modern Architecture'],
    services: [
      { title: 'Civil Infrastructure', desc: 'Construction of roads, bridges, and essential public utilities.' },
      { title: 'Commercial Development', desc: 'Building business districts and modern office skyscrapers.' },
      { title: 'Project Management', desc: 'Consultancy and design-build solutions for complex sites.' }
    ]
  },
  'real-estate': {
    title: 'Real Estate & Development',
    headline: 'Investing in Premium Land and Luxury Residential Assets',
    icon: HomeIcon,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    description: 'We develop high-value residential and commercial properties, offering investors unique opportunities in rapidly growing urban centers.',
    highlights: ['Prime Locations', 'Property Management', 'Appreciation Focused'],
    services: [
      { title: 'Residential Sales', desc: 'Offering luxury villas and high-end apartment complexes.' },
      { title: 'Commercial Leasing', desc: 'Managing premium workspace and retail mall portfolios.' },
      { title: 'Land Banking', desc: 'Strategic acquisition and development of high-yield land.' }
    ]
  },
  hospitality: {
    title: 'Hospitality Division',
    headline: 'Defining Luxury through Exclusive Resorts and Guest Services',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop',
    description: 'Our hospitality branch curates world-class experiences, from boutique luxury hotels to sprawling vacation resorts.',
    highlights: ['Guest Satisfaction', 'Elite Amenities', 'Standardized Service'],
    services: [
      { title: 'Hotel Operations', desc: 'Management and development of premium urban business hotels.' },
      { title: 'Leisure Resorts', desc: 'Transforming landscapes into world-class vacation destinations.' },
      { title: 'Event Management', desc: 'Hosting corporate summits and high-profile luxury events.' }
    ]
  },
  stackston: {
    title: 'Stackston Industries',
    headline: 'Leading the Agro-Industrial Processing Revolution',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=2000&auto=format&fit=crop',
    description: 'As a key subsidiary, Stackston focuses on value-addition through advanced agro-processing and packaging for domestic and international markets.',
    highlights: ['Modern Farm Operations', 'Processing Innovation', 'Global Exporting'],
    services: [
      { title: 'Agro-Processing', desc: 'Refining raw materials into high-grade consumer products.' },
      { title: 'Branding & Packaging', desc: 'Creating market-ready products with premium industrial packaging.' },
      { title: 'Export Distribution', desc: 'Logistics and compliance for international food trade.' }
    ]
  }
};

export default function SectorDetail() {
  const { sectorId } = useParams();
  const sector = sectorData[sectorId || ''] || sectorData.manufacturing;

  return (
    <div className="bg-white">
      {/* Sector Hero */}
      <section className="relative h-[70vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <img src={sector.image} className="w-full h-full object-cover" alt={sector.title} />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="max-w-3xl"
           >
              <div className="w-16 h-16 bg-brand-gold text-white rounded-2xl flex items-center justify-center mb-6">
                <sector.icon size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
                {sector.title}
              </h1>
              <p className="text-xl text-gray-300 font-medium italic">"{sector.headline}"</p>
           </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
             <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">Strategic Overview</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               {sector.description} 
             </p>
             <div className="grid md:grid-cols-3 gap-6">
                {sector.highlights.map((h: string) => (
                  <div key={h} className="flex flex-col gap-3 p-6 bg-brand-light rounded-2xl border border-brand-navy/5">
                     <CheckCircle className="text-brand-gold" size={24} />
                     <span className="font-bold text-brand-navy text-sm uppercase tracking-wider">{h}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="lg:col-span-1">
             <div className="bg-brand-navy text-white p-8 rounded-3xl sticky top-30">
                <h3 className="text-xl font-bold mb-6">Work With This Division</h3>
                <div className="space-y-4 mb-8">
                   <Link to="/contact" className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                      <Briefcase size={20} className="text-brand-gold" />
                      <div>
                         <p className="text-sm font-bold">Request a Quote</p>
                         <p className="text-[10px] text-gray-400">Project specific pricing</p>
                      </div>
                   </Link>
                   <a href="#" className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                      <FileText size={20} className="text-brand-gold" />
                      <div>
                         <p className="text-sm font-bold">Download Brochure</p>
                         <p className="text-[10px] text-gray-400">PDF Portfolio (2.4MB)</p>
                      </div>
                   </a>
                </div>
                <button className="w-full bg-brand-gold py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all">
                   Contact Division <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-light">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-12 text-center">Specialized Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {sector.services.map((s: any) => (
                 <div key={s.title} className="p-8 bg-white rounded-3xl shadow-sm border border-brand-light hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                       <ArrowRight size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-brand-navy mb-3">{s.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Project Placeholder */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
               <h2 className="text-3xl font-display font-bold text-brand-navy">Landmark Project</h2>
               <Link to="/projects" className="text-brand-gold font-bold flex items-center gap-2 uppercase tracking-widest text-xs">View All <ArrowRight size={14} /></Link>
            </div>
            <div className="bg-brand-navy rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
               <div className="md:w-1/2 overflow-hidden h-[400px]">
                  <img src={sector.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Project" />
               </div>
               <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">Completed 2024</div>
                  <h3 className="text-3xl font-bold mb-4 font-display">Division Excellence Hub</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    A multi-million dollar installation demonstrating our capabilities in delivering {sector.title.toLowerCase()} results with international standards.
                  </p>
                  <div className="flex gap-10">
                     <div>
                        <p className="text-2xl font-bold text-white">2.5M</p>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Safe Hours</p>
                     </div>
                     <div>
                        <p className="text-2xl font-bold text-white">100%</p>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Quality Rating</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-24 bg-brand-light">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <Quote className="text-brand-gold mx-auto mb-8 opacity-20" size={64} />
            <p className="text-2xl font-display font-medium text-brand-navy italic mb-10 leading-relaxed uppercase">
              "Macsigro Ventures Limited has been an invaluable partner in our expansion. Their {sector.title.toLowerCase()} expertise is unparalleled."
            </p>
            <div>
               <h5 className="font-bold text-brand-navy">Director of Investments</h5>
               <p className="text-gray-500 text-sm">Global-X Strategic Alliances</p>
            </div>
         </div>
      </section>
    </div>
  );
}
