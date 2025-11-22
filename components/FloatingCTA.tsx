import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormInView, setIsFormInView] = useState(false);

  // Scroll monitoring to hide on Hero section
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px (approx. height of Hero section)
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to hide when Contact Form is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFormInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the target is visible
    );

    const target = document.getElementById('contact-form');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Show only if scrolled past Hero AND Form is NOT yet visible
  const isVisible = isScrolled && !isFormInView;

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={scrollToForm} 
        className="group relative flex items-center justify-center w-32 h-32 md:w-[200px] md:h-[200px] bg-gradient-to-br from-[#ef4444] to-[#ff6b6b] rounded-full shadow-2xl border-2 md:border-2 border-white transition-transform duration-300 hover:scale-105 hover:shadow-red-500/50"
        aria-label="無料相談・デモ"
      >
        {/* Arrow Icon (Top Right) */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 text-white/80" strokeWidth={3} />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center gap-1 md:gap-3 mt-1 md:mt-0">
            <Mail className="w-6 h-6 md:w-10 md:h-10 text-white fill-white/20" />
            <span className="text-xs md:text-xl font-bold text-white leading-tight text-center drop-shadow-md tracking-widest">
                無料相談<br/>デモ体験
            </span>
        </div>
      </button>
    </div>
  );
};