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
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From customer service to education, AI avatars are revolutionizing
            how businesses engage with their audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon size={32} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
