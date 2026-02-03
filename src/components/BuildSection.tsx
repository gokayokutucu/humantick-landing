export function BuildSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Title */}
          <div className="flex items-start">
            <h2 className="mb-0">
              Build,
              <br />
              deploy,
              <br />
              train.
            </h2>
          </div>

          {/* Right Side - MODEL APIs Card */}
          <div className="bg-purple-100 rounded-lg p-8 relative overflow-hidden">
            <div className="mb-6">
              <span className="font-semibold">HumanTick</span>
              <span className="italic text-purple-600 ml-2">MODEL APIs</span>
            </div>
            <h3 className="mb-4">
              600+ generative media models. Ready for production.
            </h3>
            <p className="text-sm mb-6">
              Explore a rich library of models for image, video voice and code generation. All accessible with a simple API. No fine-tuning or setup needed – just call and go.
            </p>
            <div className="mb-6">
              <p className="text-sm mb-2">Use it for:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Building with state-of-the-art open models</li>
                <li>Personalize models for your own brand or prompt</li>
                <li>Production ready apps and workflows</li>
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Explore models
            </button>

            {/* Decorative SVG */}
            <div className="absolute bottom-0 right-0 w-40 h-40">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="50" r="30" fill="#7C3AED" />
                <path
                  d="M 70 80 Q 100 120 130 80 L 130 150 Q 100 180 70 150 Z"
                  fill="#7C3AED"
                />
              </svg>
            </div>
          </div>

          {/* SERVERLESS Card */}
          <div className="bg-cyan-200 rounded-lg p-8">
            <div className="mb-6">
              <span className="font-semibold">HumanTick</span>
              <span className="italic text-cyan-700 ml-2">SERVERLESS</span>
            </div>
            <h3 className="mb-4">
              On-demand, serverless GPUs.
            </h3>
            <p className="text-sm mb-6">
              Run inference at lightning speed with HumanTick's globally distributed serverless engine. No GPUs to configure, no cold starts, no autoscaler setup.
            </p>
            <div className="mb-6">
              <p className="text-sm mb-2">Use it for:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>
                  Access to <span className="font-semibold">HumanTick Inference Engine</span> to accelerate your models
                </li>
                <li>
                  Scale from <span className="font-semibold">zero to thousands of GPUs</span> instantly
                </li>
                <li>Run user-submitted code directly; productionize notebooks</li>
                <li>
                  <span className="font-semibold">Multi-node</span> distributed training and observability toolchain
                </li>
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Learn more
            </button>
          </div>

          {/* COMPUTE Card */}
          <div className="bg-lime-200 rounded-lg p-8">
            <div className="mb-6">
              <span className="font-semibold">HumanTick</span>
              <span className="italic text-lime-700 ml-2">COMPUTE</span>
            </div>
            <h3 className="mb-4">
              Dedicated clusters for frontier research labs.
            </h3>
            <p className="text-sm mb-6">
              Spin up dedicated compute or blue-think, train, or run custom models with guaranteed performance. Globally distributed over 100000 research GPUs in global regions.
            </p>
            <div className="mb-6">
              <p className="text-sm mb-2">Use it for:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>
                  <span className="font-semibold">100s of H200s with NVLink</span> racks
                </li>
                <li>Run large-scale training workloads</li>
                <li>Access both the <span className="font-semibold">Inference Engine</span></li>
                <li>Enterprise-grade reliability and scale</li>
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
