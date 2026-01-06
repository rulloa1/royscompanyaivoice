import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
                <a href="#" className="text-[#F2F2F2] font-serif text-2xl tracking-tighter hover:text-gold transition-colors duration-300">
                    MODULHOUSE
                </a>
                <p className="text-[#444] text-xs mt-2 font-light">
                    Spring, TX • Serving Greater Houston
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <a href="#" className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors">Instagram</a>
                <a href="#" className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors">LinkedIn</a>
                <a href="#" className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors">Imprint</a>
                <a href="#" className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors">Privacy</a>
            </div>

            <div className="text-[#333] text-xs">
                © 2024 ModulHouse Premium.
            </div>
        </div>
    </footer>
  );
};

export default Footer;