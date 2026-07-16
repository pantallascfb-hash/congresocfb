const Destacada = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] overflow-hidden min-h-[350px] md:min-h-[480px] flex items-center justify-center relative bg-navy">
          <img
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
            alt="Rebaño de ovejas al atardecer"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy/70" />

          <div className="relative z-10 text-center px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-semibold bg-gold/20 text-gold-light border border-gold/25 mb-6 md:mb-8">
              El rebaño del Padre
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-[0.95] tracking-[-0.02em] mb-6 md:mb-8">
              DOS DÍAS PARA
              <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
                ENCONTRARNOS CON EL PADRE
              </span>
            </h2>

            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-6 md:mb-8" />

            <p className="text-white/75 text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
              Viernes 28 y Sábado 29 de Agosto — Un tiempo de restauración,
              alabanza y comunión con Dios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destacada;
