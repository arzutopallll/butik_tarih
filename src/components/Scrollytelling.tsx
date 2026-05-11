import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrollySection } from "../constants";

export default function Scrollytelling({ sections }: { sections: ScrollySection[] }) {
  return (
    <div className="relative">
      {/* Background/Fixed Image Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#1a0f2e]">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#1a0f2e]/20 to-[#1a0f2e]" />
        
        {sections.map((section, index) => (
          <SectionImage key={section.id} section={section} index={index} total={sections.length} />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 -mt-[100vh]">
        {sections.map((section) => (
          <SectionContent key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

function SectionImage({ section, index, total }: { section: ScrollySection; index: number; total: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full h-full">
         <div className="absolute inset-0 bg-[#2d1b4d] flex items-center justify-center">
            <span className="text-[20vw] font-black text-white/5 select-none uppercase tracking-tighter">
                {section.year}
            </span>
         </div>
      </div>
    </motion.div>
  );
}

function SectionContent({ section }: { section: ScrollySection }) {
  return (
    <section className="h-screen flex items-center px-6 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ margin: "-20% 0px -20% 0px" }}
        className="max-w-xl bg-[#2d1b4d]/40 backdrop-blur-xl p-8 md:p-12 border-l border-purple-400/20"
      >
        <span className="text-purple-300/60 font-mono text-sm tracking-widest uppercase mb-4 block">
          {section.year}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight tracking-tight">
          {section.title}
        </h2>
        <p className="text-lg md:text-xl text-purple-100/70 leading-relaxed font-light">
          {section.description}
        </p>
      </motion.div>
    </section>
  );
}
