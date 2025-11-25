import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { MessageCircle, Settings, Users, TrendingUp, ChevronDown, ArrowRight, CheckCircle, Mail, Loader2 } from 'lucide-react';

const steps = [
  {
    step: "01",
    tag: "HEARING",
    tagLabel: "ヒアリング",
    title: "無料相談・現状分析",
    description: "まずは貴院の現状や課題をお聞かせください。オンラインにて30分〜60分程度、専用のデモ画面をお見せしながら、貴院に最適なNotion活用イメージをご提案します。",
    icon: MessageCircle,
  },
  {
    step: "02",
    tag: "KICKOFF",
    tagLabel: "キックオフ",
    title: "キックオフミーティング",
    description: "キックオフでは、専用のフレームワークを通じて、医院の情報をすべて整理させていただきます。整理した内容を元に、構築の手順や完成系のイメージをご共有させていただきます。",
    icon: Users,
  },
  {
    step: "03",
    tag: "SETUP",
    tagLabel: "セットアップ",
    title: "ポータル構築期間",
    description: "お打ち合わせで決定した機能を順次構築していきます。同時にNotionの操作方法や、データの移行について丁寧にレクチャーをさせていただきます。デジタルが苦手な方でも安心です。",
    icon: Settings,
  },
  {
    step: "04",
    tag: "SUPPORT",
    tagLabel: "サポート",
    title: "運用定着・伴走支援",
    description: "導入して終わりではありません。月次定例ミーティングにて活用状況を分析し、ページの改善や新機能の追加を実施。組織の成長に合わせてシステムも進化させ続けます。",
    icon: TrendingUp,
  }
];

export const Process: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Formspree Endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqajlwez";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // GTM Event Push
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'lp_contact_form_sent'
        });
        
        setIsSubmitted(true);
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      alert("エラーが発生しました。ネットワーク接続をご確認ください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-navy-900 tracking-wide relative z-10 leading-tight">
                導入の流れ
              </h2>
              <svg 
                className="absolute -bottom-3 left-0 w-full h-3 md:h-4 text-yellow-300/80 -z-10 transform -rotate-1" 
                viewBox="0 0 200 9" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="none"
              >
                <path d="M2.00026 6.99997C52.9476 2.66663 134.453 -2.75003 198.001 4.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Vertical Line - Connected all the way down */}
          <div className="absolute left-[2.25rem] md:left-[3rem] top-8 bottom-0 w-1 bg-gray-300"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((item, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="relative flex gap-6 md:gap-12 items-start group">
                  
                  {/* Left Column: Number & Icon */}
                  <div className="flex flex-col items-center relative z-10 flex-shrink-0 w-20 md:w-24 bg-gray-100 py-2">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 relative z-20">
                       <span className="text-2xl md:text-4xl font-black text-blue-600">{item.step}</span>
                    </div>
                  </div>

                  {/* Right Column: Content Card */}
                  <div className="flex-1 pt-2">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-2 border-gray-200 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden">
                      
                      <div className="flex items-center justify-center md:justify-between mb-6 border-b border-gray-100 pb-4">
                         <div className="flex items-center gap-3">
                            <div className="px-4 py-1 bg-blue-600 text-white text-xs md:text-sm font-bold tracking-widest rounded-full uppercase shadow-sm">
                              {item.tag}
                            </div>
                            <span className="text-sm font-bold text-gray-500 hidden md:inline-block">
                              {item.tagLabel}
                            </span>
                         </div>
                         <div className="hidden md:flex w-10 h-10 bg-gray-50 rounded-xl items-center justify-center text-gray-400">
                           <item.icon className="w-5 h-5" />
                         </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-tight text-center md:text-left">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium text-left">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Connection to Form */}
          <div className="relative z-10 pl-[2.25rem] md:pl-[3rem]">
             <div className="ml-6 md:ml-12 pt-12 pb-8">
                <div className="flex items-center gap-4 text-gray-400 font-bold tracking-widest">
                   <div className="h-px flex-1 bg-gray-300"></div>
                   <div className="flex flex-col items-center">
                      <span className="text-sm mb-2">NEXT STEP</span>
                      <ChevronDown className="w-6 h-6 animate-bounce text-blue-600" />
                   </div>
                   <div className="h-px flex-1 bg-gray-300"></div>
                </div>
             </div>
          </div>

        </div>

        {/* Contact Form Section */}
        <FadeIn delay={200}>
           <div id="contact-form" className="relative z-20 max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-2 border-blue-100 overflow-hidden mt-0">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                   まずは無料相談から
                 </h3>
                 <p className="text-blue-100 font-bold">お気軽にお問い合わせください</p>
              </div>
              
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  /* Thank You View */
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                      お問い合わせ完了
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto mb-10">
                      お問い合わせいただきありがとうございます。<br />
                      担当者より2〜3営業日以内に、ご入力いただいたメールアドレスへご連絡いたします。
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 rounded-full bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors"
                    >
                      フォームに戻る
                    </button>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Clinic Name */}
                      <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          医院名 <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text"
                          name="company"
                          required
                          placeholder="例: デモ歯科クリニック"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>

                      {/* Name */}
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text"
                          name="name" 
                          required
                          placeholder="例: 山田 太郎"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>

                      {/* Job Title */}
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          職種
                        </label>
                        <input 
                          type="text" 
                          name="role"
                          placeholder="例: 院長"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="例: yamada@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        電話番号 <span className="text-xs font-normal text-gray-500 ml-1">※(-)ハイフン不要</span> <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        name="tel" 
                        required
                        placeholder="例: 08012345678"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        ご質問・ご要望
                      </label>
                      <textarea 
                        name="message"
                        rows={4}
                        placeholder="解決したい課題について、補足説明があれば自由にご記入ください。"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-y"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" /> 送信中...
                          </>
                        ) : (
                          <>
                            送信する <ArrowRight className="w-6 h-6" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
           </div>

           {/* Contact Email Info */}
           <div className="mt-12 text-center pb-8">
             <p className="text-gray-500 text-sm mb-2 font-bold">メールでのお問い合わせはこちら</p>
             <a 
               href="mailto:corporate@tenyi.co.jp" 
               className="inline-flex items-center gap-2 text-navy-900 font-black text-xl hover:underline transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200"
             >
               <Mail className="w-5 h-5 text-blue-600" /> corporate@tenyi.co.jp
             </a>
           </div>
        </FadeIn>

      </div>
    </section>
  );
};
