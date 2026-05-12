import { Factory, Building2, Home as HomeIcon, Hotel, Package, Truck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const divisions = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    headline: 'Scaling Production for Global Markets',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565173153514-688950c45155?q=80&w=800&auto=format&fit=crop',
    points: ['ISO Certified Processes', 'Automated Bulk Production', 'Supply Chain Integration']
  },
  {
    id: 'construction',
    title: 'Construction & Civil Engineering',
    headline: 'Architecting Future Infrastructure',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1541888941257-2009265f2425?q=80&w=800&auto=format&fit=crop',
    points: ['Infrastructure Development', 'Commercial High-rises', 'Civil Engineering']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Land Development',
    headline: 'High-Value Property Portfolios',
    icon: HomeIcon,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    points: ['Luxury Residential', 'Commercial Leasing', 'Strategic Land Banking']
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Leisure',
    headline: 'World-Class Guest Experiences',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1551882547-ff43c61f3630?q=80&w=800&auto=format&fit=crop',
    points: ['Boutique Hotels', 'Luxury Resorts', 'Premium Event Centers']
  },
  {
    id: 'processing-packaging',
    title: 'Processing & Packaging',
    headline: 'Value-Addition to Industrial Inputs',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    points: ['Industrial Packaging', 'Food Processing', 'Custom Branding Solutions']
  },
  {
    id: 'stackston',
    title: 'Stackston Industries',
    headline: 'Agro-Industrial Excellence',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    points: ['Agro-Processing', 'Export Grade Quality', 'Sustainable Farming']
  }
];

export default function Divisions() {
  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Ecosystem</span>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-navy mb-8">Business Divisions</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Macsigro Ventures Limited operates through specialized subsidiaries and divisions, each a leader in its respective field.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {divisions.map((div, idx) => (
              <motion.div 
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:items-center gap-12 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={div.image} alt={div.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center mb-8">
                    <div.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-navy mb-2">{div.title}</h2>
                  <p className="text-brand-gold font-bold mb-6 italic text-xl">{div.headline}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {div.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-gray-600 font-medium">
                        <CheckCircle2 size={18} className="text-brand-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/divisions/${div.id}`}
                    className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all hover:scale-105"
                  >
                    Explore Division <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8">Seeking a Partnership?</h2>
          <p className="text-gray-400 mb-10 text-lg">We are always open to discuss joint ventures, infrastructure contracts, and investment opportunities across our divisions.</p>
          <Link to="/contact" className="inline-block bg-brand-gold text-white px-12 py-5 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all text-xl">
             Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
