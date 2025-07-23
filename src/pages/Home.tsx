import { ArrowRight, Gamepad2, Brain, Palette, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    {
      icon: Gamepad2,
      title: 'SENC Esports',
      description: 'Professional gaming platform and esports solutions for competitive gaming communities.',
      url: 'https://sencesports.com',
      category: 'Gaming & Esports'
    },
    {
      icon: Brain,
      title: 'SENC AI',
      description: 'Cutting-edge artificial intelligence solutions for businesses and developers.',
      url: 'https://ai.senc.in',
      category: 'Artificial Intelligence'
    },
    {
      icon: Palette,
      title: 'SENC Creatives',
      description: 'Professional creative design services for brands and digital experiences.',
      url: '#',
      category: 'Creative Services'
    },
    {
      icon: CreditCard,
      title: 'XenPe',
      description: 'Secure and efficient payment solutions for modern businesses.',
      url: 'https://xenpe.com',
      category: 'Financial Technology'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-cyan-400">SENC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Empowering innovation across gaming, AI, creativity, and financial technology
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Discover our comprehensive suite of cutting-edge products designed to transform industries and drive technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-lg"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of innovative solutions spanning multiple industries and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group hover:scale-105 transform transition-transform"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <a
                    href={product.url}
                    target={product.url.startsWith('http') ? '_blank' : '_self'}
                    rel={product.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust SENC for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;