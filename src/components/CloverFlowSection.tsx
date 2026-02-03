import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: React.ReactNode;
  imagePath: string;
  activeColor: string;
  gridPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

// Steps in conceptual flow order (1→2→3→4)
const steps: Step[] = [
  {
    id: 1,
    title: "Authority declares responsibility",
    description: (
      <>
        A creator or organization commits their <strong className="font-semibold text-slate-900">identity</strong> to the content they produce.
      </>
    ),
    imagePath: "/step_1.png",
    activeColor: "#FACC15", // Yellow
    gridPosition: "top-left",
  },
  {
    id: 2,
    title: "Responsibility is registered as a trust state",
    description: (
      <>
        The declaration becomes a <strong className="font-semibold text-slate-900">cryptographic commitment</strong>, <em className="italic">binding</em> <strong className="font-semibold text-slate-900">identity</strong> to content.
      </>
    ),
    imagePath: "/step_2.png",
    activeColor: "#16D98F", // Green
    gridPosition: "top-right",
  },
  {
    id: 3,
    title: "The trust state is anchored",
    description: (
      <>
        A <strong className="font-semibold text-slate-900">permanent</strong>, <em className="italic">tamper-evident</em> record is created in a distributed ledger.
      </>
    ),
    imagePath: "/step_3.png",
    activeColor: "#3B82F6", // Blue
    gridPosition: "bottom-right",
  },
  {
    id: 4,
    title: "Verification becomes independent",
    description: (
      <>
        Anyone can <strong className="font-semibold text-slate-900">verify authenticity</strong> without requiring <em className="italic">permission</em> or access to private systems.
      </>
    ),
    imagePath: "/step_4.png",
    activeColor: "#FA7875", // Coral/Pink
    gridPosition: "bottom-left",
  },
];

// Grid layout: [Step 1, Step 2, Step 4, Step 3]
// Top row: Step 1 | Step 2
// Bottom row: Step 4 | Step 3
const gridOrder = [0, 1, 3, 2]; // indices in steps array

export function CloverFlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [prevActiveStep, setPrevActiveStep] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const carouselTokenRef = useRef(0);

  const learnMoreByStepIndex = [
    { href: "/platform/trust-registry", ariaLabel: "Learn more about Trust Registry" },
    { href: "/platform/trust-registry", ariaLabel: "Learn more about Trust Registry" },
    { href: "/platform/anchor-service", ariaLabel: "Learn more about Anchor Service" },
    { href: "/platform/verifier", ariaLabel: "Learn more about Verifier" },
  ] as const;

  const startCarousel = () => {
    carouselTokenRef.current += 1;
    const token = carouselTokenRef.current;

    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      if (carouselTokenRef.current !== token) return;
      setActiveStep((prev) => {
        setPrevActiveStep(prev);
        const next = (prev + 1) % steps.length;
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    startCarousel();
    return () => {
      carouselTokenRef.current += 1;
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, []);

  const handleStepClick = (stepIndex: number) => {
    carouselTokenRef.current += 1;
    const token = carouselTokenRef.current;
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);

    setActiveStep((prev) => {
      setPrevActiveStep(prev);
      return stepIndex;
    });

    startCarousel();
  };

  const handleKeyDown = (event: React.KeyboardEvent, stepIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleStepClick(stepIndex);
    }
  };

  // NEW LOGIC: Show active step's image in the NEXT panel
  const getInactivePanelImage = (stepIndex: number): string | null => {
    if (stepIndex === activeStep) {
      return null;
    }

    let imageIndex: number;

    if (activeStep === 0) {
      if (stepIndex === 1) imageIndex = 0;
      else if (stepIndex === 2) imageIndex = 2;
      else imageIndex = 3;
    } else if (activeStep === 1) {
      if (stepIndex === 0) imageIndex = 1;
      else if (stepIndex === 2) imageIndex = 2;
      else imageIndex = 3;
    } else if (activeStep === 2) {
      if (stepIndex === 3) imageIndex = 2;
      else if (stepIndex === 0) imageIndex = 0;
      else imageIndex = 1;
    } else {
      if (stepIndex === 2) imageIndex = 3;
      else if (stepIndex === 0) imageIndex = 0;
      else imageIndex = 1;
    }

    return steps[imageIndex].imagePath;
  };

  const getImageOpacity = (stepIndex: number): number => {
    if (stepIndex === activeStep) {
      return 1;
    }

    let nextPanelIndex: number;
    if (activeStep === 0) nextPanelIndex = 1;
    else if (activeStep === 1) nextPanelIndex = 0;
    else if (activeStep === 2) nextPanelIndex = 3;
    else nextPanelIndex = 2;

    if (stepIndex === nextPanelIndex) {
      return 1;
    } else {
      return 0.4;
    }
  };

  const getSlideDirection = (stepIndex: number): { x: number; y: number } | null => {
    if (prevActiveStep === null) return null;
    
    const imageOpacity = getImageOpacity(stepIndex);
    if (imageOpacity !== 1) return null;

    const gridPositions: Record<number, [number, number]> = {
      0: [0, 0],
      1: [0, 1],
      2: [1, 1],
      3: [1, 0],
    };

    let sourceStep = prevActiveStep;
    let targetStep = stepIndex;

    if (activeStep === 0 && stepIndex === 1) {
      sourceStep = 0;
      targetStep = 1;
    } else if (activeStep === 1 && stepIndex === 0) {
      sourceStep = 1;
      targetStep = 0;
    } else if (activeStep === 2 && stepIndex === 3) {
      sourceStep = 2;
      targetStep = 3;
    } else if (activeStep === 3 && stepIndex === 2) {
      sourceStep = 3;
      targetStep = 2;
    } else {
      return null;
    }

    const [sourceRow, sourceCol] = gridPositions[sourceStep];
    const [targetRow, targetCol] = gridPositions[targetStep];

    const xOffset = (sourceCol - targetCol) * 100;
    const yOffset = (sourceRow - targetRow) * 100;

    return { x: xOffset, y: yOffset };
  };

  const renderPanel = (stepIndex: number) => {
    const step = steps[stepIndex];
    const isActive = activeStep === stepIndex;
    const backgroundImage = getInactivePanelImage(stepIndex);
    const imageOpacity = getImageOpacity(stepIndex);
    const slideOffset = getSlideDirection(stepIndex);

    return (
      <div
        onClick={() => handleStepClick(stepIndex)}
        onKeyDown={(e) => handleKeyDown(e, stepIndex)}
        role="button"
        tabIndex={0}
        aria-pressed={isActive}
        aria-label={isActive ? `${step.title} - currently active` : step.title}
        style={isActive ? { backgroundColor: step.activeColor } : undefined}
        className={`relative cursor-pointer transition-all duration-300 ease-out rounded-lg overflow-hidden ${
          isActive
            ? "border-2 border-slate-900 scale-105 z-10"
            : "bg-slate-100 border border-slate-200 scale-95 z-0"
        }`}
      >
        <AnimatePresence>
          {!isActive && backgroundImage && (
            <motion.div
              key={`${stepIndex}-${backgroundImage}-${activeStep}`}
              className="absolute inset-0"
              initial={slideOffset ? { 
                x: `${slideOffset.x}%`, 
                y: `${slideOffset.y}%`,
                opacity: 0 
              } : { opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: imageOpacity }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.6,
              }}
            >
              <img
                src={backgroundImage}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-full flex flex-col">
          {isActive ? (
            <div className="flex-1 flex flex-col items-center justify-center px-8 gap-4">
              <motion.h3
                layoutId={`title-${stepIndex}`}
                className="text-3xl font-serif font-semibold text-slate-900"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="text-base text-slate-700 leading-relaxed text-center max-w-sm"
              >
                {step.description}
              </motion.p>
            </div>
          ) : (
            <div className="flex-1 flex items-end justify-start p-8">
              <motion.h3
                layoutId={`title-${stepIndex}`}
                className="text-3xl font-serif font-semibold text-slate-900 opacity-15"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
              >
                {step.title}
              </motion.h3>
            </div>
          )}

          {isActive && (
            <a
              href={learnMoreByStepIndex[stepIndex]?.href}
              aria-label={learnMoreByStepIndex[stepIndex]?.ariaLabel}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-2 text-slate-900/60 hover:text-slate-900 underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white/50"
            >
              →
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-semibold text-slate-900 mb-4">
            How trust becomes verifiable
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A living system that transforms <strong className="font-semibold text-slate-900">authority</strong> into <strong className="font-semibold text-slate-900">proof</strong>
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 relative aspect-square">
            {renderPanel(gridOrder[0])}
            {renderPanel(gridOrder[1])}
            {renderPanel(gridOrder[2])}
            {renderPanel(gridOrder[3])}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-slate-900 w-10"
                    : "bg-slate-300 w-1.5 hover:bg-slate-400"
                }`}
                aria-label={`Go to ${step.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
