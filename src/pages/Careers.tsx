import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Rocket, ShieldCheck, Heart, ArrowRight, X, Upload, FileText, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Senior Civil Engineer',
    department: 'Construction',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    description: 'Lead large-scale infrastructure projects and ensure international engineering standards are met.',
    keywords: 'engineering careers, construction opportunities'
  },
  {
    id: 2,
    title: 'Plant Manager',
    department: 'Manufacturing',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    description: 'Oversee daily operations of our automated agro-processing facility and optimize production workflows.',
    keywords: 'manufacturing jobs, production management'
  },
  {
    id: 3,
    title: 'Project Manager (Real Estate)',
    department: 'Real Estate',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'End-to-end management of luxury residential developments from design to handover.',
    keywords: 'real estate jobs in Nigeria, project management'
  },
  {
    id: 4,
    title: 'Logistics Coordinator',
    department: 'Supply Chain',
    location: 'Port Harcourt, Nigeria',
    type: 'Full-time',
    description: 'Coordinate industrial supply chains and optimize distribution networks across the country.',
    keywords: 'logistics jobs, industrial supply'
  }
];

const benefits = [
  { title: 'Global Standards', desc: 'Work with international engineering firms and modern industrial systems.', icon: Rocket },
  { title: 'Secure Environment', desc: 'Health, safety, and environment (HSE) are our top corporate priorities.', icon: ShieldCheck },
  { title: 'Growth Mindset', desc: 'Clear career paths and continuous professional development opportunities.', icon: Users },
  { title: 'Inclusive Culture', desc: 'A diverse workforce reflecting our multi-sector impact.', icon: Heart },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Careers at Macsigro | Engineering Careers & Construction Opportunities in Nigeria";
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsSubmitted(false);
    setFileName(null);
  };

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1521737708094-d839648d152f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Teamwork" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">Join the Conglomerate</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-8 italic">Build Your Career with <span className="text-gradient bg-gradient-to-r from-white to-gray-400">Macsigro Ventures Limited</span></h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We are seeking visionary professionals to join our diverse teams in manufacturing, construction, real estate, and hospitality. Discover high-impact **jobs in Nigeria** and elevate your professional journey.
            </p>
            <a href="#openings" className="bg-brand-gold text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all inline-block">
              View Current Openings
            </a>
          </motion.div>
        </div>
      </section>

      {/* Corporate Culture */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-display font-extrabold text-brand-navy mb-8">Why Macsigro?</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              At Macsigro Ventures Limited, we don't just offer jobs; we offer **engineering careers** and **manufacturing jobs** that shape the future of our nation's infrastructure. Our core philosophy is built on excellence, integrity, and shared growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 bg-brand-light rounded-2xl border border-brand-navy/5">
                  <div className="w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon size={24} />
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">{benefit.title}</h4>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071823991-b9671f30142f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Corporate Team" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-brand-navy text-white p-10 rounded-[40px] shadow-2xl">
                <p className="text-4xl font-black text-brand-gold mb-1">1,200+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Professionals Nationwide</p>
             </div>
          </div>
        </div>
      </section>

      {/* Open Openings */}
      <section id="openings" className="py-32 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-extrabold text-brand-navy mb-6">Current Opportunities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore high-value **construction opportunities** and specialized roles across our business divisions.</p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-light flex flex-col md:flex-row justify-between items-center gap-8 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                      <Clock size={14} />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                    <MapPin size={16} className="text-brand-gold" />
                    {job.location}
                  </div>
                </div>
                <div className="flex items-center gap-8 w-full md:w-auto">
                   <p className="hidden lg:block text-xs text-gray-400 italic max-w-xs">{job.description}</p>
                   <button 
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                   >
                     Apply Now <ArrowRight size={18} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <p className="text-gray-500 mb-6">Don't see a role that fits? We are always looking for top talent.</p>
             <button className="text-brand-navy font-bold flex items-center gap-2 mx-auto hover:text-brand-gold transition-colors">
               Submit Spontaneous Application <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-brand-navy/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 pb-4 flex justify-between items-start border-b border-brand-light">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">Applying for:</span>
                  <h2 className="text-2xl font-display font-extrabold text-brand-navy">{selectedJob.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{selectedJob.location} • {selectedJob.department} Division</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-brand-light rounded-full transition-colors"
                >
                  <X size={24} className="text-brand-navy" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">Application Received</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-8 font-medium">
                      Thank you for your interest in Macsigro Ventures Limited. Our talent acquisition team will review your profile and contact you if there's a match.
                    </p>
                    <button 
                      onClick={closeModal}
                      className="px-10 py-4 bg-brand-navy text-white rounded-2xl font-bold shadow-lg hover:bg-black transition-all"
                    >
                      Return to Careers
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all focus:outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all focus:outline-none" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Phone Number</label>
                        <input required type="tel" placeholder="+234..." className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all focus:outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Expected Salary (Annual)</label>
                        <input type="text" placeholder="₦ 0,000,000" className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all focus:outline-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Resume / CV Upload</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-[32px] p-10 text-center cursor-pointer transition-all ${
                          fileName ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-light hover:border-brand-gold hover:bg-brand-light/50'
                        }`}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                        />
                        {fileName ? (
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-brand-gold text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                              <FileText size={32} />
                            </div>
                            <p className="font-bold text-brand-navy mb-1">{fileName}</p>
                            <p className="text-xs text-brand-gold font-bold uppercase cursor-pointer hover:underline">Change File</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-brand-light text-brand-navy rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                              <Upload size={32} />
                            </div>
                            <p className="font-bold text-brand-navy mb-1 tracking-tight">Click or drag to upload resume</p>
                            <p className="text-xs text-gray-400">PDF, DOC, or DOCX (Max 5MB)</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Brief Cover Statement</label>
                      <textarea rows={4} className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all focus:outline-none resize-none" placeholder="Tell us why you are a great fit for the Macsigro team..."></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting || !fileName}
                        className="w-full py-5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={24} className="animate-spin" />
                            Processing Application...
                          </>
                        ) : (
                          <>
                            Submit Corporate Application
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>
                      {!fileName && !isSubmitting && (
                        <p className="text-[10px] text-center text-red-500 font-bold uppercase tracking-widest mt-3">Please upload your resume to continue</p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Talent Acquisition FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl font-display font-extrabold text-brand-navy mb-12 text-center">Recruitment Insights</h2>
           <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-brand-light">
                 <h4 className="font-bold text-lg text-brand-navy mb-4">Our Recruitment Process</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   Our process typically involves an initial screening, technical assessments for **engineering careers**, and competency-based interviews. We aim for transparency at every stage of your application.
                 </p>
              </div>
              <div className="p-8 rounded-3xl border border-brand-light">
                 <h4 className="font-bold text-lg text-brand-navy mb-4">Relocation Support</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   For specialized roles in our **manufacturing jobs** and construction sectors, we offer comprehensive relocation packages for candidates moving to or within Nigeria.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SEO Optimized Footer Text */}
      <section className="py-10 bg-brand-light/20">
         <div className="max-w-7xl mx-auto px-6 text-[10px] text-gray-400 text-center">
           <p>
             Macsigro Ventures Limited | Leading provider of **jobs in Nigeria**, **engineering careers**, **manufacturing jobs**, and **construction opportunities**. We are committed to equal opportunity and professional growth across all industrial sectors.
           </p>
         </div>
      </section>
    </div>
  );
}
