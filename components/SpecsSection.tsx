import React from 'react';
import { Maximize, Layers, Cpu } from 'lucide-react';

const SpecsSection: React.FC = () => {
  return (
    <section id="specs" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#333] pt-12">
                <div className="space-y-4">
                    <Maximize className="text-gold" width={28} strokeWidth={1.5} />
                    <h4 className="text-xl font-serif">Floor-to-Ceiling Glass</h4>
                    <p className="text-sm text-[#666] leading-relaxed">Triple-glazed, argon-filled safety glass maximizing natural light while ensuring thermal efficiency.</p>
                </div>
                <div className="space-y-4">
                    <Layers className="text-gold" width={28} strokeWidth={1.5} />
                    <h4 className="text-xl font-serif">Acoustic Isolation</h4>
                    <p className="text-sm text-[#666] leading-relaxed">Multi-layer wall composition providing studio-grade soundproofing for absolute serenity.</p>
                </div>
                <div className="space-y-4">
                    <Cpu className="text-gold" width={28} strokeWidth={1.5} />
                    <h4 className="text-xl font-serif">Smart Integration</h4>
                    <p className="text-sm text-[#666] leading-relaxed">Pre-wired for total home automation. Control lighting, climate, and security from one interface.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SpecsSection;