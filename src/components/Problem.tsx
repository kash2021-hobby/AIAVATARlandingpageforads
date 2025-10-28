import { Play } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-red-200">
            THE CHALLENGE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            Creating Content is{' '}
            <span className="block mt-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Hard & Expensive
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Traditional content creation comes with countless obstacles that prevent brands from
            scaling their marketing efforts effectively.
          </p>
        </div>

        <div className="mb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-white to-red-50/50 rounded-3xl p-10 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={28} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  Camera Shy & Lack of Confidence?
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed mb-5 font-medium">
                  Don't feel comfortable in front of the camera? You're not alone. Many professionals struggle with on-camera presence and public speaking.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With AI Avatars, you never have to worry about being camera shy again. Create professional content without ever stepping in front of a camera.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-3xl p-[3px] shadow-2xl">
                <div className="bg-white rounded-[22px] p-8">
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/QmjQon8yHbY?si=i9eM1WfZEj6DzEK_&autoplay=1&mute=1&loop=1&playlist=QmjQon8yHbY&controls=1"
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
          </div>
        </div>

        <div className="mb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-3xl p-[3px] shadow-2xl">
                <div className="bg-white rounded-[22px] p-8">
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/-4IvCkBdE-I?si=Ney1IexwewWjEibJ&autoplay=1&mute=1&loop=1&playlist=-4IvCkBdE-I&controls=1"
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

            <div className="space-y-8 order-1 lg:order-2">
              <div className="group bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-10 border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={28} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  No Time for Shoots & No Studio Space?
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed mb-5 font-medium">
                  Busy schedule with no time for filming and endless retakes? Don't have access to a professional shooting location?
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With AI Avatars, create professional videos anytime, anywhere. No studios, no scheduling conflicts, no location hassles. Just instant, high-quality content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-10 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={28} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  Tight Budget & Expensive Equipment?
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed mb-5 font-medium">
                  Professional video production costs and expensive cameras are breaking your budget, making quality content creation feel impossible.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With AI Avatars, get professional-quality videos at a fraction of the cost. No expensive equipment, no production crew, just affordable, high-quality content creation.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-[3px] shadow-2xl">
                <div className="bg-white rounded-[22px] p-8">
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/-4IvCkBdE-I?si=v8ZefzS6acJ5inoJ&autoplay=1&mute=1&loop=1&playlist=-4IvCkBdE-I&controls=1"
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
          </div>
        </div>

        <div className="mb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
                <div className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-3xl p-[3px] shadow-2xl">
                  <div className="bg-white rounded-[22px] p-8">
                    <div className="aspect-[9/16] bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-emerald-500/10"></div>
                      <div className="text-center relative z-10 px-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-600 via-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 cursor-pointer shadow-2xl hover:shadow-green-500/50">
                          <Play size={36} className="text-white ml-1" />
                        </div>
                        <p className="text-slate-800 font-bold text-lg">Regional Language Demo</p>
                        <p className="text-slate-500 text-xs mt-2">Content in your language</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="group bg-gradient-to-br from-white to-green-50/50 rounded-3xl p-10 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={28} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  Facing Problem in Making Content in Regional Language?
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed mb-5 font-medium">
                  Creating content in regional languages can be challenging and expensive. Finding native speakers, managing translations, and ensuring authenticity takes time and resources.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With our AI Avatars, create authentic content in your native language effortlessly. From Marathi, Kannada, and Telugu to Bengali and beyond, we support all major Indian regional languages. Reach your local audience with content that truly connects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-gradient-slow"></div>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Sound Familiar?
            </h3>
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium">
              These challenges prevent countless businesses from creating the content they need to grow.
              But what if there was a better way?
            </p>
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
      `}</style>
    </section>
  );
}
