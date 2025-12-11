import React from 'react';
import { Activity, Database, BookOpen, ChevronDown } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const ProblemArrow = () => (
  <div className="flex justify-center py-4 relative z-10">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
      <ChevronDown className="w-5 h-5 text-blue-500 animate-bounce" />
    </div>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <FadeIn>
            <div className="relative inline-block mb-6">
              <span className="text-blue-600 font-bold tracking-widest text-xl md:text-3xl block uppercase relative z-10">
                こんな悩みはありませんか？
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
            
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-0 leading-tight tracking-wide">
              ナレッジメントなら医院の情報管理に関する<br className="hidden md:block" />
              お悩みをすべて解決
            </h2>
          </FadeIn>
        </div>

        {/* 3 Columns Layout: Problem -> Solution */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Column 1 */}
          <FadeIn delay={100} className="flex flex-col h-full">
            {/* Problem Box */}
            <div className="relative bg-gray-100/80 rounded-2xl px-6 py-10 md:p-10 text-center border-2 border-dashed border-gray-300 min-h-[260px] flex flex-col items-center justify-center group transition-colors hover:bg-gray-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white px-6 py-1.5 rounded-full text-base font-bold tracking-widest shadow-sm whitespace-nowrap">
                お悩み 01
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
                「あの書類どこ？」<br/>が消えない
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                最新マニュアルや議事録が見つからない。<br/>スタッフが常に探し物をしている。
              </p>
            </div>

            <ProblemArrow />

            {/* Solution Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-t-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex-grow text-center flex flex-col">
               <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Database className="w-8 h-8 text-blue-600" />
               </div>
               <h4 className="text-2xl font-bold text-navy-900 mb-4">ストック情報のポータル化</h4>
               <p className="text-gray-700 text-base leading-relaxed font-medium flex-grow">
                 経営理念や就労規則、医院内マニュアルなど、必要な情報を一元管理。誰でもすぐにアクセス可能に。
               </p>
            </div>
          </FadeIn>

          {/* Column 2 */}
          <FadeIn delay={200} className="flex flex-col h-full">
            {/* Problem Box */}
            <div className="relative bg-gray-100/80 rounded-2xl px-6 py-10 md:p-10 text-center border-2 border-dashed border-gray-300 min-h-[260px] flex flex-col items-center justify-center group transition-colors hover:bg-gray-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white px-6 py-1.5 rounded-full text-base font-bold tracking-widest shadow-sm whitespace-nowrap">
                お悩み 02
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
                院長が"司令塔"で<br/>手一杯
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                些細な質問、決裁、指示待ちで業務が中断。<br/>院長が現場から抜け出せない。
              </p>
            </div>

            <ProblemArrow />

            {/* Solution Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-t-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex-grow text-center flex flex-col">
               <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Activity className="w-8 h-8 text-blue-600" />
               </div>
               <h4 className="text-2xl font-bold text-navy-900 mb-4">意思決定のフロー化</h4>
               <p className="text-gray-700 text-base leading-relaxed font-medium flex-grow">
                 患者管理やカウンセリング管理で運営に関わる情報をデータ化することで、業務が劇的に効率化。さらに院長は、データを基に経営判断が可能に。
               </p>
            </div>
          </FadeIn>

          {/* Column 3 */}
          <FadeIn delay={300} className="flex flex-col h-full">
            {/* Problem Box */}
            <div className="relative bg-gray-100/80 rounded-2xl px-6 py-10 md:p-10 text-center border-2 border-dashed border-gray-300 min-h-[260px] flex flex-col items-center justify-center group transition-colors hover:bg-gray-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white px-6 py-1.5 rounded-full text-base font-bold tracking-widest shadow-sm whitespace-nowrap">
                お悩み 03
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
                ノウハウが<br/>属人化する
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                優秀なスタッフの知見が共有されず、<br/>新人教育に毎回同じ時間がかかる。
              </p>
            </div>

            <ProblemArrow />

            {/* Solution Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-t-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex-grow text-center flex flex-col">
               <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="w-8 h-8 text-blue-600" />
               </div>
               <h4 className="text-2xl font-bold text-navy-900 mb-4">教育の仕組み化</h4>
               <p className="text-gray-700 text-base leading-relaxed font-medium flex-grow">
                 院長や、ベテランスタッフに頼らずとも自分で学んで動ける環境を整備。言った言わない問題を解決します。
               </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
