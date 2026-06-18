export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-5xl font-bold">
          Ready to{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Grow Your Business
          </span>
          ?
        </h1>
        <p className="text-2xl text-gray-400 mb-4">
          Let&apos;s build something amazing together.
        </p>
        <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
}
