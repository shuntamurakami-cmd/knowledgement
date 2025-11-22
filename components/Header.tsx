import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center flex-shrink-1 min-w-0 mr-2">
          <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-wider text-white drop-shadow-md truncate">
            ナレッジメント
          </span>
        </div>
        
        {/* CTA Button Area */}
        <div className="flex items-center flex-shrink-0">
          <Button 
            variant="primary"
            className="px-4 py-2 text-xs sm:text-sm md:px-8 md:py-2.5 font-bold rounded-full shadow-lg shadow-red-500/30 whitespace-nowrap"
            showArrow={true}
            onClick={scrollToForm}
          >
            無料相談・デモ
          </Button>
        </div>
      </div>
    </header>
  );
};