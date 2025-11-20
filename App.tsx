import React, { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { HudLayout } from './components/HudLayout';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { Peripherals } from './components/sections/Peripherals';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {!isBooted && <BootSequence onComplete={() => setIsBooted(true)} />}
      
      {isBooted && (
        <div className="animate-[fadeIn_1s_ease-out]">
          <HudLayout>
            <Hero />
            <Skills />
            <Projects />
            <ExperienceSection />
            <Peripherals />
          </HudLayout>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default App;