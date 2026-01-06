import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-end justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Cinematic Modular House" 
                className="w-full h-full object-cover opacity-80"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
            <div className="max-w-3xl">
                <span className="block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">German Engineering</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight font-normal text-[#F2F2F2]">
                    Living, <br />
                    <span className="italic text-gold font-light">Refined.</span>
                </h1>
                <p className="text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10 text-[#B0B0B0]">
                    Immersive matte black architecture designed for the discerning individual. Minimalist luxury meets sustainable modular precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <a href="#models" className="btn-gold text-[#121212] font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-[2px] inline-flex items-center gap-2">
                        View Collection
                        <ArrowRight width={16} strokeWidth={1.5} />
                    </a>
                    <button className="text-[#F2F2F2] flex items-center gap-3 group hover:text-gold transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold">
                            <Play width={14} className="ml-0.5" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs tracking-widest uppercase">Watch Film</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Hero;