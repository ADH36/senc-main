import { useState } from 'react';
import { ArrowRight, Gamepad2, Brain, Palette, CreditCard, ExternalLink, Star, Users, Globe, Shield } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gaming', name: 'Gaming & Esports' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'creative', name: 'Creative Services' },
    { id: 'fintech', name: 'Financial Technology' }
  ];

  const products = [
    {
      id: 'senc-esports',
      icon: Gamepad2,
      title: 'SENC Esports',
      category: 'gaming',
      description: 'Professional gaming platform and esports solutions for competitive gaming communities.',
      longDescription: 'SENC Esports is a comprehensive platform designed for professional gamers, esports teams, and gaming communities. Our solution provides tournament management, player analytics, live streaming integration, and community building tools.',
      url: 'https://sencesports.com',
      features: ['Tournament Management', 'Player Analytics', 'Live Streaming', 'Community Tools', 'Leaderboards'],
      stats: { users: '50K+', tournaments: '1000+', communities: '500+' },
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20gaming%20esports%20platform%20interface%20with%20neon%20blue%20and%20cyan%20colors%20professional%20tournament%20dashboard&image_size=landscape_4_3'
    },
    {
      id: 'senc-ai',
      icon: Brain,
      title: 'SENC AI',
      category: 'ai',
      description: 'Cutting-edge artificial intelligence solutions for businesses and developers.',
      longDescription: 'SENC AI offers state-of-the-art machine learning models, natural language processing tools, and AI development frameworks. Perfect for businesses looking to integrate intelligent automation and data-driven insights.',
      url: 'https://ai.senc.in',
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics', 'API Integration'],
      stats: { models: '100+', developers: '10K+', accuracy: '99.5%' },
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20artificial%20intelligence%20dashboard%20with%20neural%20networks%20data%20visualization%20blue%20cyan%20tech%20interface&image_size=landscape_4_3'
    },
    {
      id: 'senc-creatives',
      icon: Palette,
      title: 'SENC Creatives',
      category: 'creative',
      description: 'Professional creative design services for brands and digital experiences.',
      longDescription: 'SENC Creatives delivers exceptional design solutions including brand identity, web design, mobile app interfaces, and digital marketing materials. Our team combines creativity with strategic thinking.',
      url: '#',
      features: ['Brand Identity', 'Web Design', 'Mobile UI/UX', 'Digital Marketing', 'Creative Strategy'],
      stats: { projects: '500+', clients: '200+', satisfaction: '98%' },
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20design%20studio%20workspace%20with%20modern%20tools%20colorful%20palettes%20professional%20branding%20materials&image_size=landscape_4_3'
    },
    {
      id: 'xenpe',
      icon: CreditCard,
      title: 'XenPe',
      category: 'fintech',
      description: 'Secure and efficient payment solutions for modern businesses.',
      longDescription: 'XenPe provides comprehensive payment processing solutions with advanced security features, multi-currency support, and seamless integration capabilities for businesses of all sizes.',
      url: 'https://xenpe.com',
      features: ['Payment Processing', 'Multi-Currency', 'Fraud Protection', 'API Integration', 'Real-time Analytics'],
      stats: { transactions: '1M+', uptime: '99.9%', countries: '50+' },
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=secure%20payment%20processing%20interface%20with%20financial%20charts%20blue%20professional%20fintech%20dashboard&image_size=landscape_4_3'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive suite of innovative solutions designed to transform industries and drive technological advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-cyan-400 text-blue-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-r from-blue-900 to-cyan-600 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                        <p className="text-blue-200 text-sm">{categories.find(c => c.id === product.category)?.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Statistics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(product.stats).map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-2 text-gray-600 text-sm">5.0</span>
                        </div>
                      </div>
                      
                      <a
                        href={product.url}
                        target={product.url.startsWith('http') ? '_blank' : '_self'}
                        rel={product.url.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-cyan-500 transition-colors shadow-lg"
                      >
                        {product.url.startsWith('http') ? 'Visit Site' : 'Learn More'}
                        {product.url.startsWith('http') ? (
                          <ExternalLink className="ml-2 h-4 w-4" />
                        ) : (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Our team can develop tailored solutions to meet your specific business requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-lg"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;