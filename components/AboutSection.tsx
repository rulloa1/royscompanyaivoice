import React from 'react';

const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                <div className="md:col-span-7">
                    <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight mb-8">
                        "Architecture is not just about shelter. It is about framing the <span className="text-gold italic">sublime</span> moments of life."
                    </h2>
                </div>
                <div className="md:col-span-5 md:pl-8 border-l border-[#333]">
                    <p className="text-base font-light leading-relaxed mb-6">
                        We strip away the non-essential to reveal the exceptional. ModulHouse combines German structural precision with the warmth of high-end interior design.
                    </p>
                    <div className="flex items-center gap-8 pt-4">
                        <div>
                            <span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">10y</span>
                            <span className="text-xs uppercase tracking-widest text-[#666]">Warranty</span>
                        </div>
                        <div>
                            <span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">A++</span>
                            <span className="text-xs uppercase tracking-widest text-[#666]">Energy</span>
                        </div>
                        <div>
                            <span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">12w</span>
                            <span className="text-xs uppercase tracking-widest text-[#666]">Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PhilosophySection;