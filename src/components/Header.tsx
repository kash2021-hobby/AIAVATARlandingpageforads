import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">AI Avatar Studio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:bg-clip-text font-medium transition-all">
              Features
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:bg-clip-text font-medium transition-all">
              Use Cases
            </a>
            <a href="#demo" className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:bg-clip-text font-medium transition-all">
              Demo
            </a>
            <a href="#contact-form" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium">
                Features
              </a>
              <a href="#use-cases" className="text-gray-700 hover:text-gray-900 font-medium">
                Use Cases
              </a>
              <a href="#demo" className="text-gray-700 hover:text-gray-900 font-medium">
                Demo
              </a>
              <a href="#contact-form" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-semibold text-left block">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
