export const ampaProject = {
  title: 'AMPA — From Cultural Identity to Digital Marketplace',
  subtitle: 'Building a culturally inspired brand and dual-sided marketplace experience that connects Afro-diaspora consumers with independent vendors.',
  role: 'UX/UI Designer · Brand Designer',
  platform: 'Mobile App · Responsive Web',
  tools: 'Figma · Illustrator',
  website: 'https://afroidentity.com/',
  image: '/images/AMPA/AMPA_w_device.png',
  sections: [
    { id: 'overview', title: 'Project Overview' },
    { id: 'challenge', title: 'The Challenge' },
    { id: 'strategy', title: 'Discovery & Strategy' },
    { id: 'identity', title: 'Brand Identity' },
    { id: 'system', title: 'Design System' },
    { id: 'architecture', title: 'UX Architecture' },
    { id: 'decisions', title: 'Solving Key UX Problems' },
    { id: 'experience', title: 'UI & Prototype Direction' },
    { id: 'reflection', title: 'Outcome & Reflection' }
  ],
  audiences: [
    { title: 'Consumers', text: 'Discover culturally relevant businesses, compare offerings, communicate with vendors, and shop confidently.' },
    { title: 'Vendors', text: 'Create storefronts, manage listings and orders, and understand business performance.' }
  ],
  goals: [
    'Build a recognizable identity rooted in community and cultural expression.',
    'Support consumer and vendor workflows within one coherent marketplace.',
    'Reduce complexity in vendor operations through clear, progressive steps.',
    'Maintain a consistent, usable experience across mobile and responsive web layouts.'
  ],
  brandStages: [
    { title: 'Cultural exploration', text: 'The visual direction explores Ese Ne Tekrema as a reference for interdependence, Nkyinkyim for adaptability, and Ndebele-inspired geometry for cultural expression. These concepts connect the identity to the relationship between consumers, vendors, and community.' },
    { title: 'Logo ideation', text: 'Circular compositions explore connection and shared community, translating the marketplace concept into a recognizable visual identity.' },
    { title: 'Refinement', text: 'Detailed and simplified border treatments frame a key design tradeoff: cultural richness versus legibility at small sizes.' },
    { title: 'Brand application', text: 'The identity direction extends across the AMPA wordmark, social icons, and light and dark applications, keeping cultural expression connected to the product experience.' }
  ],
  colors: [
    { name: 'Cream', hex: '#FAF7F0', ink: '#1E1A1B' },
    { name: 'Gold', hex: '#EEAE43', ink: '#1E1A1B' },
    { name: 'Terracotta', hex: '#B65031', ink: '#FFFFFF' },
    { name: 'Charcoal', hex: '#1E1A1B', ink: '#FFFFFF' }
  ],
  decisions: [
    {
      title: 'One marketplace, two user roles', discipline: 'Role-based navigation',
      problem: 'A user may be a shopper, a vendor, or both. Switching roles must preserve a clear sense of context.',
      constraint: 'Existing vendors and users who have not registered as vendors require different destinations.',
      decision: 'Branch from the user profile: existing vendors enter the dashboard, while new vendors enter registration.',
      benefit: 'A clear path for each account state, with registration presented only when it is needed.'
    },
    {
      title: 'Simplifying vendor product setup', discipline: 'Progressive disclosure',
      problem: 'Products can have different inventory, pricing, and fulfillment needs, making a single dense form difficult to navigate.',
      constraint: 'The setup flow needs to support bundle pricing, stock or lead-time options, and multiple fulfillment methods.',
      decision: 'Group product details, inventory, and fulfillment into understandable steps. Expand optional settings when relevant and separate local delivery, national shipping, and pickup.',
      benefit: 'Less information to process at once while retaining the flexibility needed for different kinds of products.'
    },
    {
      title: 'Making business performance understandable', discipline: 'Information hierarchy',
      problem: 'Vendors need different perspectives on business performance rather than one undifferentiated dashboard.',
      constraint: 'Revenue, completed orders, and followers represent different questions and time scales.',
      decision: 'Offer distinct metric views and time-period controls, keeping the selected measure and period visible.',
      benefit: 'A focused way to explore a business question without competing charts or ambiguous labels.'
    }
  ],
  journeys: [
    { title: 'Consumer experience', steps: ['Discover & search', 'Explore vendor profiles', 'Compare & save', 'Checkout'], text: 'Organize discovery, saved items, vendor communication, and checkout around a clear shopping journey.', image: '/images/AMPA/Consumer-experience.png' },
    { title: 'Vendor experience', steps: ['Register', 'Create listings', 'Manage orders', 'Review analytics'], text: 'Connect onboarding, inventory, fulfillment, and analytics in a practical operational workflow.', image: '/images/AMPA/Vendor-experience.png' }
  ],
  deliverables: [
    'Brand direction: cultural rationale, logo exploration, color, and typography.',
    'UX architecture: consumer and vendor journeys, account states, and interaction specifications.',
    'Product interface direction: mobile screens, responsive layouts, and reusable components.',
    'Handoff focus: annotated flows, component behavior, and clear implementation guidance.'
  ]
} as const;
