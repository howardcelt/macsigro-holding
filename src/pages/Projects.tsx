import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, MapPin, Calendar, ExternalLink } from 'lucide-react';

const categories = ['All', 'Construction', 'Manufacturing', 'Infrastructure', 'Real Estate', 'Hospitality'];

const projects = [
  {
    title: 'The Macsigro Heights',
    category: 'Real Estate',
    location: 'Victoria Island, Lagos',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    description: 'A 25-floor luxury residential tower featuring smart-home integration and sustainable energy systems.'
  },
  {
    title: 'Central Processing Hub',
    category: 'Manufacturing',
    location: 'Kano Industrial Zone',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    description: 'Automated agro-processing facility with a capacity of 5,000 tons per month.'
  },
  {
    title: 'Unity Link Expressway',
    category: 'Infrastructure',
    location: 'Port Harcourt',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=800&auto=format&fit=crop',
    description: 'Construction of a 12km 8-lane urban expressway connecting the industrial port to the city center.'
  },
  {
    title: 'Azure Coast Resort',
    category: 'Hospitality',
    location: 'Calabar Coast',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    description: 'Premium beachfront resort with 200 villas, luxury spas, and a state-of-the-art conference center.'
  },
  {
    title: 'Stackston Seed Lab',
    category: 'Manufacturing',
    location: 'Oyo State',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    description: 'High-tech agricultural research and packaging facility for high-yield seed exports.'
  },
  {
    title: 'Sterling Business Park',
    category: 'Real Estate',
    location: 'Lekki Phase 1',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'Modern mixed-use office park housing international financial institutions and tech startups.'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-[-20deg] transform translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Portfolio</span>
           <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-8 italic">Engineering Landmark <span className="text-gradient bg-gradient-to-r from-white to-gray-400">Developments</span></h1>
           <p className="text-gray-400 max-w-2xl text-lg">
             A record of precision, impact, and sustainable progress across Africa's most critical sectors.
           </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-brand-light py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-max">
            <div className="p-2 text-brand-gray mr-2"><Filter size={20} /></div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-brand-navy text-white shadow-lg' 
                    : 'bg-brand-light text-brand-navy hover:bg-brand-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[32px] overflow-hidden border border-brand-light hover:shadow-2xl transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-brand-navy leading-tight">{project.title}</h3>
                        <ExternalLink size={20} className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                     </div>
                     <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                       {project.description}
                     </p>
                     <div className="pt-6 border-t border-brand-light flex justify-between items-center text-xs font-bold text-brand-gray uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                           <MapPin size={14} className="text-brand-gold" />
                           {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                           <Calendar size={14} className="text-brand-gold" />
                           {project.year}
                        </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <h3 className="text-2xl font-bold text-gray-400">No projects found in this category.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-24 bg-brand-navy rounded-t-[60px] text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-extrabold mb-8">Delivering Excellence at <span className="text-brand-gold">Global Standards</span></h2>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                   Every project in our portfolio is a testament to our commitment to safety, sustainability, and industrial innovation. We partner with international engineering firms to ensure every output is world-class.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="p-6 bg-white/5 rounded-2xl">
                      <p className="text-3xl font-black text-brand-gold mb-1">98%</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Client Retention</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl">
                      <p className="text-3xl font-black text-brand-gold mb-1">0</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Safety Incidents</p>
                   </div>
                </div>
             </div>
             <div className="aspect-square bg-white/5 rounded-[60px] flex items-center justify-center p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-[60px]" />
                <div className="text-center relative z-10">
                   <p className="text-8xl font-black opacity-10 mb-[-40px]">TRUST</p>
                   <h3 className="text-4xl font-display font-bold italic mb-6 leading-tight uppercase">Ready to <br/>Start a Project?</h3>
                   <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-gold px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all">
                      Work With Us <ArrowRight size={20} />
                   </Link>
                </div>
             </div>
          </div>
      </section>
    </div>
  );
}
