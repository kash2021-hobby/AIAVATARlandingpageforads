import { Play } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function RegionalLanguageDemo() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Regional Language{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Content in your language
          </p>
        </div>

        <div className="flex justify-center relative z-10">
          <div className="relative group max-w-md w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 rounded-3xl p-[3px] shadow-2xl">
              <div className="bg-slate-900 rounded-[22px] overflow-hidden">
                <div className="aspect-[9/16]">
                  <VideoPlayer url="https://youtube.com/shorts/_pUj_iRfNI4?si=1-xtSaluhVZ_hAht" aspectRatio="portrait" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 px-6 py-3 rounded-full font-black text-sm shadow-2xl flex items-center gap-2 animate-pulse">
              <Play size={18} />
              Regional Content
            </div>
          </div>
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
      `}</style>
    </section>
  );
}
