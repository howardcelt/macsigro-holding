import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Lock, 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Bell, 
  Users, 
  LogOut, 
  Newspaper, 
  Download,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const internalNews = [
  { id: 1, date: 'May 12, 2026', title: 'New Safety Protocols for Manufacturing Hub A2', category: 'Operational' },
  { id: 2, date: 'May 10, 2026', title: 'Q2 Corporate Town Hall - Recording Available', category: 'Corporate' },
  { id: 3, date: 'May 05, 2026', title: 'Announcing the Employee of the Month: Sarah Chen', category: 'Recognition' },
];

const resources = [
  { name: 'Employee Handbook', type: 'PDF', size: '1.2MB' },
  { name: 'Leave Request Form', type: 'DOCX', size: '45KB' },
  { name: 'Health Insurance Policy', type: 'PDF', size: '2.4MB' },
  { name: 'Code of Conduct', type: 'PDF', size: '800KB' },
];

export default function EmployeePortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (staffId && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-brand-light"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Lock size={32} />
            </div>
            <h1 className="text-3xl font-display font-black text-brand-navy mb-2">Employee Portal</h1>
            <p className="text-gray-500 text-sm">Secure access for Macsigro Ventures staff only.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Staff ID</label>
              <input 
                required 
                type="text" 
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                placeholder="MVL-00-000" 
                className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Password</label>
              <input 
                required 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold p-4 rounded-xl text-sm transition-all outline-none" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
            >
              Sign In
            </button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase cursor-pointer hover:text-brand-gold transition-colors">
              Forgotten Credentials? Contact HR
            </p>
          </form>

          <div className="mt-10 pt-10 border-t border-brand-light flex items-center justify-center gap-3 text-brand-gray">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secured Corporate Network</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portal Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-black text-brand-navy italic">Welcome Back, Employee</h1>
            <p className="text-brand-gray font-medium">Internal Dashboard & Resources</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-brand-navy border border-brand-light rounded-xl font-bold hover:bg-brand-navy hover:text-white transition-all shadow-sm"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Timesheet', icon: Calendar },
                { name: 'Payslip', icon: FileText },
                { name: 'Directory', icon: Users },
                { name: 'Helpdesk', icon: Bell },
              ].map((action) => (
                <button key={action.name} className="p-6 bg-white rounded-3xl border border-brand-light shadow-sm hover:shadow-xl hover:border-brand-gold transition-all group">
                  <div className="w-12 h-12 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <action.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">{action.name}</span>
                </button>
              ))}
            </div>

            {/* Internal News */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-brand-light">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center gap-3">
                  <Newspaper className="text-brand-gold" />
                  Internal News & Updates
                </h2>
                <button className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  View All <ChevronRight size={14} />
                </button>
              </div>
              <div className="space-y-6">
                {internalNews.map((news) => (
                  <div key={news.id} className="p-6 bg-brand-light rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-brand-light cursor-pointer">
                    <div>
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1 block">{news.category}</span>
                      <h4 className="font-bold text-brand-navy">{news.title}</h4>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{news.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Resources/Downloads */}
            <div className="bg-brand-navy text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <LayoutDashboard size={100} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Resources</h3>
              <div className="space-y-4 relative z-10">
                {resources.map((res) => (
                  <div key={res.name} className="p-4 bg-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-brand-gold/20 text-brand-gold rounded-lg">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{res.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{res.type} • {res.size}</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-500 group-hover:text-white transition-colors">
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Message */}
            <div className="p-8 rounded-[40px] bg-white border border-brand-light shadow-sm">
               <h4 className="text-brand-navy font-bold mb-4 italic">Management Quote of the Day</h4>
               <p className="text-sm text-gray-500 italic leading-relaxed">
                 "Our industrial strength lies in our unified vision. Each division is a key component of our collective excellence."
               </p>
               <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full" />
                  <div>
                    <h5 className="text-xs font-bold text-brand-navy uppercase font-display">Office of the CEO</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Quarterly Direct</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
