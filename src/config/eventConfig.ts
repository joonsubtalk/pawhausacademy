// eventConfig.js
export const EVENTS : Record<string, {
  id: string;
  name: string;
  theme: string;
  discount: string;
  content: string;
}> = {
  'auto25': {
    id: 'auto25',
    name: 'LA Auto Show 2025',
    theme: 'red',
    discount: '20% OFF',
    content: 'Welcome to the LA Auto Show 2025! Enjoy exclusive content and 20% off on select services.',
  },
  'tech26': {
    id: 'tech26',
    name: 'Tech Summit 2026',
    theme: 'blue',
    discount: 'Free Drink',
    content: 'After-party at the Rooftop.',
  }
};