import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-brand-navy text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-8 italic text-gradient bg-gradient-to-r from-white to-gray-400">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Connect with our corporate headquarters for partnerships, investor inquiries, or division-specific consultations.
          </p>
        </div>
      </section>

      <section className="py-24 -mt-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-brand-light shadow-xl">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-8">Corporate Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-light rounded-xl text-brand-navy"><MapPin size={20} /></div>
                  <div>
                    <h5 className="font-bold text-sm">Headquarters</h5>
                    <p className="text-gray-500 text-sm">Central Business District, FCT, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-light rounded-xl text-brand-navy"><Phone size={20} /></div>
                  <div>
                    <h5 className="font-bold text-sm">Phone</h5>
                    <p className="text-gray-500 text-sm">+234 (0) 800 MACSIGRO</p>
                    <p className="text-gray-500 text-sm">+234 (0) 900 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-light rounded-xl text-brand-navy"><Mail size={20} /></div>
                  <div>
                    <h5 className="font-bold text-sm">Email</h5>
                    <p className="text-gray-500 text-sm">contact@macsigro.com</p>
                    <p className="text-gray-500 text-sm">investors@macsigro.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-navy text-white shadow-xl relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
               <h3 className="font-display font-bold text-xl mb-6 relative z-10">Operational Hours</h3>
               <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-bold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-bold">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 pt-4">
                    <Clock size={16} className="text-brand-gold" />
                    <span className="text-xs font-bold tracking-widest uppercase">GMT+1 Standard Time</span>
                  </div>
               </div>
            </div>
            
            <a href="https://wa.me/123456789" className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-5 rounded-2xl font-bold shadow-lg hover:shadow-green-500/20 transition-all active:scale-95">
               <MessageSquare size={24} />
               Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-brand-light">
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">Send a Corporate Message</h2>
              <p className="text-gray-500 mb-10">Use the form below to route your inquiry to the appropriate division. Our representatives will respond within 24 business hours.</p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Phone Number</label>
                  <input type="tel" placeholder="+234..." className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none appearance-none">
                     <option>General Inquiry</option>
                     <option>Partnership & JV</option>
                     <option>Real Estate Investment</option>
                     <option>Construction Quote</option>
                     <option>Hospitality Booking</option>
                     <option>Vendor Registration</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Message Body</label>
                  <textarea rows={6} placeholder="Tell us about your project or inquiry..." className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full md:w-auto px-12 py-5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3 group">
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 grayscale">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84478144672!2d7.398539!3d9.033872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7cc63a8d%3A0xe5a3c9441113262b!2sCentral%20Business%20District%2C%20Abuja!5e0!3m2!1sen!2sng!4v1715500000000!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </div>
  );
}
