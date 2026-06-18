export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-slate-950" />

        {/* Blur Effects  */}
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Content  */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Grow Your Business
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            We build modern websites and digital solutions that help businesses
            attract more customers and increase revenue.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Get Started
            </button>

            <button className="rounded-lg border border-gray-600 px-8 py-4 transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section id="stats" className="px-6 py-12">
        <h3 className="mb-10 text-center text-4xl font-bold">By The Numbers</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <a
            href="#"
            className="p-8 bg-black/40 border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500"
          >
            <h5 className="mb-3 text-5xl font-bold tracking-tight text-heading leading-8">
              500+
            </h5>
            <p className="text-body">Trusted Businesses</p>
          </a>
          <a
            href="#"
            className="p-8 bg-black/40 border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500"
          >
            <h5 className="mb-3 text-5xl font-bold tracking-tight text-heading leading-8">
              50+
            </h5>
            <p className="text-body">Projects</p>
          </a>
          <a
            href="#"
            className="p-8 bg-black/40 border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500"
          >
            <h5 className="mb-3 text-5xl font-bold tracking-tight text-heading leading-8">
              99%
            </h5>
            <p className="text-body">Satisfaction</p>
          </a>
        </div>
      </section>
    </>
  );
}
