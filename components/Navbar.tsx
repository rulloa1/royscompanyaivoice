import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-[#F2F2F2] font-serif text-xl tracking-tighter hover:text-gold transition-colors duration-300">
                MODULHOUSE
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-12">
                <a href="#philosophy" className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300">PHILOSOPHY</a>
                <a href="#models" className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300">MODELS</a>
                <a href="#specs" className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300">SPECS</a>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
                <a href="#contact" className="btn-gold text-[#121212] font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-[2px]">
                    Inquire
                </a>
            </div>

            {/* Mobile Menu Icon */}
            <button 
                className="md:hidden text-[#F2F2F2]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X width={24} strokeWidth={1.5} /> : <Menu width={24} strokeWidth={1.5} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-[#121212] border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl z-50">
                <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-textLight hover:text-gold">Philosophy</a>
                <a href="#models" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-textLight hover:text-gold">Models</a>
                <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-textLight hover:text-gold">Specs</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold text-[#121212] font-semibold text-center py-3 rounded-[2px] mt-4">
                    Inquire Now
                </a>
            </div>
        )}
    </nav>
  );
};

export default Navbar;