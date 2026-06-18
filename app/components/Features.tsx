import { Bot, Code, Headset } from "lucide-react";
export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold">Why Choose Us?</h2>

        <p className="mb-16 text-center text-gray-400">
          We help businesses grow with modern web solutions and outstanding
          support.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">
            <Bot className="mb-4 h-12 w-12 text-purple-400" />
            <h3 className="mb-4 text-2xl font-bold">AI Integration</h3>
            <p className="text-gray-400">
              Leverage intelligent automation and AI-powered features to
              streamline operations and boost productivity.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">
            <Code className="mb-4 h-12 w-12 text-blue-400" />
            <h3 className="mb-4 text-2xl font-bold">Custom Development</h3>
            <p className="text-gray-400">
              Build scalable and high-performance digital solutions tailored to
              your business needs.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">
            <Headset className="mb-4 h-12 w-12 text-green-400" />
            <h3 className="mb-4 text-2xl font-bold">24/7 Support</h3>
            <p className="text-gray-400">
              Get continuous technical support and maintenance to keep your
              business running without interruption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
