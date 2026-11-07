export interface Testimonial {
  id: string;
  number: string;
  quote: string;
  attribution: string;
  role: string;
  avatarInitial: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    number: '01',
    quote:
      'Working with Ameen was a great experience. He understood the direction we wanted and translated it into a website that feels polished, modern and completely aligned with our brand.',
    attribution: 'Alex Morgan',
    role: 'Startup Founder',
    avatarInitial: 'A',
  },
  {
    id: 'testimonial-2',
    number: '02',
    quote:
      'What stood out was the attention to detail. From the layout to the animations, everything felt intentional. The final experience was even better than we imagined.',
    attribution: 'Daniel Carter',
    role: 'Creative Director',
    avatarInitial: 'D',
  },
  {
    id: 'testimonial-3',
    number: '03',
    quote:
      'Ameen brought our ideas to life with a level of creativity and technical understanding that made the entire process seamless. Communication was clear from start to finish.',
    attribution: 'Sophia Bennett',
    role: 'Brand Founder',
    avatarInitial: 'S',
  },
  {
    id: 'testimonial-4',
    number: '04',
    quote:
      'The motion and interactions made a huge difference to our website. The result feels premium, distinctive and much more engaging for our audience.',
    attribution: 'James Wilson',
    role: 'Marketing Lead',
    avatarInitial: 'J',
  },
];
