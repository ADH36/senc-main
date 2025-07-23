import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const products = [
    { name: 'SENC Esports', url: 'https://sencesports.com', description: 'Gaming & Esports Platform' },
    { name: 'SENC AI', url: 'https://ai.senc.in', description: 'Artificial Intelligence Solutions' },
    { name: 'SENC Creatives', url: '#', description: 'Creative Design Services' },
    { name: 'XenPe', url: 'https://xenpe.com', description: 'Payment Solutions' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-blue-900">SENC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/products') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
                }`}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                >
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.url}
                      target={product.url.startsWith('http') ? '_blank' : '_self'}
                      rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-cyan-400 transition-colors"
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.description}</div>
                    </a>
                  ))}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-blue-50 transition-colors"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/products') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400 bg-blue-50' : 'text-gray-700 hover:text-cyan-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400