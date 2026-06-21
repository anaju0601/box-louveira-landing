import { footerLinks } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <div className="text-sm leading-7 text-white/56">
          <p>Box Louveira Cross Training</p>
          <p>Louveira, SP</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.18em] text-white/58 transition hover:text-[var(--green-logo)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
