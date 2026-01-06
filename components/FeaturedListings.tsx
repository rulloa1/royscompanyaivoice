import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ModelsSection: React.FC = () => {
  return (
    <section id="models" className="py-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">The Collection</span>
                    <h2 className="text-4xl md:text-5xl tracking-tight">Curated Models</h2>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gold transition-colors">
                    View All Specs <ArrowUpRight width={16} strokeWidth={1.5} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                
                {/* Card 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                            alt="Model 40" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-[#121212]/90 backdrop-blur px-3 py-1">
                            <span className="text-gold text-xs tracking-wider">BESTSELLER</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-gold transition-colors duration-500">
                        <h3 className="text-2xl font-normal tracking-tight">Model 40 <span className="text-[#666] text-lg font-serif italic ml-2">The Studio</span></h3>
                        <span className="text-sm font-light tracking-wide">40m²</span>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#666]">
                        <span>1 Bedroom / 1 Bath</span>
                        <span>From €85,000</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer md:mt-12">
                    <div className="overflow-hidden rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6">
                        <img 
                            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop" 
                            alt="Model 75" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-gold transition-colors duration-500">
                        <h3 className="text-2xl font-normal tracking-tight">Model 75 <span className="text-[#666] text-lg font-serif italic ml-2">The Loft</span></h3>
                        <span className="text-sm font-light tracking-wide">75m²</span>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#666]">
                        <span>2 Bedroom / 1.5 Bath</span>
                        <span>From €145,000</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6">
                        <img 
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                            alt="Model 110" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-gold transition-colors duration-500">
                        <h3 className="text-2xl font-normal tracking-tight">Model 110 <span className="text-[#666] text-lg font-serif italic ml-2">The Villa</span></h3>
                        <span className="text-sm font-light tracking-wide">110m²</span>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#666]">
                        <span>3 Bedroom / 2 Bath</span>
                        <span>From €210,000</span>
                    </div>
                </div>

                {/* Card 4 (Custom) */}
                <div className="group cursor-pointer md:mt-12">
                    <div className="overflow-hidden rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2100&auto=format&fit=crop" 
                            alt="Bespoke" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[#121212]/40 flex items-center justify-center">
                            <span className="border border-[#F2F2F2] px-6 py-2 text-xs uppercase tracking-widest text-[#F2F2F2]">Consultation Only</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-gold transition-colors duration-500">
                        <h3 className="text-2xl font-normal tracking-tight">Bespoke <span className="text-[#666] text-lg font-serif italic ml-2">Custom Build</span></h3>
                        <span className="text-sm font-light tracking-wide">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#666]">
                        <span>Architectural Service</span>
                        <span>Inquire for Price</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default ModelsSection;