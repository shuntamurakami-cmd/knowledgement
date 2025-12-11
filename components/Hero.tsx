import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { 
  Bell, 
  Search, 
  Menu, 
  ChevronDown, 
  Users, 
  Folder, 
  Home,
  BookOpen,
  Layout,
  Filter,
  FileText
} from 'lucide-react';

const NotionSidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-1.5 rounded cursor-pointer transition-colors ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'}`}>
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const NotionFileItem = ({ date, title }: { date: string, title: string }) => (
  <div className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0 group cursor-pointer hover:bg-gray-50 px-2 rounded transition-colors">
    <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-700 font-medium truncate group-hover:text-navy-900">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{date}</p>
    </div>
  </div>
);

const DashboardCard = ({ icon: Icon, color, label, subItems }: { icon: any, color: string, label: string, subItems: string[] }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-6 h-6 rounded flex items-center justify-center ${color === 'blue' ? 'bg-blue-100 text-blue-600' : color === 'red' ? 'bg-red-100 text-red-600' : color === 'yellow' ? 'bg-yellow-100 text-yellow-600' : 'bg-purple-100 text-purple-600'}`}>
        <Folder className="w-4 h-4 fill-current" />
      </div>
      <span className="font-bold text-gray-800">{label}</span>
    </div>
    <ul className="space-y-2">
      {subItems.map((item, i) => (
        <li key={i} className="text-xs text-gray-500 flex items-center gap-2 hover:text-navy-900 cursor-pointer">
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Notion Mobile Mockup Helper Components
const NotionMobileItem = ({ emoji, title }: { emoji: string, title: string }) => (
  <div className="flex items-center gap-2 py-2 cursor-pointer group">
    <span className="text-lg w-6 text-center flex-shrink-0 leading-none">{emoji}</span>
    <span className="text-gray-700 text-xs font-medium border-b border-gray-300 group-hover:text-black group-hover:border-gray-500 transition-colors leading-tight pb-0.5 truncate w-full">
      {title}
    </span>
  </div>
);

const NotionMobileSection = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-3 mb-3 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-2.5 h-2.5 bg-[#4ea7f5] rounded-sm flex-shrink-0"></div>
      <span className="font-bold text-gray-800 text-xs">{title}</span>
    </div>
    <div className="pl-1 space-y-0.5">
      {children}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#020410] pt-32 md:pt-40 pb-20 overflow-hidden flex flex-col items-center">
      
      {/* ---------------- Background Image ---------------- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Background Image: Digital Lock / Cyber Security Concept */}
        <img 
          src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Information Strategy" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100 blur-[1px] scale-105"
        />
        
        {/* Dark Overlay Gradient - Brightened significantly to show image details */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-[#020410]/80"></div>
        
        {/* Radial Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,16,0.6)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        
        {/* Text Content */}
        <div className="text-center w-full max-w-screen-2xl mx-auto mb-20 md:mb-24">
          <FadeIn delay={100}>
            
            {/* Headline Label - Increased size and padding */}
            <div className="flex justify-center mb-8 md:mb-10">
               <div className="inline-flex items-center gap-3 px-6 py-2 md:px-8 md:py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md shadow-lg">
                  <span className="text-xs md:text-base font-bold text-white tracking-widest shadow-black drop-shadow-sm">
                    歯科クリニック専用Notion構築・運用支援
                  </span>
               </div>
            </div>

            {/* H1 Title - Updated with Red Background */}
            <h1 className="font-black text-white leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]" style={{ fontFeatureSettings: '"palt"' }}>
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest">
                貴院専用の<br className="md:hidden"/>
                <span className="bg-[#ef4444] px-2 md:px-4 py-1 inline-block mx-1">歯科特化Notion</span>
                を<br className="md:hidden"/>構築いたします
              </span>
            </h1>
            
            {/* Annotation Removed */}
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-8 md:mt-12 text-lg md:text-3xl text-white font-bold tracking-[0.1em] leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
              情報管理と教育は、仕組で解決
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="pt-10 md:pt-14">
              <Button 
                variant="primary" 
                showArrow 
                className="px-10 py-4 text-lg md:px-16 md:py-6 md:text-2xl rounded-full shadow-[0_0_50px_rgba(239,68,68,0.6)] border-2 border-white/30 hover:scale-105 active:scale-95 font-black tracking-wider"
                onClick={scrollToForm}
              >
                Notion活用に興味がある
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Mockups Area */}
        <FadeIn delay={600} direction="up" className="relative max-w-6xl mx-auto mb-10">
          
          {/* PC Mockup */}
          <div className="relative z-10 bg-[#111111] rounded-2xl p-1.5 md:p-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-gray-700/50 backdrop-blur-sm ring-1 ring-white/10">
            {/* Camera dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-20 h-3 md:h-4 bg-black rounded-b-lg z-20 flex justify-center items-center">
               <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-800 rounded-full"></div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden flex h-[500px] sm:h-[600px] md:h-[700px]">
              
              {/* Sidebar (Black) */}
              <div className="w-72 bg-[#181818] text-white flex-col hidden md:flex border-r border-gray-800">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="font-bold text-lg tracking-tight">Notion</span>
                  </div>
                  <div className="text-xs font-bold tracking-widest text-gray-400 border-b border-gray-700 pb-4 mb-4">ナレッジメント</div>
                  
                  <div className="space-y-2">
                    <NotionSidebarItem icon={Home} label="H O M E" active />
                    <NotionSidebarItem icon={Layout} label="部署ポータル" />
                    <NotionSidebarItem icon={BookOpen} label="ナレッジ" />
                  </div>
                </div>
                <div className="mt-auto p-6 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs">T</div>
                     <div className="text-xs text-gray-400">Tenyi Dental Clinic</div>
                  </div>
                </div>
              </div>

              {/* Main Content (White) */}
              <div className="flex-1 bg-white overflow-y-auto relative">
                
                {/* Top Bar */}
                <div className="h-10 md:h-14 border-b flex items-center justify-between px-3 md:px-6 sticky top-0 bg-white/95 backdrop-blur z-20">
                  <div className="flex items-center gap-2 text-gray-800 font-bold text-sm md:text-lg">
                    <Bell className="w-4 h-4 md:w-5 md:h-5 text-red-500 fill-red-500" />
                    お知らせ
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 text-gray-400">
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded border border-green-100 hidden sm:inline-block">最終更新: 今日 10:23</span>
                    <div className="flex items-center gap-2">
                      <Filter className="w-3 h-3 md:w-4 md:h-4 hover:text-gray-600 cursor-pointer" />
                      <Search className="w-3 h-3 md:w-4 md:h-4 hover:text-gray-600 cursor-pointer" />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-[10px] md:text-xs px-3 py-1 md:px-4 md:py-1.5 rounded flex items-center gap-1 shadow-sm font-medium">
                      新規 <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="p-3 md:p-10 bg-[#fbfbfa]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Left Column: News */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-8">
                      {/* News List */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200/60">
                         <div className="flex items-center gap-2 mb-1 px-3 py-2 border-b border-gray-50">
                           <div className="p-1 bg-gray-100 rounded"><Menu className="w-3 h-3 text-gray-500" /></div>
                           <span className="text-xs font-bold text-gray-500">ビュー: 一覧</span>
                         </div>
                         <div className="p-1 space-y-0.5">
                            <NotionFileItem date="2025年9月18日" title="11月の有給休暇申請締め切り：9月30日(火)までです！" />
                            <NotionFileItem date="2025年9月18日" title="9月22日(月)13:00〜 ユニット点検が入ります" />
                            <NotionFileItem date="2025年9月18日" title="年間カレンダーを更新しました（10月以降のミーティングについて）" />
                            <NotionFileItem date="2025年9月18日" title="10月4日(土)臨時休診にします" />
                            <NotionFileItem date="2025年9月9日" title="10月24日(金)13:00〜 外部講師を招いた勉強会を実施します！" />
                            <NotionFileItem date="2025年9月9日" title="10月1日(水)GC製品説明会を実施します！" />
                         </div>
                      </div>

                      {/* Dashboard Grid - ALWAYS VISIBLE NOW */}
                      <div className="block">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-1">Quick Access</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <DashboardCard icon={Folder} color="blue" label="経営管理" subItems={['年間カレンダー', 'お知らせ', '組織図']} />
                          <DashboardCard icon={Users} color="red" label="組織/採用" subItems={['Welcome to Tenyi', '就業規則', '経営理念', '評価制度']} />
                          <DashboardCard icon={Users} color="yellow" label="患者管理" subItems={['技工物管理表', 'カウンセリングリスト', '矯正患者管理表', 'アポ数管理表']} />
                          <DashboardCard icon={BookOpen} color="purple" label="教育" subItems={['院内マニュアル', '勉強会・セミナー記録']} />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Birthday & Widget */}
                    <div className="hidden lg:block space-y-6">
                      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold">
                          <span className="text-2xl">🎂</span> 今月のお誕生日
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center border border-gray-100">
                           <span className="text-xs font-bold text-gray-500 tracking-wide">Happy Birthday!</span>
                        </div>
                        <div className="space-y-6">
                           <div>
                             <span className="text-[10px] font-bold text-gray-400 mb-3 block tracking-wider uppercase">▼ 歯科助手</span>
                             <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                               <div className="w-12 h-12 bg-pink-100 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                  {/* Placeholder for avatar */}
                                  <svg className="w-full h-full text-pink-300 fill-current translate-y-1" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                </div>
                               <div>
                                 <p className="text-sm font-bold text-gray-800">小林 由佳</p>
                                 <p className="text-xs text-gray-500 mt-0.5">11月29日</p>
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Mockup (Floating Bottom Left) - Notion Style */}
          <div className="absolute -bottom-10 -left-4 md:-left-16 w-48 sm:w-60 md:w-[320px] bg-[#222] rounded-[2.5rem] md:rounded-[3.5rem] p-2 md:p-3 shadow-[0_30px_60px_rgba(0,0,0,0.7)] border-[4px] md:border-[6px] border-[#333] transform -rotate-3 z-30 hidden sm:block ring-1 ring-white/10">
            <div className="bg-[#f7f7f5] rounded-[2rem] md:rounded-[3rem] overflow-hidden h-[500px] sm:h-[600px] md:h-[720px] relative flex flex-col font-sans">
               
               {/* Notion Mobile Header */}
               <div className="bg-[#37352f] text-white px-5 py-4 pt-10 md:pt-14 pb-4 flex items-center gap-2 sticky top-0 z-20 shadow-sm">
                  {/* Simple Menu Icon */}
                  <div className="flex flex-col gap-1 mr-1">
                     <div className="w-3.5 h-0.5 bg-white/80"></div>
                     <div className="w-3.5 h-0.5 bg-white/80"></div>
                     <div className="w-3.5 h-0.5 bg-white/80"></div>
                  </div>
                  <div className="text-xl font-bold tracking-tight">Notion</div>
                  <div className="text-sm text-gray-300 font-medium">ナレッジメント</div>
               </div>

               {/* Scrollable Content */}
               <div className="flex-1 overflow-y-auto no-scrollbar p-3">
                  
                  <NotionMobileSection title="経営管理">
                     <NotionMobileItem emoji="🗓️" title="年間カレンダー" />
                     <NotionMobileItem emoji="📢" title="お知らせ" />
                     <NotionMobileItem emoji="👥" title="組織図" />
                  </NotionMobileSection>

                  <NotionMobileSection title="組織/採用">
                     <NotionMobileItem emoji="🎉" title="Welcome to Tenyi" />
                     <NotionMobileItem emoji="📜" title="就業規則" />
                     <NotionMobileItem emoji="❤️" title="経営理念" />
                     <NotionMobileItem emoji="🏆" title="評価制度" />
                     <NotionMobileItem emoji="👤" title="スタッフ紹介" />
                     <NotionMobileItem emoji="📐" title="Tenyiデンタルクリニックご応募の..." />
                  </NotionMobileSection>

                  <NotionMobileSection title="その他">
                     <NotionMobileItem emoji="📱" title="入力用ページ" />
                  </NotionMobileSection>

                  <NotionMobileSection title="患者管理">
                     <NotionMobileItem emoji="🦷" title="技工物管理表" />
                     <NotionMobileItem emoji="💬" title="カウンセリングリスト" />
                     <NotionMobileItem emoji="🔧" title="矯正患者管理表" />
                     <NotionMobileItem emoji="📝" title="インプラント患者管理表" />
                     <NotionMobileItem emoji="📊" title="アポ数管理表" />
                  </NotionMobileSection>
                  
                  {/* Spacer for FAB */}
                  <div className="h-16"></div>
               </div>
               
               {/* FAB */}
               <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                     <span className="transform -translate-y-0.5">✏️</span>
                  </div>
                  {/* Tiny duck icon simulation on bottom right of fab */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-100">
                     <span className="text-[10px]">🐤</span>
                  </div>
               </div>

               {/* Bottom Bar (Simple) */}
               <div className="bg-white border-t border-gray-200 h-14 flex justify-around items-center px-4">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                  <Search className="w-5 h-5 text-gray-400" />
                  <Bell className="w-5 h-5 text-gray-400" />
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
