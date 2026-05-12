import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Github as Google, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Divisions',
      links: [
        { name: 'Manufacturing', href: '/divisions/manufacturing' },
        { name: 'Construction', href: '/divisions/construction' },
        { name: 'Real Estate', href: '/divisions/real-estate' },
        { name: 'Hospitality', href: '/divisions/hospitality' },
        { name: 'Industrial Processing', href: '/divisions/processing-packaging' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Insights', href: '/blog' },
      ]
    },
    {
      title: 'Subsidiaries',
      links: [
        { name: 'Stackston Industries', href: '/divisions/stackston' },
      ]
    }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">MACSIGRO</span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-gray">VENTURES LIMITED</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Driving industrial growth, infrastructure, and investment excellence across sectors. A premium multi-sector holding company committed to sustainable development.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to our investor newsletter for company updates and insights.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 p-1.5 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
            <div className="mt-8 space-y-3">
               <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="p-2 bg-gray-800 rounded-md text-brand-gold"><MapPin size={14} /></div>
                <span>Corporate Headquarters, Central Business District</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="p-2 bg-gray-800 rounded-md text-brand-gold"><Phone size={14} /></div>
                <span>+234 (0) 800 MACSIGRO</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="p-2 bg-gray-800 rounded-md text-brand-gold"><Mail size={14} /></div>
                <span>contact@macsigro.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Macsigro Ventures Limited. All Rights Reserved. 
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms & Conditions</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
