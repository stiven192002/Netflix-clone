"use client";

export default function SliderVideo() {
  return (
    <section className="relative w-full h-[65vh] overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DEGRADADO */}
      <div className="absolute inset-0 bg-gradient-video z-10 pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-20 flex h-full items-end px-10 pb-24 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">Movie1</h1>

          <p className="text-sm text-gray-200 mb-6">
            Aprende a crear desde cero un clon de Netflix con todas sus
            funciones clave.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold">
              ▶ Reproducir
            </button>
            <button className="bg-gray-600/70 px-6 py-2 rounded font-semibold">
              ℹ Más información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
