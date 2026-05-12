import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, History, MoveRight } from 'lucide-react';

const values = [
  { title: 'Integrity', description: 'Upholding the highest moral and ethical principles in all our business dealings.', icon: ShieldCheck },
  { title: 'Innovation', description: 'Continuously seeking modern solutions to solve industrial and infra challenges.', icon: Zap },
  { title: 'Sustainability', description: 'Committed to long-term environmental and socio-economic balance.', icon: Target },
  { title: 'Excellence', description: 'Setting international standards for quality and service delivery.', icon: Eye },
];

const milestones = [
  { year: '2005', title: 'Founding of Macsigro', description: 'Established as a small-scale industrial supply firm.' },
  { year: '2010', title: 'Construction Pivot', description: 'Successfully delivered the first major infrastructure project in the capital.' },
  { year: '2015', title: 'Stackston Acquisition', description: 'Acquired Stackston Industries to expand into agro-processing.' },
  { year: '2020', title: 'Real Estate Expansion', description: 'Launched the Luxury Living portfolio with 5 flagship developments.' },
  { year: '2024', title: 'Multi-Sector Conglomerate', description: 'Unified all divisions under the Macsigro Ventures Limited holding brand.' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Subpage Hero */}
      <section className="pt-40 pb-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-extrabold mb-6"
            >
              Corporate Heritage & <span className="text-brand-gold italic">Future Vision</span>
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tracing our journey from a specialized industrial firm to a leading multi-sector holding company driving growth across Africa.
            </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="p-12 rounded-3xl bg-brand-light border border-brand-navy/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-navy/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-6 flex items-center gap-3">
              <span className="p-3 bg-brand-navy text-white rounded-xl"><Target /></span>
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To drive industrial revolution and infrastructure excellence by delivering innovative, high-quality solutions that create sustainable value for our stakeholders, partners, and the communities we serve.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-brand-navy text-white relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
              <span className="p-3 bg-brand-gold text-white rounded-xl"><Eye /></span>
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the most trusted and diversified conglomerate in the region, recognized globally for excellence in manufacturing, construction, and investment-grade real estate developments.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Journey</span>
             <h2 className="text-4xl font-extrabold text-brand-navy">Milestones of Progress</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-navy/20 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((ms, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right hidden md:block">
                     {idx % 2 === 0 ? (
                       <div className="pr-12">
                          <span className="text-5xl font-black text-brand-gold/20 leading-none">{ms.year}</span>
                          <h4 className="text-xl font-bold text-brand-navy mt-2">{ms.title}</h4>
                       </div>
                     ) : (
                        <p className="text-gray-500 max-w-sm ml-auto">{ms.description}</p>
                     )}
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10" />
                  
                  <div className="flex-1">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-light">
                       <span className="text-3xl font-black text-brand-gold block md:hidden mb-2">{ms.year}</span>
                       <h4 className="text-xl font-bold text-brand-navy mb-2 md:hidden">{ms.title}</h4>
                       {idx % 2 === 0 ? (
                         <p className="text-gray-500">{ms.description}</p>
                       ) : (
                         <div>
                            <span className="text-5xl font-black text-brand-gold/20 leading-none hidden md:block">{ms.year}</span>
                            <h4 className="text-xl font-bold text-brand-navy mt-2 hidden md:block">{ms.title}</h4>
                            <p className="text-gray-500 mt-2">{ms.description}</p>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-4 gap-8">
              {values.map((val) => (
                <div key={val.title} className="p-8 rounded-3xl bg-white border border-brand-light hover:shadow-xl transition-all group">
                   <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                      <val.icon size={32} />
                   </div>
                   <h4 className="text-xl font-bold text-brand-navy mb-4">{val.title}</h4>
                   <p className="text-gray-500 text-sm">{val.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-32 bg-brand-navy rounded-t-[50px] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-4xl font-extrabold mb-8">Guided by Visionary Leadership</h2>
             <p className="text-gray-400 max-w-2xl mx-auto mb-16">Our executive board brings together decades of experience in global industrial operations, corporate finance, and infrastructure engineering.</p>
             
             <div className="grid md:grid-cols-3 gap-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group">
                     <div className="aspect-square rounded-3xl overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1500648767791-00dcc994a43e' : '1573497019940-1c28c88b4f3e'}?q=80&w=600&auto=format&fit=crop`} className="w-full h-full object-cover" alt="Executive" />
                     </div>
                     <h4 className="text-xl font-bold">Executive Member {i}</h4>
                     <p className="text-brand-gold text-sm tracking-widest uppercase font-bold mt-1">Division Principal</p>
                  </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
}
