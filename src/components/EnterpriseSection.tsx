export function EnterpriseSection() {
  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-white mb-8">
              Built for
              <br />
              enterprise
              <br />
              scale
            </h2>
            
            <div className="flex items-center gap-6 mb-8 flex-wrap">
              <span className="text-xl">Adobe</span>
              <span className="text-xl">Canva</span>
              <span className="text-xl">perplexity</span>
              <span className="text-xl">Quora</span>
            </div>

            <p className="text-gray-300 mb-8">
              HumanTick powers AI features in some of the world's most demanding environments — from public companies to frontier research labs.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
              <div>
                <p className="text-2xl mb-1">99.5%+</p>
                <p className="text-gray-400">Uptime</p>
              </div>
              <div>
                <p className="text-2xl mb-1">10 Billion Inferences</p>
                <p className="text-gray-400">Per month</p>
              </div>
              <div>
                <p className="text-2xl mb-1">10 Private compute</p>
                <p className="text-gray-400">Clusters</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8 text-sm">
              <div className="flex-1">
                <p className="text-gray-400 mb-1">100,000+ GPUs</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 mb-1">5M+ hours support</p>
              </div>
            </div>

            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-100">
              Learn more
            </button>
          </div>

          {/* Right Side - Phone Mockups */}
          <div className="relative h-[500px]">
            {/* Phone 1 - Yellow */}
            <div className="absolute left-0 top-0 w-48 h-96 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-3xl shadow-2xl p-4">
              <div className="bg-gray-800 rounded-2xl h-full p-4 flex flex-col">
                <div className="text-xs text-white mb-4">Real-VOIC-2 conversion and works for practically efficient.</div>
                <div className="flex-1" />
              </div>
            </div>

            {/* Phone 2 - Purple */}
            <div className="absolute left-32 top-12 w-48 h-96 bg-gradient-to-b from-purple-300 to-purple-400 rounded-3xl shadow-2xl p-4 z-10">
              <div className="bg-gray-800 rounded-2xl h-full p-4 flex flex-col">
                <div className="text-xs text-white mb-4">Scale an internal or external AI capability</div>
                <div className="mb-4">
                  <div className="bg-purple-500 px-3 py-1 rounded text-xs text-white inline-block mb-2">
                    Unoptioned or reversed pricing
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            </div>

            {/* Phone 3 - Cyan */}
            <div className="absolute left-64 top-6 w-48 h-96 bg-gradient-to-b from-cyan-300 to-cyan-400 rounded-3xl shadow-2xl p-4 z-20">
              <div className="bg-gray-800 rounded-2xl h-full p-4 flex flex-col">
                <div className="text-xs text-white mb-4">
                  Collaborate with the Replicate Machine Learning Engineers for component planning.
                </div>
                <div className="mb-4">
                  <div className="bg-cyan-500 px-3 py-1 rounded text-xs text-white inline-block mb-2">
                    Forward Deployed Generation Media Engine
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            </div>

            {/* Phone 4 - Pink */}
            <div className="absolute right-0 top-20 w-48 h-96 bg-gradient-to-b from-pink-200 to-pink-300 rounded-3xl shadow-2xl p-4 z-30">
              <div className="bg-gray-800 rounded-2xl h-full p-4 flex flex-col">
                <div className="text-xs text-white mb-4">Deploy and serve your own models securely</div>
                <div className="mb-4">
                  <div className="bg-pink-400 px-3 py-1 rounded text-xs text-white inline-block mb-2">
                    Private model endpoints
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative bars */}
      <div className="absolute bottom-0 left-0 right-0 h-4 flex gap-2">
        <div className="flex-1 bg-lime-300" />
        <div className="flex-1 bg-cyan-400" />
        <div className="flex-1 bg-emerald-600" />
        <div className="flex-1 bg-lime-400" />
        <div className="flex-1 bg-emerald-700" />
        <div className="flex-1 bg-cyan-300" />
      </div>
    </section>
  );
}
