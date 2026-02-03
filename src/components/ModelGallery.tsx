import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function ModelGallery() {
  const models = [
    {
      name: 'Kling Video v2.6 Image to Video',
      image: 'https://images.unsplash.com/photo-1762278804771-65c446b6acdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHllbGxvdyUyMHdhdmVzfGVufDF8fHx8MTc2NTc5NTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Flux 2 Flex',
      image: 'https://images.unsplash.com/photo-1741036379058-cca704d04101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU3OTU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Nano Banana Pro',
      image: 'https://images.unsplash.com/photo-1762807434799-30e8896489a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZHklMjBza3klMjBkcmVhbXxlbnwxfHx8fDE3NjU3OTU0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Veo 3.1',
      image: 'https://images.unsplash.com/photo-1701475683339-9afa360bb962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwc3VubGlnaHQlMjBnYXJkZW58ZW58MXx8fHwxNzY1Nzk1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="mb-6">
              The world's largest
              <br />
              generative media
              <br />
              model gallery
            </h2>
            <a href="/solutions" className="inline-flex items-center gap-2 hover:underline">
              Explore all models <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="max-w-md text-sm space-y-2">
            <p>
              Choose from <span className="font-semibold">600+ production ready</span> image, video, audio and 3D models. Build products using <span className="font-semibold">HumanTick model apis</span>. Scale custom AI models with <span className="font-semibold">HumanTick serverless</span>. Access 1000s of H100, H200 and B200 VMs with <span className="font-semibold">HumanTick compute</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
            >
              <ImageWithFallback
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white">{model.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
