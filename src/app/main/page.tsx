'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A2540] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/98 backdrop-blur-md border-b border-[#1ABC9C]/30">
        <div className="px-8 py-5">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="text-xl font-light tracking-wider">
              <span className="text-[#1ABC9C]">Conscience Labs</span>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-10">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-[#1ABC9C] transition-colors font-medium">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0d3a5f] rounded-lg shadow-lg border border-[#1ABC9C]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-3">
                    <a href="#products" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                      Domain-Specific Data
                    </a>
                    <a href="#products" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                      Custom Model Training
                    </a>
                    <a href="#products" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                      End-to-End Pipeline
                    </a>
                    <a href="#products" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                      Private Deployments
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-[#1ABC9C] transition-colors font-medium">
                  Contact
                </button>
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#0d3a5f] rounded-lg shadow-lg border border-[#1ABC9C]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-4">
                    <a 
                      href="https://calendly.com/1001aditya-g/new-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 bg-[#1ABC9C] text-white rounded-lg hover:bg-[#16a085] transition-colors text-center font-medium"
                    >
                      Schedule a Meet
                    </a>
                    <div className="space-y-2 text-sm">
                      <a href="mailto:consciencelabs@gmail.com" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                        📧 consciencelabs@gmail.com
                      </a>
                      <a href="tel:+918329237217" className="block text-gray-300 hover:text-[#1ABC9C] transition-colors">
                        📞 +91 8329237217
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0d3a5f] to-[#0A2540]" />
          
          {/* Animated mesh gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(26, 188, 156, 0.15), transparent 50%)`,
            }}
          />
          
          {/* Network nodes */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#1ABC9C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm tracking-widest text-gray-400 mb-4"
            style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
          >
            Data, Models and Deployments
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
            style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
          >
            Secure Intelligence for Tomorrow&apos;s Industries
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Get specialised data for frontier model acceleration and adapt best in class foundation models to your business and your specific data — building sustainable, secure, and high-performance AI systems tailored to your enterprise.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://calendly.com/1001aditya-g/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#1ABC9C] text-white text-lg font-medium rounded-lg hover:bg-[#16a085] transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,188,156,0.6)] hover:scale-105"
            >
              Schedule a Meet
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - What We Do */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0A2540] to-[#0d3a5f]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Intelligence. Security. Adaptability.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conscience empowers enterprises and governments to harness the power of AI safely and effectively.
              We deliver high-quality, domain-specific data and secure infrastructure that allows organizations to adapt and deploy foundation models with precision and privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Our Products */}
      <section id="products" className="relative py-24 px-6 bg-[#0d3a5f]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center mb-16"
          >
            The Conscience Data & Model Engine
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Domain-Specific Data',
                description: 'Curated datasets for physical AI, sciences, automotive, chemical, and medical domains — built by experts, not crowdworkers.',
              },
              {
                title: 'Custom Model Training',
                description: 'Fine-tune foundation models on your proprietary enterprise data for accurate, context-aware intelligence.',
              },
              {
                title: 'End-to-End Pipeline',
                description: 'From model training to deployment — complete setup integrated securely with your company\'s infrastructure.',
              },
              {
                title: 'Private Deployments',
                description: 'Run and serve AI models within your own clusters, ensuring data sovereignty and compliance for government and critical institutions.',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-[#0A2540] rounded-lg border border-[#1ABC9C]/20 hover:border-[#1ABC9C]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,188,156,0.2)]"
              >
                <h3 className="text-2xl font-medium mb-4 text-[#1ABC9C]">
                  {product.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Why Conscience */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0d3a5f] to-[#0A2540]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Secure Foundations for the Next Decade of AI.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re advancing autonomous systems, clinical intelligence, or scientific discovery — Conscience provides the privacy, precision, and infrastructure backbone your models need to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-[#0A2540] border-t border-[#1ABC9C]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#1ABC9C] mb-4">Contact</h3>
              <p className="text-gray-300">
                <a href="mailto:consciencelabs@gmail.com" className="hover:text-[#1ABC9C] transition-colors">
                  consciencelabs@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+918329237217" className="hover:text-[#1ABC9C] transition-colors">
                  +91 8329237217
                </a>
              </p>
            </div>

            {/* About */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#1ABC9C] mb-4">About</h3>
              <p className="text-gray-300">
                <a href="https://theconscience.co/" className="hover:text-[#1ABC9C] transition-colors">
                  About Us
                </a>
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#1ABC9C] mb-4">Get Started</h3>
              <a
                href="https://calendly.com/1001aditya-g/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#1ABC9C] text-white font-medium rounded-lg hover:bg-[#16a085] transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,188,156,0.5)]"
              >
                Schedule a Meet
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-[#1ABC9C]/20 text-center space-y-2">
            <p className="text-gray-400">© 2025 Conscience Labs</p>
            <p className="text-sm text-gray-500">Secure Intelligence Infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
