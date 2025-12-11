import React from 'react';
import { Check, Lightbulb } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const Pricing: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <FadeIn direction="up">
            <div className="bg-white text-navy-900 rounded-3xl shadow-2xl overflow-hidden mb-12">
              <div className="p-8 md:p-12 text-center border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">初期構築 ＋ 年間コンサルティング</h2>
                <div className="flex items-baseline justify-center gap-2 mt-6">
                  <span className="text-5xl md:text-6xl font-black tracking-tight text-navy-900">120</span>
                  <span className="text-2xl font-bold text-gray-600">万円</span>
                  <span className="text-sm text-gray-500">（税抜）</span>
                </div>
                <p className="mt-4 text-gray-500 text-sm">※2年目以降：月額5万円（運用サポート・保守）</p>
              </div>
              
              <div className="p-6 md:p-10 bg-gradient-to-br from-yellow-50 to-orange-50 border-t border-orange-100">
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-800 mb-2">経営視点でのご提案</h4>
                    <p className="text-gray-800 leading-relaxed font-medium">
                      月額換算<span className="text-brand-red font-bold text-lg mx-1">10万円</span>は、アルバイトスタッフ1名の採用コストよりも安価です。<br className="hidden md:block" />
                      <span className="bg-yellow-200/50 px-1">「辞めない、文句を言わない、24時間働く最強の事務局長」</span>を1名雇う投資とお考えください。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 flex flex-col items-center gap-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm w-full max-w-2xl">
                      <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> 専用Notion環境構築</li>
                      <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> スタッフ向け導入研修</li>
                      <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> 運用マニュアル作成</li>
                      <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> 月次定例ミーティング</li>
                  </ul>
                  
                  <Button variant="primary" onClick={scrollToForm} showArrow className="w-full md:w-auto text-lg px-12 py-4 shadow-xl hover:shadow-2xl">
                    まずは無料相談する
                  </Button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
