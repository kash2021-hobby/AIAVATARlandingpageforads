import { Briefcase, GraduationCap, ShoppingBag, Headphones } from 'lucide-react';

const useCases = [
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Provide 24/7 multilingual customer service with AI avatars that never sleep.',
    benefits: ['Reduce response time by 90%', 'Handle unlimited concurrent conversations', 'Maintain consistent service quality'],
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Sales',
    description: 'Personalize shopping experiences with virtual sales assistants.',
    benefits: ['Increase conversion rates', 'Product recommendations', 'Virtual try-on experiences'],
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Create engaging learning experiences with interactive AI instructors.',
    benefits: ['Personalized learning paths', 'Interactive tutorials', 'Language learning support'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Training',
    description: 'Scale employee onboarding and training with consistent AI-driven programs.',
    benefits: ['Standardized training delivery', 'Cost-effective scaling', 'Real-time performance tracking'],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Transform{' '}
            <span className="block sm:inline bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            From customer service to education, AI avatars are revolutionizing
            how businesses engage with their audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-slate-200 hover:border-blue-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <useCase.icon size={36} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{useCase.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg font-medium">{useCase.description}</p>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
