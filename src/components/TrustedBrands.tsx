const brands = [
  { name: 'Bene Kleed', logo: '/bene kleed.png' },
  { name: 'DermaNext', logo: '/derma next.jpg' },
  { name: 'First Abu Dhabi Bank', logo: '/dubai.png' },
  { name: 'Minto Bay', logo: '/minto bay.png' },
  { name: 'Myntra', logo: '/myntra.jpg' },
  { name: 'Tata Motors', logo: '/tata jpg.png' },
  { name: 'TVS Motors', logo: '/tvs motors.jpg' },
  { name: 'Yamaha', logo: '/yamaha.jpg' },
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
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}