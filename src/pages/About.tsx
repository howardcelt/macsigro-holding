import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, History, MoveRight } from 'lucide-react';

const values = [
  { 
    title: 'Uncompromising Integrity', 
    description: 'Integrity is the cornerstone of our corporate identity. We believe that doing business the right way is the only way to build enduring trust and sustainable success across Africa.', 
    icon: ShieldCheck 
  },
  { 
    title: 'Relentless Innovation', 
    description: 'We don\'t just follow trends; we set them. By integrating advanced automation and data-driven strategies, we redefine what\'s possible in manufacturing and infrastructure.', 
    icon: Zap 
  },
  { 
    title: 'Future-Proof Sustainability', 
    description: 'Our environmental and social footprint is calculated for generations. We invest in green building technologies and community-centric industrial practices.', 
    icon: Target 
  },
  { 
    title: 'Operational Excellence', 
    description: 'Precision is our standard. From the smallest industrial component to massive high-rise developments, we apply rigorous quality control at every phase.', 
    icon: Eye 
  },
];

const milestones = [
  { 
    year: '2005', 
    title: 'Genesis of an Idea', 
    description: 'Macsigro Ventures began as a specialized industrial supply firm in Abuja, filling critical gaps in the regional supply chain for construction materials.' 
  },
  { 
    year: '2010', 
    title: 'Infrastructure Modernization', 
    description: 'The firm pivoted into heavy civil engineering, securing its first major government contract to modernize urban road networks and public utilities.' 
  },
  { 
    year: '2015', 
    title: 'The Industrial Leap', 
    description: 'Acquisition of Stackston Industries marked a turning point, allowing the group to enter the high-stakes world of agro-industrial processing and global exports.' 
  },
  { 
    year: '2020', 
    title: 'Vertical Integration', 
    description: 'Macsigro Real Estate was founded to capitalize on the group’s construction power, delivering integrated luxury communities that redefined urban luxury.' 
  },
  { 
    year: '2024', 
    title: 'A Global Conglomerate', 
    description: 'Today, Macsigro stands as a unified force of industrial growth, operating across four major divisions with over 1,200 dedicated professionals.' 
  },
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
              className="text-5xl md:text-6xl font-display font-extrabold mb-6 italic"
            >
              Corporate Heritage & <span className="text-brand-gold">Future Vision</span>
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              For nearly two decades, Macsigro Ventures Limited has been at the forefront of Africa's industrial evolution, turning ambitious blueprints into landmark realities.
            </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl font-display font-black text-brand-navy mb-8 leading-tight">
                Driving Growth Through <br/> <span className="text-brand-gold italic">Strategic Diversification</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                 <p>
                    Macsigro Ventures Limited is more than a conglomerate; we are a catalyst for modernization. Founded on the principle that industrial strength is the backbone of national prosperity, we have meticulously built a portfolio that spans the most critical sectors of the economy.
                 </p>
                 <p>
                    Our approach is data-driven and impact-focused. By owning the value chain—from the manufacturing of raw materials to the final construction of luxury assets—we ensure a level of quality and cost-efficiency that is unmatched in the region. 
                 </p>
                 <div className="pt-4 flex items-center gap-10">
                    <div>
                       <p className="text-4xl font-black text-brand-navy">18+</p>
                       <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Years Experience</p>
                    </div>
                    <div>
                       <p className="text-4xl font-black text-brand-navy">500+</p>
                       <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Major Projects</p>
                    </div>
                 </div>
              </div>
           </motion.div>
           <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Headquarters" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold rounded-full -z-0 opacity-20 blur-3xl animate-pulse" />
              <div className="absolute top-10 -left-10 p-8 bg-brand-navy text-white rounded-3xl shadow-2xl z-20 hidden md:block">
                 <p className="text-sm font-bold uppercase tracking-widest mb-2">Our Footprint</p>
                 <p className="text-2xl font-display font-bold italic">Nationwide Operations</p>
              </div>
           </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-display font-black text-brand-navy">Our North Star</h2>
             <p className="text-gray-500 mt-4">The principles that guide every investment and operational decision.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] bg-white border border-brand-navy/5 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-navy/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-6 flex items-center gap-3">
                <span className="p-3 bg-brand-navy text-white rounded-xl shadow-lg"><Target /></span>
                Mission Statement
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To engineer a more prosperous future for Africa by delivering world-class industrial, construction, and real estate solutions. We empower growth through technological integration, ethical business practices, and a relentless focus on creating high-value assets for our stakeholders.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-[40px] bg-brand-navy text-white shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="p-3 bg-brand-gold text-white rounded-xl shadow-lg shadow-brand-gold/20"><Eye /></span>
                Strategic Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the gold standard for multi-sector conglomerates in emerging markets. We envision a future where Macsigro is synonymous with industrial reliability, architectural brilliance, and transformative economic impact across the continent and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Core Values</span>
                 <h2 className="text-4xl font-display font-extrabold text-brand-navy">What Defines <br/> <span className="italic">The Macsigro Way</span></h2>
              </div>
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[32px] bg-brand-light/50 border border-transparent hover:border-brand-gold hover:bg-white hover:shadow-2xl transition-all group"
                >
                   <div className="w-14 h-14 bg-brand-navy text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors">
                      <val.icon size={28} />
                   </div>
                   <h4 className="text-xl font-bold text-brand-navy mb-4">{val.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-brand-navy text-white rounded-[60px] my-24 mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Chronicle of Success</span>
             <h2 className="text-5xl font-display font-black">History in the Making</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-24">
              {milestones.map((ms, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 hidden md:block ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                     <span className="text-7xl font-black text-white/5 leading-none block mb-4">{ms.year}</span>
                     <h4 className="text-2xl font-display font-bold text-brand-gold italic">{ms.title}</h4>
                  </div>
                  
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold flex items-center justify-center shadow-2xl z-10">
                     <History size={24} className="text-brand-navy" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                       <span className="text-4xl font-black text-brand-gold block md:hidden mb-4">{ms.year}</span>
                       <h4 className="text-2xl font-bold text-white mb-4 block md:hidden">{ms.title}</h4>
                       <p className="text-gray-400 text-lg leading-relaxed">{ms.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
