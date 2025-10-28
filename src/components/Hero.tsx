import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-slow">
            <Sparkles size={18} className="animate-spin-slow" />
            <span className="tracking-wide">The Future of Content Creation</span>
            <Zap size={18} className="animate-pulse" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
              Create Professional
            </span>
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
              Content{' '}
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-slow">
              Without Cameras
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Transform your brand with studio-quality videos, engaging social media content, and amazing voiceovers—all at an affordable price using AI Avatars
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#contact-form" className="group bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center relative overflow-hidden">
              <span className="relative z-10 tracking-wide">Start Free Trial</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#demo" className="group border-2 border-slate-300 text-slate-700 bg-white px-10 py-5 rounded-2xl hover:bg-slate-50 hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center">
              <Play size={22} className="group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Watch Demo</span>
            </a>
          </div>
        </div>

        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-[3px] shadow-2xl">
            <div className="bg-white rounded-[22px] p-6 sm:p-10">
              <div className="aspect-video relative overflow-hidden rounded-2xl">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/ZyRaqNkP5pY?si=wTHXczcd861n7OLY&autoplay=1&mute=1&loop=1&playlist=ZyRaqNkP5pY&controls=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '175+', label: 'Languages', gradient: 'from-blue-600 to-cyan-500' },
            { value: '24/7', label: 'Availability', gradient: 'from-cyan-500 to-blue-500' },
            { value: '500+', label: 'Avatar Styles', gradient: 'from-blue-500 to-cyan-600' },
            { value: '10x', label: 'ROI Increase', gradient: 'from-cyan-600 to-blue-600' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 hover:border-blue-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-semibold text-xs tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
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

        @keyframes gradient-slow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-slow {
          background-size: 200% auto;
          animation: gradient-slow 4s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
