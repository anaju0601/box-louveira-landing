import { motion } from "motion/react";

interface TransformationCardProps {
  label: string;
  text: string;
  before: string;
  after: string;
  index: number;
}

export function TransformationCard({
  label,
  text,
  before,
  after,
  index,
}: TransformationCardProps) {
  const transformDelay = 1 + index * 0.15;
  const scannerDuration = 1.25;
  const revealDelay = transformDelay + scannerDuration;

  return (
    <div className="relative">

      {/* Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: [0, 0, 0.32, 0.12, 0.2],
          scale: [0.9, 0.9, 1.05, 1, 1.02],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2.6,
          delay: transformDelay,
          ease: "easeOut",
        }}
        className="absolute -inset-5 -z-10 rounded-[32px] bg-[radial-gradient(circle,var(--green-glow)_0%,transparent_72%)] blur-2xl"
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: index * 0.5,
        }}
        className="group relative aspect-[5/6] overflow-hidden rounded-md border border-white/10 bg-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        {/* Borda */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 0.7, 0],
          }}
          viewport={{ once: true }}
          transition={{
            delay: transformDelay + 0.12,
            duration: 0.45,
          }}
          className="absolute inset-0 z-20 rounded-md ring-2 ring-[var(--green-logo)]/60"
        />

        {/* BADGE */}

        <motion.div
            initial={{
                opacity: 1,
                scale: 1,
            }}
            whileInView={{
                opacity: [1, 1, 0],
                scale: [1, 1, 0.9],
            }}
            viewport={{ once: true }}
            transition={{
                delay: revealDelay + 0.05,
                duration: 0.25,
            }}
            className="absolute left-4 top-4 z-50 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md"
            >
            ANTES
            </motion.div>

            <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                delay: transformDelay + 1.75,
                duration: 0.3,
            }}
            className="absolute left-4 top-4 z-50 rounded-full border border-[var(--green-logo)]/40 bg-black/75 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--green-logo)] backdrop-blur-md"
            >
            ✓ DEPOIS
        </motion.div>

        {/* FOTO ANTES */}

        <motion.img
            src={before}
            alt={`${label} - Antes`}
            className="absolute inset-0 z-10 h-full w-full object-cover grayscale"
            initial={{ 
                opacity:1,
                scale: 1 
            }}
            whileInView={{ 
                opacity:0,
                scale: 1.02 
            }}
            viewport={{ once: true }}
            transition={{
                delay: revealDelay,
                duration:.30,
                ease:"easeOut"
            }}
        />

{/* SCANNER */}

<motion.div
  initial={{
    left: "-10%",
    opacity: 0,
  }}
  whileInView={{
    left: "110%",
    opacity: [0, 1, 1, 0],
  }}
  viewport={{ once: true }}
  transition={{
    delay: transformDelay,
    duration: scannerDuration,
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute inset-y-0 z-30 w-12 -translate-x-1/2"
>

  <div className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2 bg-[var(--green-logo)]/10 blur-3xl"/>

  <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 bg-[var(--green-logo)]/30 blur-xl"/>

  <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[var(--green-logo)] shadow-[0_0_25px_var(--green-logo)]"/>

  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white"/>

</motion.div>

        {/* Flash */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 0.08, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.18,
            delay: revealDelay - 0.08,
          }}
          className="absolute inset-0 z-40 bg-[var(--green-logo)] mix-blend-screen"
        />

{/* FOTO DEPOIS */}

<motion.img
  src={after}
  alt={`${label} - Depois`}
  className="absolute inset-0 z-20 h-full w-full object-cover"
  initial={{
    opacity: 0,
    scale: 1.03,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{ once: true }}
  transition={{
    delay: revealDelay,
    duration: 0.35,
    ease: "easeOut",
  }}
/>


        {/* Overlay */}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Texto */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: revealDelay,
            duration: 0.35,
          }}
          className="absolute inset-x-0 bottom-0 z-40 p-4 sm:p-5"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--green-logo)] sm:text-xs">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold text-white sm:text-base">
            {text}
          </p>
        </motion.div>
      </motion.article>
    </div>
  );
}   