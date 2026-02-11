import React from 'react';
import Starry from "@/components/ui/Starry";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/images/logo.png"

export default function Contact() {
  const footerLinks = [
    {
      title: "COMPANY",
      links: ["Who are we?", "Governance", "The Team"],
    },
    {
      title: "COMMITMENT",
      links: ["Position notes", "Our Areas of intervention", "Newsroom"],
    },
    {
      title: "OUR MEMBERS",
      links: ["Our members", "Our associate members", "Join"],
    },
    {
      title: "FOLLOW US",
      links: ["LinkedIn", "X", "YouTube"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-10 px-6 lg:px-20 overflow-hidden flex flex-col">
      <Starry />

      {/* 1. CALL TO ACTION SECTION */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center mb-32">
        <span className="text-amber-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block font-['Montserrat']">
          Get In Touch
        </span>
        <button className="group cursor-pointer relative w-full py-5 px-6 rounded-[73px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-white text-4xl lg:text-6xl font-bold font-['Inter']">
              Ready to Innovate with us ?
            </h2>
            <ArrowUpRight className="text-white w-10 h-10 lg:w-14 lg:h-14 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>
      </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
       {/* 2. MAIN FOOTER LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/20 pt-16 justify-items-center">
        {footerLinks.map((section, idx) => (
            /* 1. Removed items-center and text-center 
            2. Added w-fit to ensure the column only takes the space it needs 
            */
            <div key={idx} className="flex flex-col gap-6 w-fit items-start text-left">
            <h4 className="text-white text-sm font-bold tracking-widest font-['Montserrat']">
                {section.title}
            </h4>
            {/* items-start keeps the bullets/links aligned to the left */}
            <ul className="flex flex-col gap-3 items-start">
                {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors font-['Inter']">
                    {link}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>

        {/* 3. CONTACT & LOGO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-12 border-t border-white/20 pt-16 items-start">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-start h-full">
            <div className="text-white text-5xl font-bold tracking-tighter italic">
               <img src={Logo} /> 
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h4 className="text-white text-lg font-bold font-['Montserrat']">CONTACT</h4>
                <a href="#" className="px-4 py-1.5 rounded-full bg-white/10 text-white/50 text-[10px] font-medium border border-white/5 hover:bg-white/20 transition-all inline-flex items-center gap-1">
                    Contact Us Page
                    <ArrowUpRight 
                        className="text-white" 
                        size={12} 
                        strokeWidth={1} // Makes the arrow very thin
                    />
                </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-white/40 text-xs uppercase font-['Inter']">Phone No.</p>
                <p className="text-white/60 text-sm font-['Inter']">email@genesis.org</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white/40 text-xs uppercase font-['Inter']">Address Line No.1</p>
                <p className="text-white/60 text-sm font-['Inter']">Pincode, Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-end gap-25">
          <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Legal Notice</a>
          <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Cookies</a>
          <p className="text-white/40 text-xs">Copyright Genesis 2026</p>
        </div>
      </div>
    </div>
  );
}