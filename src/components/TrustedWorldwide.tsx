import { Globe, Users, Building2, Award, TrendingUp, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10M+',
    label: 'Active Users',
    color: 'from-blue-400 to-cyan-400',
    bgColor: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Enterprise Clients',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'from-cyan-100 to-blue-100',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Served',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Satisfaction Rate',
    color: 'from-cyan-500 to-blue-400',
    bgColor: 'from-cyan-100 to-blue-100',
  },
  {
    icon: TrendingUp,
    value: '250%',
    label: 'Average ROI',
    color: 'from-blue-400 to-cyan-600',
    bgColor: 'from-blue-100 to-cyan-100',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Customer Rating',
    color: 'from-cyan-600 to-blue-600',
    bgColor: 'from-cyan-100 to-blue-100',
  },
];

export default function TrustedWorldwide() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTYgMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHptMTYgMTZjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xNiAwYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Powering digital transformation for businesses across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <stat.icon size={32} className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
              </div>
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-cyan-200 font-medium text-lg">
                {stat.label}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
