import { HeroTitle } from './HeroTitle';
import { HeroSubtitle } from './HeroSubtitle';
import { ViewMyWorkButton } from './ViewMyWorkButton';
import { ScrollIndicator } from './ScrollIndicator';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <HeroTitle />
          <HeroSubtitle />
          <ViewMyWorkButton />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};
