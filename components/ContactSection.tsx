import React from 'react';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121212] relative overflow-hidden">
        {/* Subtle gold sheen background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1E1E1E] to-transparent opacity-50 z-0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Begin the Process</span>
                <h2 className="text-4xl md:text-5xl tracking-tight mb-4">Secure Your Allocation</h2>
                <p className="text-[#666] font-light">Limited production slots available for 2024 delivery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                {/* Form Column */}
                <div className="md:col-span-2">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-gold transition-colors">Full Name</label>
                                <input type="text" id="name" className="bg-transparent border-b border-[#555] focus:border-gold focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333]" placeholder="Enter your name" />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-gold transition-colors">Email Address</label>
                                <input type="email" id="email" className="bg-transparent border-b border-[#555] focus:border-gold focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333]" placeholder="name@company.com" />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="model" className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-gold transition-colors">Model Interest</label>
                            <div className="relative">
                                <select id="model" className="bg-transparent border-b border-[#555] focus:border-gold outline-none w-full py-2 text-[#F2F2F2] text-lg font-light appearance-none rounded-none cursor-pointer">
                                    <option className="bg-[#1E1E1E]">Model 40 - The Studio</option>
                                    <option className="bg-[#1E1E1E]">Model 75 - The Loft</option>
                                    <option className="bg-[#1E1E1E]">Model 110 - The Villa</option>
                                    <option className="bg-[#1E1E1E]">Bespoke Inquiry</option>
                                </select>
                                <div className="absolute right-0 top-3 pointer-events-none text-[#666]">
                                    <ChevronDown width={20} />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-gold transition-colors">Message</label>
                            <textarea id="message" rows={2} className="bg-transparent border-b border-[#555] focus:border-gold focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333] resize-none" placeholder="Tell us about your land location..."></textarea>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="btn-gold text-[#121212] font-semibold text-sm tracking-widest uppercase px-12 py-4 rounded-[2px] w-full">
                                Submit Inquiry
                            </button>
                        </div>
                        
                        <p className="text-center md:text-left text-xs text-[#444] mt-4">By submitting, you agree to our privacy policy.</p>
                    </form>
                </div>

                {/* Agent Column */}
                <div className="md:col-span-1 border-l border-[#333] pl-0 md:pl-10 flex flex-col justify-center">
                    <div className="bg-[#1E1E1E]/50 p-8 border border-white/5 rounded-[2px]">
                        <h4 className="text-[#F2F2F2] font-serif text-lg mb-4">Exclusive Agent</h4>
                        <p className="text-gold text-2xl font-serif italic mb-1">Jerry Brown</p>
                        <p className="text-[#666] text-xs uppercase tracking-widest mb-8">Realtor</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <MapPin className="text-[#444] group-hover:text-gold transition-colors mt-0.5" width={18} />
                                <span className="text-[#B0B0B0] text-sm font-light group-hover:text-white transition-colors">Spring, TX</span>
                            </div>
                            <a href="tel:7135402575" className="flex items-start gap-4 group">
                                <Phone className="text-[#444] group-hover:text-gold transition-colors mt-0.5" width={18} />
                                <span className="text-[#B0B0B0] text-sm font-light group-hover:text-white transition-colors">(713) 540-2575</span>
                            </a>
                            <a href="mailto:JerryBrownRealtor@gmail.com" className="flex items-start gap-4 group">
                                <Mail className="text-[#444] group-hover:text-gold transition-colors mt-0.5" width={18} />
                                <span className="text-[#B0B0B0] text-sm font-light group-hover:text-white transition-colors break-all">JerryBrownRealtor@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;