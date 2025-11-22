import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020410] text-white py-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           
           {/* Left: Logo & Company Info */}
           <div className="text-center md:text-left">
              <div className="text-2xl font-black tracking-widest mb-2">ナレッジメント</div>
              <div className="text-xs text-gray-500 leading-relaxed flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <span className="font-bold text-gray-400">株式会社Tenyi</span>
                <span className="hidden md:inline text-gray-800">|</span>
                <span>〒103-0022 東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階</span>
              </div>
           </div>

           {/* Right: Link Button */}
           <div className="flex-shrink-0">
              <a 
                href="https://tenyi.co.jp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white hover:text-navy-900 border border-white/10 transition-all duration-300 text-sm font-bold group"
              >
                コーポレートサイト 
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
           </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center text-[10px] text-gray-700">
           &copy; {new Date().getFullYear()} Tenyi. All rights reserved.
        </div>

      </div>
    </footer>
  );
};