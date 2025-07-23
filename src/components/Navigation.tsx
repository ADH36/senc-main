import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Gamepad2, Brain, Palette, CreditCard } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const products = [
    { name: 'SENC Esports', url: 'https://sencesports.com', description: 'Gaming & Esports Platform', icon: Gamepad2 },
    { name: 'SENC AI', url: 'https://ai.senc.in', description: 'Artificial Intelligence Solutions', icon: Brain },
    { name: 'SENC Creatives', url: '#', description: 'Creative Design Services', icon: Palette },
    { name: 'XenPe', url: 'https://xenpe.com', description: 'Payment Solutions', icon: CreditCard }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20 dark:border-white/10 shadow-lg safe-area-top"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-glow"
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">SENC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400'
                }`}
              >
                Home
              </Link>
            </motion.div>
            
            {/* Products Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/products') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400'
                }`}
              >
                Products
                <motion.div
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card py-2"
                  >
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:text-cyan-400"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      View All Products
                    </Link>
                    <hr className="my-2" />
                    {products.map((product, index) => {
                      const IconComponent = product.icon;
                      return (
                        <motion.a
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:text-cyan-400"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <IconComponent className="w-4 h-4 text-primary-600 dark:text-cyan-400" />
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{product.description}</div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400'
                }`}
              >
                About
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400'
                }`}
              >
                Contact
              </Link>
            </motion.div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 transition-colors p-2 tap-target touch-manipulation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-white/20 dark:border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 safe-area-bottom">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <Link
                  to="/"
                  className={`block px-3 py-3 rounded-md text-base font-medium tap-target touch-manipulation ${
                    isActive('/') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Link
                  to="/products"
                  className={`block px-3 py-3 rounded-md text-base font-medium tap-target touch-manipulation ${
                    isActive('/products') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </motion.div>
              
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link
                  to="/about"
                  className={`block px-3 py-3 rounded-md text-base font-medium tap-target touch-manipulation ${
                    isActive('/about') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link
                  to="/contact"
                  className={`block px-3 py-3 rounded-md text-base font-medium tap-target touch-manipulation ${
                    isActive('/contact') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              
              <div className="border-t border-white/20 dark:border-white/10 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">External Products</div>
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <motion.a
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-md tap-target touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{product.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;