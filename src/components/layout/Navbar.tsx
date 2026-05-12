import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Divisions', 
    href: '/divisions',
    submenu: [
      { name: 'Manufacturing', href: '/divisions/manufacturing' },
      { name: 'Construction', href: '/divisions/construction' },
      { name: 'Real Estate', href: '/divisions/real-estate' },
      { name: 'Hospitality', href: '/divisions/hospitality' },
      { name: 'Processing & Packaging', href: '/divisions/processing-packaging' },
      { name: 'Stackston Industries', href: '/divisions/stackston' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg group-hover:bg-brand-gold transition-colors">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-tight ${scrolled ? 'text-brand-navy' : 'text-brand-navy md:text-white'}`}>
              MACSIGRO
            </span>
            <span className={`text-[10px] font-semibold tracking-widest ${scrolled ? 'text-brand-gray' : 'text-brand-gray md:text-white/80'}`}>
              VENTURES LIMITED
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link 
                to={link.href}
                className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                  scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-brand-navy md:text-white md:hover:text-brand-gold'
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} />}
              </Link>

              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl overflow-hidden border border-brand-light"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-3 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="https://wa.me/yournumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            <MessageSquare size={16} />
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-light overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-xl font-bold text-brand-navy flex justify-between items-center"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="mt-4 ml-4 flex flex-col gap-3">
                      {link.submenu.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.href}
                          className="text-brand-gray hover:text-brand-gold font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-black transition-colors">
                  Client Portal
                </button>
                <div className="flex justify-around items-center pt-4">
                  <a href="tel:+123456789" className="p-3 bg-brand-light rounded-full text-brand-navy"><Phone size={20} /></a>
                  <a href="https://wa.me/123456789" className="p-3 bg-brand-light rounded-full text-brand-navy"><MessageSquare size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
