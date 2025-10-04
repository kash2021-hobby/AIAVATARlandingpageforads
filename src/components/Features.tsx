import { Video, Mic, DollarSign, Sparkles, Zap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Studio Quality Videos',
    description: 'Get professional-grade videos without expensive cameras, lighting, or studio rental. Just type your script and let AI do the rest.',
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Sparkles,
    title: 'Social Media Content',
    description: 'Create engaging content for Instagram, YouTube, LinkedIn, and more. Never worry about being camera shy again.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
  {
    icon: Mic,
    title: 'Amazing Voiceovers',
    description: 'Natural-sounding voiceovers in multiple languages and accents. No recording studio needed.',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Professional content at a fraction of traditional costs. No actors, no crew, no expensive equipment.',
    gradient: 'from-cyan-600 to-blue-600',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
  {
    icon: Zap,
    title: 'No Retakes Needed',
    description: 'Edit your script and regenerate instantly. Save hours of shooting and editing time.',
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: TrendingUp,
    title: 'Build Your Brand',
    description: 'Consistent, professional content helps you establish authority and grow your audience rapidly.',
    gradient: 'from-cyan-500 to-blue-700',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-green-200">
            THE SOLUTION
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="text-slate-900">How </span>
            <span className="block sm:inline bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AI Avatars
            </span>
            <span className="text-slate-900"> Solve Your Problems</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Everything you need to create professional content without the traditional hassles and expenses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-slate-200 hover:border-blue-300"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
