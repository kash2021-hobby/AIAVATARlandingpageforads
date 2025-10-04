import { Building2, Briefcase, Target, Headphones } from 'lucide-react';

const stats = [
  { icon: Building2, value: '10+', label: 'Leading Brands' },
  { icon: Briefcase, value: '5+', label: 'Industries' },
  { icon: Target, value: '98%', label: 'Client Retention' },
  { icon: Headphones, value: '24/7', label: 'Support' },
];

const brands = [
  { name: 'Tata Motors', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png' },
  { name: 'Yamaha', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yamaha_Corporation_logo.svg/2560px-Yamaha_Corporation_logo.svg.png' },
  { name: 'TVS Motors', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/TVS_Motor_Company_Logo.svg/2560px-TVS_Motor_Company_Logo.svg.png' },
  { name: 'First Abu Dhabi Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/FAB_Logo.svg/2560px-FAB_Logo.svg.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
  { name: 'Myntra', logo: 'https://constant.myntassets.com/web/assets/img/myntra.png' },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flipkart_logo.svg/2560px-Flipkart_logo.svg.png' },
  { name: 'DermaNext', logo: 'https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=DermaNext' },
  { name: 'Bene Kleed', logo: 'https://via.placeholder.com/200x80/06B6D4/FFFFFF?text=Bene+Kleed' },
  { name: 'Minto Bay', logo: 'https://via.placeholder.com/200x80/0284C7/FFFFFF?text=Minto+Bay' },
];

export default function TrustedBrands() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with industry leaders across multiple sectors to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 flex items-center justify-center h-24"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}