import React from 'react';
import { Check, Layout, Users, FileText, Shield, Smartphone, Calendar, FileSignature, MousePointerClick } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const FeatureCard = ({ icon: Icon, title, dark = false }: { icon: any, title: string, dark?: boolean }) => (
  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
    dark 
      ? 'bg-navy-800 border-navy-700 text-white hover:bg-navy-700 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]' 
      : 'bg-white border-gray-100 text-navy-900 hover:border-blue-100 hover:shadow-[0_8px_20px_rgba(59,130,246,0.1)]'
  }`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
      dark ? 'bg-navy-900 text-blue-400' : 'bg-blue-50 text-blue-600'
    }`}>
      <Icon className="w-5 h-5" />
    </div>
    <span className="font-bold text-sm md:text-base leading-tight">{title}</span>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="bg-gray-50 overflow-hidden">
      
      <div className="py-24 container mx-auto px-4 text-center max-w-5xl">
        <FadeIn>
          <div className="relative inline-block mb-8">
            <span className="text-blue-600 font-bold tracking-widest text-xl md:text-3xl block relative z-10">
              ナレッジメントが選ばれている理由
            </span>
            {/* Handwritten Underline SVG */}
            <svg 
              className="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-yellow-300/80 -z-10 transform -rotate-1" 
              viewBox="0 0 200 9" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none"
            >
              <path d="M2.00026 6.99997C52.9476 2.66663 134.453 -2.75003 198.001 4.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-12 md:whitespace-nowrap">
            貴院だけの「デジタル本院」を構築
          </h2>

          {/* Concept Box */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-blue-100 rounded-2xl p-8 md:p-12 shadow-xl">
              {/* 
                 Updated: 
                 - Added 'leading-loose' to prevent yellow highlight overlapping the text above.
                 - Added 'whitespace-nowrap inline-block' to the span to prevent "ru" from hanging on a new line.
              */}
              <p className="text-xl md:text-3xl text-navy-900 leading-loose font-medium">
                Notionを活用し、<br />
                <span className="bg-yellow-100 px-2 py-1 rounded inline-block whitespace-nowrap">院長の思考を「仕組み」に変える</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-black text-3xl md:text-5xl mt-4 inline-block tracking-tight">
                  3つの武器（三層構造）
                </span>
                を提供します。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Layer 1: Common Portal (Updated Background) */}
      <div className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }}></div>
        
        {/* Giant Number Background */}
        <div className="absolute top-10 right-0 md:right-[10%] text-[12rem] md:text-[20rem] font-black text-slate-200 leading-none select-none pointer-events-none -z-10 tracking-tighter opacity-60">
          01
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <FadeIn direction="right" className="w-full lg:w-1/2 order-2 lg:order-1">
               <div className="relative group">
                 <div className="absolute -inset-4 bg-blue-200/50 rounded-[2.5rem] -rotate-2 blur-sm transition-all group-hover:rotate-0 group-hover:bg-blue-300/50"></div>
                 <img 
                   src="/image/demo-common.png" 
                   alt="共通ポータル画面デモ" 
                   className="relative w-full rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-500 group-hover:scale-[1.02]"
                 />
               </div>
            </FadeIn>
            
            <FadeIn direction="left" className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-bold tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                STRATEGY HUB
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-navy-900 mb-2 tracking-tight">
                共通ポータル
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-8 tracking-wide">
                全員が見る「戦略拠点」
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                理念浸透と情報アクセスのハブとなるポータルサイトを構築。
                新人からベテランまで、院内の全情報へここから迷わずアクセスできます。
              </p>
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={FileText} title="マニュアル一元管理" />
                <FeatureCard icon={Layout} title="院内お知らせ掲示板" />
                <FeatureCard icon={Users} title="スタッフ名簿・連絡先" />
                <FeatureCard icon={Shield} title="権限管理された安全な共有" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Layer 2: Management (Dark Mode) */}
      <div className="py-20 md:py-32 bg-navy-900 text-white relative overflow-hidden">
        {/* Giant Number Background */}
        <div className="absolute top-10 left-0 md:left-[5%] text-[12rem] md:text-[20rem] font-black text-white/5 leading-none select-none pointer-events-none -z-10 tracking-tighter">
          02
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <FadeIn direction="right" className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-blue-400 text-sm font-bold tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                MANAGEMENT
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                部署ポータル
              </h3>
              <p className="text-xl font-bold text-blue-300 mb-8 tracking-wide">
                経営管理の「司令塔」
              </p>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                院長と幹部だけがアクセスできる秘密の作戦室。
                幹部ミーティングの議事録やTODOを管理し、意思決定のスピードを劇的に上げます。
              </p>

              {/* Feature Cards Grid (Dark Mode) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={Users} title="採用管理・面接ログ" dark />
                <FeatureCard icon={FileSignature} title="稟議申請・面談記録" dark />
                <FeatureCard icon={FileText} title="議事録・インシデント報告" dark />
                <FeatureCard icon={Shield} title="役職者限定アクセス" dark />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="w-full lg:w-1/2">
               <div className="relative group">
                 <div className="absolute -inset-4 bg-navy-800 rounded-[2.5rem] rotate-2 opacity-50 transition-all group-hover:rotate-0"></div>
                 <img 
                   src="/image/demo-dept.png" 
                   alt="部署ポータル画面デモ" 
                   className="relative w-full rounded-2xl shadow-2xl border border-navy-700 transition-transform duration-500 group-hover:scale-[1.02]"
                 />
               </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Layer 3: Personal Page (Updated Background) */}
      <div className="py-20 md:py-32 bg-[#fff7ed] relative overflow-hidden">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fdba74 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.3 }}></div>

        {/* Giant Number Background */}
        <div className="absolute top-10 right-0 md:right-[10%] text-[12rem] md:text-[20rem] font-black text-orange-100 leading-none select-none pointer-events-none -z-10 tracking-tighter opacity-80">
          03
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <FadeIn direction="right" className="w-full lg:w-1/2 order-2 lg:order-1">
               <div className="relative group">
                 <div className="absolute -inset-4 bg-orange-200/50 rounded-[3rem] -rotate-2 blur-sm transition-all group-hover:rotate-0"></div>
                 <img 
                   src="/image/demo-mobile.png" 
                   alt="個人ポータルスマホ画面デモ" 
                   className="relative w-full max-w-lg mx-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                 />
               </div>
            </FadeIn>
            
            <FadeIn direction="left" className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-bold tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                PERSONAL
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-navy-900 mb-2 tracking-tight">
                個人ポータル
              </h3>
              <p className="text-xl font-bold text-orange-500 mb-8 tracking-wide">
                スタッフ個人の専用ポータル
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                スタッフ一人ひとりに専用のダッシュボードを提供。
                「今日やるべきこと」が明確になり、自律的な動きを促します。
              </p>
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={Smartphone} title="スマホで完結Myタスク" />
                <FeatureCard icon={Calendar} title="有給・交通費申請" />
                <FeatureCard icon={Check} title="研修進捗管理" />
                <FeatureCard icon={MousePointerClick} title="誰でも簡単に操作できる設計" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

    </section>
  );
};
