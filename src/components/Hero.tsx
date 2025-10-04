import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjAwZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTYgMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHptMTYgMTZjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xNiAwYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-bounce shadow-lg">
            <Sparkles size={18} />
            <span>The Future of Content Creation</span>
            <Zap size={18} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Create Professional Content{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
              Without Cameras or Actors
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed">
            Transform your brand with studio-quality videos, engaging social media content, and amazing voiceovers—all at an affordable price using AI Avatars
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact-form" className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-2 w-full sm:w-auto justify-center relative overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button className="group border-3 border-blue-600 text-blue-700 bg-white px-8 py-4 rounded-xl hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-2 w-full sm:w-auto justify-center">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 sm:p-12">
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                    <Play size={36} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-700 font-bold text-lg">Interactive Avatar Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '175+', label: 'Languages', gradient: 'from-blue-600 to-cyan-500' },
            { value: '24/7', label: 'Availability', gradient: 'from-cyan-500 to-blue-500' },
            { value: '500+', label: 'Avatar Styles', gradient: 'from-blue-500 to-cyan-600' },
            { value: '10x', label: 'ROI Increase', gradient: 'from-cyan-600 to-blue-600' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300"
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
}
