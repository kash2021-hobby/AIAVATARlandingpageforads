import { Bot, Globe, Video, Zap, MessageSquare, Users } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Realistic AI Avatars',
    description: 'Create photorealistic digital humans with natural movements, expressions, and lip-sync accuracy.',
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Speak to global audiences with support for 175+ languages and natural accent variations.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
  {
    icon: Video,
    title: 'Video Generation',
    description: 'Generate high-quality video content at scale without cameras, studios, or actors.',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Zap,
    title: 'Real-Time Interaction',
    description: 'Enable live conversations with instant responses powered by advanced AI technology.',
    gradient: 'from-cyan-600 to-blue-600',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'AI-powered dialogue that understands context and delivers personalized responses.',
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Users,
    title: 'Custom Personalities',
    description: 'Define unique personalities, voices, and behaviors to match your brand identity.',
    gradient: 'from-cyan-500 to-blue-700',
    bgGradient: 'from-cyan-100 to-blue-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Powerful Features for Every Need
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to create, deploy, and scale AI avatar experiences
            across your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon size={32} className={`bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
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
      `}</style>
    </section>
  );
}
