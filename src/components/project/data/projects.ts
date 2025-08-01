export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'TicketCo Fly',
    description:
      'TicketCO Fly is one of the flagship products of TicketCO AS, designed to help you organise your events in a hassle-free and efficient way.',
    image: 'ticketCoFly.jpg',
    tags: ['SwiftUI', 'Swift', 'XcodeCloud'],
    demoUrl: 'https://apps.apple.com/us/app/ticketco-fly/id6448911011',
  },
  {
    id: 2,
    title: 'Samsung Galaxy Watch (Gear S)',
    description:
      'The Galaxy Watch application connects Gear S2, Gear S3, Gear Sport, Galaxy Watch, Galaxy Watch Active, Galaxy Watch Active2 and Galaxy Watch3 to your mobile device.',
    image: 'galaxyWatch.jpg',
    tags: ['Swift', 'Objective-C'],
    demoUrl:
      'https://apps.apple.com/us/app/samsung-galaxy-watch-gear-s/id1117310635',
  },
  {
    id: 4,
    title: 'Samsung Galaxy Fit',
    description:
      'The Samsung Galaxy Fit application connects Galaxy Fit2, Gear Fit2, Gear Fit2 pro and Galaxy Fitⓔ to your mobile device.',
    image: 'galaxyFit.jpg',
    tags: ['Swift', 'Objective-C'],
    demoUrl:
      'https://apps.apple.com/us/app/samsung-galaxy-fit-gear-fit/id1117312500',
  },
];
