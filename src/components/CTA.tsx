import { useState, FormEvent } from 'react';
import { Sparkles, User, Phone, Building2, MapPin, Send } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    location: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `*New Business Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business Name:* ${formData.businessName}%0A*Location:* ${formData.location}`;

    const whatsappUrl = `https://wa.me/916000683808?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', businessName: '', location: '' });
  };

  return (
    <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-full text-sm font-black mb-8 shadow-2xl animate-pulse">
            <Sparkles size={20} />
            <span className="tracking-wide">LIMITED TIME OFFER</span>
            <Sparkles size={20} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-200 mb-12 font-medium">
            Fill out the form below and we'll get back to you on WhatsApp within minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/20 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <label htmlFor="name" className="block text-white font-bold mb-3 text-lg">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={22} />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all font-medium text-lg"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-white font-bold mb-3 text-lg">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={22} />
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all font-medium text-lg"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="businessName" className="block text-white font-bold mb-3 text-lg">
                Business Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={22} />
                <input
                  type="text"
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all font-medium text-lg"
                  placeholder="Your Company Name"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="location" className="block text-white font-bold mb-3 text-lg">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={22} />
                <input
                  type="text"
                  id="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all font-medium text-lg"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group w-full mt-10 bg-gradient-to-r from-white via-cyan-50 to-white text-blue-600 px-12 py-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-black text-xl flex items-center justify-center gap-3"
          >
            <span className="tracking-wide">Send to WhatsApp</span>
            <Send size={26} className="group-hover:translate-x-2 transition-transform" />
          </button>

          <p className="text-slate-200 mt-8 text-center text-base font-bold">
            We'll respond within 24 hours • Free consultation • No obligations
          </p>
        </form>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
