import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Brain, Palette, CreditCard, Star, Users, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-32 h-32 border border-cyan-400/30 rounded-full"
          />
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400/50 rounded-full blur-sm"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Welcome to <span className="text-cyan-400">SENC</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Empowering innovation across gaming, AI, creativity, and financial technology
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-lg mb-12 text-blue-200 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Discover our comprehensive suite of cutting-edge products designed to transform industries and drive technological advancement.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-lg group"
                >
                  Explore Products
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our diverse range of innovative solutions spanning multiple industries and technologies.
            </p>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer border border-white/20"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-lg mb-4 shadow-lg"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={product.url}
                    target={product.url.startsWith('http') ? '_blank' : '_self'}
                    rel={product.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: Users, value: '10K+', label: 'Active Users' },
              { icon: Trophy, value: '50+', label: 'Awards Won' },
              { icon: Star, value: '4.9', label: 'User Rating' },
              { icon: Zap, value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-600 rounded-full mx-auto mb-4 shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-blue-900 dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-32 h-32 border border-cyan-400/30 rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and individuals who trust SENC for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-colors"
                >
                  View All Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;