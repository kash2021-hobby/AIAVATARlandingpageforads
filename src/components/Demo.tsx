import { Play, Sparkles } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function Demo() {
  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            See It{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience the future of digital interaction with our live AI avatar demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-[3px] shadow-2xl">
              <div className="bg-slate-900 rounded-[22px] overflow-hidden">
                <div className="aspect-video">
                  <VideoPlayer url="https://youtu.be/-4IvCkBdE-I" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full font-black text-sm shadow-2xl flex items-center gap-2 animate-pulse">
              <Sparkles size={18} />
              Live Demo
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Choose Your Avatar</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  Select from 500+ pre-designed avatars or create a custom one from a photo.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Customize Personality</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  Define voice, tone, behavior, and knowledge base to match your brand.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Deploy Anywhere</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  Integrate into your website, app, kiosk, or any digital platform instantly.
                </p>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl w-full sm:w-auto mt-6 flex items-center justify-center gap-3">
              <span>Try Interactive Demo</span>
              <Play size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div id="showcase" className="mt-32 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI Avatar Showcase
              </span>
            </h3>
            <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Watch real examples of AI Avatars in action across different industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Product Demo', category: 'Retail', gradient: 'from-blue-500 to-cyan-500' },
              { title: 'Educational Tutorial', category: 'Education', gradient: 'from-purple-500 to-pink-500' },
              { title: 'Real Estate Tour', category: 'Real Estate', gradient: 'from-orange-500 to-red-500' },
              { title: 'Healthcare Information', category: 'Healthcare', gradient: 'from-green-500 to-emerald-500' },
              { title: 'Financial Services', category: 'Finance', gradient: 'from-yellow-500 to-orange-500' },
              { title: 'Travel & Tourism', category: 'Travel', gradient: 'from-cyan-500 to-blue-500' },
            ].map((video, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${video.gradient} rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500`}></div>
                <div className={`relative bg-gradient-to-r ${video.gradient} rounded-3xl p-[2px] shadow-xl`}>
                  <div className="bg-white rounded-[22px] overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                      {video.title === 'E-Commerce Product Demo' ? (
                        <img
                          src="/E-Commerce Product Demo.webp"
                          alt="E-Commerce Product Demo"
                          className="w-full h-full object-cover"
                        />
                      ) : video.title === 'Educational Tutorial' ? (
                        <img
                          src="/Screenshot 2025-10-29 110016.png"
                          alt="Educational Tutorial"
                          className="w-full h-full object-cover"
                        />
                      ) : video.title === 'Real Estate Tour' ? (
                        <img
                          src="/Real Estate Tour.webp"
                          alt="Real Estate Tour"
                          className="w-full h-full object-cover"
                        />
                      ) : video.title === 'Healthcare Information' ? (
                        <img
                          src="/Healthcare Information.webp"
                          alt="Healthcare Information"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/5"></div>
                          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl relative z-10 group-hover:shadow-2xl">
                            <Play size={32} className={`bg-gradient-to-r ${video.gradient} bg-clip-text text-transparent ml-1`} />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="p-6 bg-white">
                      <div className={`inline-block bg-gradient-to-r ${video.gradient} text-white px-4 py-1 rounded-full text-xs font-bold mb-3`}>
                        {video.category}
                      </div>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
