import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const testimonials = [
  {
    name: "医療法人社団 栗林歯科医院 様",
    text: "事務局業務がNotion上で可視化され、誰でも業務を引き継げるように。ガバナンスも強化されました。"
  },
  {
    name: "新美歯科 様",
    text: "紙管理だった在庫や申請業務をデジタル化。DXによる業務効率化を実感しています。"
  },
  {
    name: "若林歯科医院 様",
    text: "一般スタッフも積極的に活用し、自律的な情報共有文化が醸成されました。"
  }
];

export const Cases: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
             <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Case Study</p>
             <h2 className="text-3xl font-bold text-navy-900">経営が変わったクリニックの声</h2>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {testimonials.map((item, i) => (
             <FadeIn key={i} delay={i * 100}>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
                   <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Quote className="w-12 h-12 text-blue-600" />
                   </div>
                   <div className="mb-6 text-navy-900 font-bold text-lg border-b border-gray-200 pb-4 relative z-10">
                      {item.name}
                   </div>
                   <p className="text-gray-600 text-sm leading-loose flex-grow relative z-10">
                      {item.text}
                   </p>
                </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  )
}
