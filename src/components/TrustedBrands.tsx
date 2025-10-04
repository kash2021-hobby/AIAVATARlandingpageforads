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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Trusted by{' '}
            <span className="block sm:inline bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We've partnered with industry leaders across multiple sectors to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-slate-200 hover:border-blue-300 flex items-center justify-center h-28"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}