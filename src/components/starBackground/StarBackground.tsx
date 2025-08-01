import { useEffect, useState } from 'react';
import { Star } from './star';
import { Meteor } from './meteor';
import { generateStars } from './generateStar';
import { generateMeteors } from './generateMeteors';

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setStars(generateStars());
    setMeteors(generateMeteors());

    const handleResize = () => {
      setStars(generateStars());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            position: 'absolute',
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.animationDelay}`,
            animationDuration: `${meteor.animationDuration}s`,
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};
