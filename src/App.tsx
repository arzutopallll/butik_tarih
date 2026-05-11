import { Newspaper, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Scrollytelling from "./components/Scrollytelling";
import { ARTICLES, Article, ABOUT_CONTENT } from "./constants";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  
  const activeArticle = ARTICLES.find(a => a.id === activeTab);
  const isAbout = activeTab === "about";
  const isHome = activeTab === "home";

  const handleArticleClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fdfaff] min-h-screen flex flex-col text-[#2d1b4d]">
       <div className="grain-overlay" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#fdfaff]/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleArticleClick("home")}
          >
            <Newspaper className="w-5 h-5 text-[#6b46c1] group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl tracking-tight font-bold">BUTİK TARİH</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-2 bg-purple-50 p-1 rounded-full border border-purple-100">
            <button
              onClick={() => handleArticleClick("home")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                isHome 
                  ? "bg-[#6b46c1] text-white shadow-lg shadow-purple-200" 
                  : "text-purple-400 hover:text-[#6b46c1]"
              }`}
            >
              Anasayfa
            </button>
            {ARTICLES.map((article) => (
              <button
                key={article.id}
                onClick={() => handleArticleClick(article.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                  activeTab === article.id 
                    ? "bg-[#6b46c1] text-white shadow-lg shadow-purple-200" 
                    : "text-purple-400 hover:text-[#6b46c1]"
                }`}
              >
                {article.title}
              </button>
            ))}
            <button
              onClick={() => handleArticleClick("about")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                activeTab === "about" 
                  ? "bg-[#6b46c1] text-white shadow-lg shadow-purple-200" 
                  : "text-purple-400 hover:text-[#6b46c1]"
              }`}
            >
              Hakkımızda
            </button>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-[#6b46c1]" />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {isHome ? (
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
             {/* Hero Title */}
             <div className="mb-24 text-center">
                <span className="inline-block px-3 py-1 bg-purple-100 text-[#6b46c1] text-[10px] font-mono uppercase tracking-[0.4em] mb-8 rounded-sm font-bold">
                    Dijital Tarih Ansiklopedisi
                </span>
                <h1 className="text-6xl md:text-9xl font-serif text-[#2d1b4d] tracking-tighter leading-none mb-12">
                   Geçmişi <br /><span className="italic text-purple-300">Yeniden</span> Keşfet
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-purple-900/60 font-light leading-relaxed">
                   Atatürk dönemi devrimlerini ve Türkiye'nin kuruluş hikayesini derinlemesine içeriklerle, scrollytelling deneyimiyle yaşayın.
                </p>
             </div>

             {/* Articles Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {ARTICLES.map((article, idx) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => handleArticleClick(article.id)}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[3/4] bg-neutral-100 overflow-hidden rounded-2xl mb-6 relative shadow-2xl shadow-purple-900/5 group-hover:shadow-purple-900/10 transition-all border border-purple-50">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b4d] via-transparent to-transparent opacity-60 z-10" />
                             <div className="absolute inset-0 flex items-center justify-center p-12 z-0">
                                <span className="text-8xl font-black text-purple-900/5 select-none uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">
                                    {article.id.slice(0, 2)}
                                </span>
                             </div>
                             <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                <span className="block text-[10px] font-mono text-purple-200 uppercase tracking-widest mb-2 opacity-80">
                                    No. {article.issueNo} · {article.readingTime}
                                </span>
                                <h2 className="text-3xl font-serif text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                    {article.title}
                                </h2>
                                <div className="w-8 h-px bg-purple-300 group-hover:w-full transition-all duration-500" />
                             </div>
                        </div>
                        <p className="text-purple-900/60 font-light line-clamp-2 px-2">
                            {article.subHeadline}
                        </p>
                    </motion.div>
                ))}
             </div>
          </div>
        ) : isAbout ? (
          <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto min-h-[60vh]">
            <div className="bg-white/40 backdrop-blur-md p-12 md:p-20 rounded-3xl border border-purple-100 shadow-2xl shadow-purple-100/20">
              <span className="inline-block px-3 py-1 bg-purple-100 text-[#6b46c1] text-[10px] font-mono uppercase tracking-[0.3em] mb-12 rounded-sm font-bold">
                {ABOUT_CONTENT.presentation}
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#2d1b4d] mb-16 tracking-tighter leading-none">
                {ABOUT_CONTENT.title}
              </h1>
              <div className="prose prose-purple prose-xl max-w-none">
                <p className="text-2xl md:text-3xl text-purple-900/80 leading-relaxed font-light italic border-l-4 border-purple-200 pl-8 mb-12">
                  Modern Türkiye’nin siyasal tarihi Mustafa Kemal Atatürk ile özdeşleşmiştir.
                </p>
                <div className="space-y-8 text-lg md:text-xl text-purple-900/70 leading-relaxed font-light">
                  {ABOUT_CONTENT.text.split('. ').map((sentence, i) => (
                    <p key={i}>{sentence}{sentence.endsWith('.') ? '' : '.'}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : activeArticle ? (
          <>
            {/* Editorial Hero */}
            <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto boutique-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-[#6b46c1] text-[10px] font-mono uppercase tracking-[0.2em] mb-8 rounded-sm">
                    Özel İnceleme · Yayın No. {activeArticle.issueNo}
                  </span>
                  <h1 className="title-massive font-serif text-[#2d1b4d] mb-12">
                    {activeArticle.headline.split(" ").slice(0, -1).join(" ")} <br />
                    <span className="italic px-2 text-purple-300">
                      {activeArticle.headline.split(" ").slice(-1)}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-900/60 max-w-xl leading-relaxed font-light">
                    {activeArticle.subHeadline}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <div className="p-8 border border-purple-100 rounded-2xl bg-white/50 backdrop-blur-sm inline-block text-left max-w-sm shadow-xl shadow-purple-100/50">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#6b46c1]/60 mb-4">Okuma Süresi</p>
                    <p className="text-4xl font-serif text-[#2d1b4d] mb-6">{activeArticle.readingTime}</p>
                    <button className="flex items-center gap-2 group text-[#6b46c1] font-bold uppercase text-sm tracking-widest">
                      KEŞFETMEYE BAŞLA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* The Scrollytelling Section */}
            <section className="bg-[#1a0f2e]">
              <Scrollytelling key={activeArticle.id} sections={activeArticle.sections} />
            </section>
          </>
        ) : null}

        {/* Newsletter Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2d1b4d]">Haber Bültenimize Katılın</h3>
            <p className="text-purple-900/60 mb-12 max-w-md mx-auto text-lg">Tarihin tozlu raflarından en butik içerikler haftalık olarak e-postanıza gelsin.</p>
            <div className="flex max-w-md mx-auto border-b-2 border-purple-200 pb-2 focus-within:border-[#6b46c1] transition-colors">
                <input type="email" placeholder="E-posta adresiniz" className="flex-grow bg-transparent outline-none py-2 px-2 text-[#2d1b4d] placeholder-purple-300" />
                <button className="uppercase font-mono text-xs tracking-widest font-bold px-4 text-[#6b46c1]">Abone Ol</button>
            </div>
        </section>
      </main>

      <footer className="py-16 border-t border-purple-100 px-6 bg-purple-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-[#6b46c1]" />
                <span className="font-serif text-xl font-bold">BUTİK TARİH</span>
            </div>
            <p className="text-purple-400 text-sm font-medium">© 2026 Butik Tarih Medya. Bilgiyle kalınız.</p>
            <div className="flex gap-8 text-xs font-mono text-[#6b46c1] font-bold tracking-widest">
                <a href="#" className="hover:opacity-60 transition-opacity">X.COM</a>
                <a href="#" className="hover:opacity-60 transition-opacity">INSTAGRAM</a>
                <a href="#" className="hover:opacity-60 transition-opacity">GITHUB</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

