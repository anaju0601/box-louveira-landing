export function EmotionalBlock() {
  return (
    <section className="relative grid min-h-[82svh] place-items-center overflow-hidden px-4 py-16 text-center sm:min-h-screen sm:px-8 sm:py-24 lg:px-10">
      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=2200&q=85"
        alt="Atleta em treino intenso"
        className="absolute inset-0 h-full w-full object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.72)_32%,rgba(5,5,5,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,var(--green-glow),transparent_36%)]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--green-logo)] sm:mb-6 sm:text-xs sm:tracking-[0.24em]">
          Decisao diária
        </p>
        <h2 className="text-[2rem] font-black uppercase leading-none text-white sm:text-6xl lg:text-6.5xl">

          <span className="block">
            NÃO É SOBRE TREINAR MAIS.
          </span>

          <span className="mt-3 block">
            É SOBRE SE TORNAR
          </span>

          <span className="mt-3 block">
            ALGUÉM QUE NÃO DESISTE.
          </span>

        </h2>
      </div>
    </section>
  );
}
