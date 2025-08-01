import { Meteor } from './meteor';

export const generateMeteors = (): Meteor[] => {
  const numberOfMeteors = 4;
  const newMeteors: Meteor[] = [];

  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      animationDelay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    });
  }

  return newMeteors;
};
