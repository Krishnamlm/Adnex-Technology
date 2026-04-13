import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id='hero' className='relative w-full overflow-hidden bg-white dark:bg-gray-950'>

      {/* ── Subtle grid background ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)',
        }}
      />

      {/* ── Soft center glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#5044E5] opacity-[0.06] blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center gap-0 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-center text-gray-800 dark:text-white">

        {/* ── Eyebrow pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#5044E5]/8 border border-[#5044E5]/25 text-[#5044E5] dark:text-[#AFA9EC] text-[11px] font-semibold tracking-[0.5px] uppercase px-4 py-1.5 rounded-full mb-7"
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#5044E5] dark:bg-[#AFA9EC]" />
          Visuals That Perform. Creatively Driven. Precision Engineered.
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl xl:text-[76px] font-medium leading-[1.1] tracking-[-2px] max-w-4xl mb-5"
        >
          Bringing Vision &amp;{' '}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Creativity
          </span>
          <br />Together.
        </motion.h1>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-500 dark:text-white/60 max-w-md leading-relaxed mb-9"
        >
          Adnex is the creative powerhouse that transforms ideas into captivating visuals — crafted with precision, delivered with purpose.
        </motion.p>

        {/* ── CTA row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 flex-wrap justify-center mb-8"
        >
          
        </motion.div>

        {/* ── Social proof ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/35 mb-14"
        >
          <div className="flex">
            {['#CECBF6', '#9FE1CB', '#F4C0D1', '#FAC775'].map((bg, i) => (
              <div
                key={i}
                className="w-[26px] h-[26px] rounded-full border-2 border-white dark:border-gray-950 -ml-2 first:ml-0 overflow-hidden flex items-center justify-center text-[9px] font-medium"
                style={{ background: bg }}
              />
            ))}
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 12 12">
                <path d="M6 1l1.4 2.8 3.1.4-2.2 2.2.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.2l3.1-.4z" />
              </svg>
            ))}
          </div>
          Trusted by 2,000+ creators &amp; brands
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative w-full max-w-6xl h-[260px] sm:h-[320px] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10"
>

  {/* Background Image */}
  <img
    src={assets.hero_img} // you can change this
    alt="Software services banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center sm:justify-start h-full px-6 sm:px-12 text-center sm:text-left">
  
  <div className="w-full max-w-md sm:max-w-md mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
    
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-tight  text-white/80 mb-6">
      Build Powerful Digital Experiences 
    </h2>

    <p className="text-sm sm:text-base text-white/80 mb-6">
      We design, develop and deliver high-performance digital solutions for modern businesses.
    </p>

    <button className="px-6 py-2.5 bg-white text-[#5044E5] rounded-lg text-sm font-medium hover:bg-gray-200 transition">
      Get Started
    </button>

  </div>
</div>
</motion.div>

        {/* ── Feature row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 flex-wrap justify-center py-10 text-xs text-gray-400 dark:text-white/35"
        >
          {['No-revision-limit guarantee', 'Dedicated creative lead', '3-day avg turnaround'].map((text, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-white/15" />}
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] rounded-full bg-green-50 dark:bg-green-950 flex items-center justify-center">
                  <svg className="w-2 h-2 stroke-green-600" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 8 8">
                    <path d="M1.5 4l2 2 3-3" />
                  </svg>
                </div>
                {text}
              </div>
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Hero