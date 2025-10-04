import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      '1 AI Avatar',
      '10 hours of video generation/month',
      '50 languages',
      'Basic customization',
      'Email support',
      'HD video quality',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '299',
    description: 'For growing businesses that need more power',
    features: [
      '5 AI Avatars',
      '50 hours of video generation/month',
      '175+ languages',
      'Advanced customization',
      'Priority support',
      '4K video quality',
      'Real-time interactions',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations requiring custom solutions',
    features: [
      'Unlimited AI Avatars',
      'Unlimited video generation',
      '175+ languages',
      'Full customization',
      'Dedicated account manager',
      '4K video quality',
      'Real-time interactions',
      'Full API access',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'border border-gray-200 shadow-md'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price === 'Custom' ? '' : '$'}
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-600 ml-2">/month</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
