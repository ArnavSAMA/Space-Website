import React from 'react';
import Vid from "@/components/images/JapanAsla.mp4";

function Hero() {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={Vid} type="video/mp4" />
      </video>

      {/* 2. Gradient Overlay (Darkens the bottom and left for readability) */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Layer A: The Solid Gray Tint */}
        <div className="absolute inset-0 bg-gray-900/30" />

        {/* Layer B: The Gradient + Blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent backdrop-blur-[1px]" />
      </div>

      {/* 3. Content Container (Constrained and Left-Aligned) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-12 lg:px-24">
        <div className="mt-20">
          {/* Metadata Row */}
          <div className="flex w-full items-end justify-between mt-40">
  
            {/* LEFT GROUP: Branding & Mission */}
            <div className="flex items-end gap-8">
              <div className="flex flex-col gap-4 text-white/40">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Est. 2024</span>
                <div className="h-px w-12 bg-white/20" />
                <p className="text-[12px] uppercase tracking-widest leading-relaxed">
                  Empowering Tomorrow's<br/>Tech Landscape.
                </p>
              </div>

              {/* GENESIS GROUP sits next to the paragraph, aligned to the bottom */}
              <h2 className="text-amber-400 text-2xl font-medium tracking-[0.3em] ">
                GENESIS GROUP
              </h2>
            </div>

            {/* RIGHT GROUP: Coordinates */}
            <div className="flex flex-col text-right">
              <h1 className="text-amber-400 text-xl  tracking-wider">
                35°41'22"N 139°41'30"E
              </h1>
              <p className="text-[12px] uppercase tracking-widest text-white/40">
                Tokyo, Japan · Headquarters
              </p>
            </div>
            
          </div>
          

          {/* Thin Horizontal Line across the section */}
          <div className="w-full h-px bg-white/40 mt-10 mb-20" />

          <div className='ml-14'>
            {/* Main Japanese Headline */}
            <h1 className="font-['Montserrat'] text-6xl md:text-8xl font-bold leading-[1.1] text-amber-400">
              未来の希望を、<br/>
              実装しよう。
            </h1>
            
            {/* English Sub-headline */}
            <p className="mt-8 text-xl md:text-2xl font-light tracking-wide text-white/70 max-w-[600px]">
              Bridging Innovation: From Japan to the World.
            </p>

            {/* CTA Button */}
            <div className="mt-12 ml-4">
              <button className="flex items-center cursor-pointer gap-3 rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-zinc-950 transition-all hover:bg-amber-300 hover:scale-105 active:scale-95">
                Visit Edify
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
         <div className="animate-bounce text-amber-400/50">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
               <path d="M19 9l-7 7-7-7" />
            </svg>
         </div>
      </div>
    </div>
  );
}

export default Hero;