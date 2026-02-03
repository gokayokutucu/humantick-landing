export function WhyChooseFalSection() {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Title with decorative elements */}
          <div className="relative">
            <h2 className="mb-0">
              Why
              <br />
              choose
              <br />
              HumanTick?
            </h2>

          </div>

          {/* Right Side - Feature Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Fastest inference engine */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-4">
                Fastest inference engine
                <br />
                for diffusion models
              </h3>
              <p className="text-sm mb-6">
                HumanTick Inference Engine™ is up to 10x faster. Scale from prototype to 1000+ daily inference calls — with 50%+ latency and per-token savings.
              </p>
              <div className="bg-white rounded p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">HumanTick + SDv</span>
                  <span className="text-xs">0.8s</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded">standard-1</span>
                  <span className="text-xs">5s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-pink-400 text-white px-2 py-1 rounded">standard-2</span>
                  <span className="text-xs">10s</span>
                </div>
                <p className="text-xs mt-3">Scaled inference speed</p>
              </div>
            </div>

            {/* Card 2 - On-demand GPUs */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-4">
                On-demand GPUs,
                <br />
                serverless deployments
              </h3>
              <p className="text-sm mb-6">
                Deploy private or fine-tuned models with one click — or bring your own weights. Customize endpoints easily with Python.
              </p>
              <div className="bg-white rounded p-4 mb-6">
                <div className="mb-3">
                  <div className="text-xs mb-2">Private deployments</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-emerald-700 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M12 6v12M6 12h12" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="aspect-square bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs mb-2">Bring your own model</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="aspect-[2/1] bg-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                        <path d="M9 9h6v6H9z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs">
                    <div className="bg-blue-600 text-white inline-block px-2 py-1 rounded">
                      <svg className="w-8 h-8 text-white inline" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M12 6v12" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Built for developers */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-4">Built for developers</h3>
              <p className="text-sm mb-6">
                Build and ship AI apps and products faster using open models or your own LoRAs in minutes: No MLOps, no setup — just plug in and generate.
              </p>
              <div className="bg-gray-800 rounded p-4 text-white text-xs font-mono overflow-x-auto">
                <div className="mb-2">
                  <span className="text-pink-400">import</span> * <span className="text-pink-400">from</span> <span className="text-green-400">"HumanTick-client/*"</span>
                </div>
                <div className="mb-4">
                  <span className="text-pink-400">async</span> <span className="text-blue-400">result</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">HumanTick</span>.<span className="text-blue-400">subscribe</span>
                </div>
                <div className="pl-4 mb-2">
                  {"{"} <span className="text-purple-400">input</span>: {"{"}
                </div>
                <div className="pl-8 mb-2">
                  <span className="text-blue-400">output_dir</span>: <span className="text-blue-400">/output</span>,
                </div>
                <div className="pl-8 mb-2">
                  <span className="text-blue-400">style</span>: <span className="text-green-400">"cinematic of a cat wearing a"</span> + <span className="text-blue-400">log.me</span>
                </div>
                <div className="pl-4 mb-2">
                  {"}"}, <span className="text-gray-400">logs: true,</span>
                </div>
                <div className="pl-4 mb-2">
                  <span className="text-blue-400">onQueueUpdate</span>: (<span className="text-purple-400">update</span>) {"=>"} {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">update.logs.map</span>((<span className="text-purple-400">log</span>) {"=>"} <span className="text-blue-400">log.me</span>)
                </div>
                <div className="pl-4">
                  {"}"}
                </div>
                <div>{"}"}</div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 mt-6 w-full">
                Documentation
              </button>
            </div>

            {/* Card 4 - H100s pricing */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-4">
                H100s, H200s, B200s for
                <br />
                as low as $1.2
              </h3>
              <p className="text-sm mb-6">
                Pay only for what you use. Choose per-output pricing for Serverless, or hourly GPU pricing with reserved pricing discounts for Compute.
              </p>
              <div className="bg-white rounded p-4 mb-6">
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { color: 'bg-emerald-600', label: 'H100' },
                    { color: 'bg-blue-500', label: 'H200' },
                    { color: 'bg-blue-400', label: 'A100' },
                    { color: 'bg-emerald-700', label: 'A6000' },
                    { color: 'bg-pink-500', label: 'B200' },
                  ].map((gpu, i) => (
                    <div key={i} className="text-center">
                      <div className={`aspect-square ${gpu.color} rounded-lg flex items-center justify-center mb-1`}>
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="text-xs">{gpu.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full">
                See pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
