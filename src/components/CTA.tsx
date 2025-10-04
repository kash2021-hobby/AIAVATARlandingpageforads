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
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xNiAwYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0xNiAxNmMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHptLTE2IDBjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Sparkles size={18} />
            <span>Limited Time Offer</span>
            <Sparkles size={18} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Fill out the form below and we'll get back to you on WhatsApp within minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="businessName" className="block text-white font-semibold mb-2">
                Business Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
                <input
                  type="text"
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  placeholder="Your Company Name"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="location" className="block text-white font-semibold mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
                <input
                  type="text"
                  id="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group w-full mt-8 bg-white text-blue-600 px-10 py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center gap-3"
          >
            <span>Send to WhatsApp</span>
            <Send size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/80 mt-6 text-center text-sm font-medium">
            We'll respond within 24 hours • Free consultation • No obligations
          </p>
        </form>
      </div>
    </section>
  );
}
