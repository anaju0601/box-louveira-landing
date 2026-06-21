import { Flame } from "lucide-react";
import { useState } from "react";

export function Logo() {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <a href="#top" className="group inline-flex items-center gap-3">
      {hasLogo ? (
        <img
          src="/brand/box-logo.jpg"
          alt="Box Louveira Cross Training"
          className="h-12 w-auto max-w-[150px] rounded-sm object-contain sm:h-14 sm:max-w-[190px]"
          onError={() => setHasLogo(false)}
        />
      ) : (
        <>
          <span className="grid size-12 place-items-center border border-[var(--green-logo)]/35 bg-[var(--green-logo)]/10 shadow-[0_0_32px_var(--green-glow)]">
            <Flame className="size-6 text-[var(--green-logo)]" strokeWidth={2.5} />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.18em] text-white">
              Box Louveira
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--green-logo)]">
              Cross Training
            </span>
          </span>
        </>
      )}
    </a>
  );
}
