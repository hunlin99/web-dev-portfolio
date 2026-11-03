export const ampaProject = {
  title: 'AMPA — From Cultural Identity to Digital Marketplace',
  subtitle: 'Building a culturally inspired brand and dual-sided marketplace experience that connects Afro-diaspora consumers with independent vendors.',
  role: 'UX/UI Designer · Brand Designer',
  platform: 'Mobile App · Responsive Web',
  tools: 'Figma · Illustrator',
  website: 'https://afroidentity.com/',
  image: '/images/AMPA/AMPA_w_device.webp',
  scope: 'Brand identity · UX flows · Product UI',
  sections: [
    { id: 'overview', title: 'Context & Challenge' },
    { id: 'challenge', title: 'Understanding Two User Groups' },
    { id: 'identity', title: 'Building a Cultural Design System' },
    { id: 'architecture', title: 'UX Decisions & User Flows' },
    { id: 'experience', title: 'Final Product & Responsive Design' },
    { id: 'reflection', title: 'Outcomes & Reflection' }
  ],
  audiences: [
    { title: 'Consumers', text: 'Finding culturally relevant businesses, comparing unfamiliar offerings, and deciding whom to buy from.' },
    { title: 'Vendors', text: 'Presenting a storefront, keeping listings and orders organized, and understanding business activity.' }
  ],
  principles: [
    { title: 'Cultural authenticity', text: 'Ground the visual language in community and interdependence.' },
    { title: 'Functional clarity', text: 'Keep labels, states, and next steps clear during practical tasks.' },
    { title: 'Role-specific usability', text: 'Organize shopping and business tools around each role’s primary tasks.' }
  ],
  brandStages: [
    { title: 'Cultural inspiration', text: 'Ese Ne Tekrema suggests interdependence, Nkyinkyim adaptability, and Ndebele-inspired geometry cultural expression.' },
    { title: 'Logo exploration', text: 'Circular compositions connect the idea of shared community with the marketplace identity.' },
    { title: 'Logo refinement', text: 'Simplified borders balance cultural detail with recognition at small sizes.' },
    { title: 'UI application', text: 'Carry the identity into navigation and buttons; reserve expressive patterns for brand moments.' }
  ],
  colors: [
    { name: 'Cream', hex: '#FAF7F0', ink: '#1E1A1B' },
    { name: 'Gold', hex: '#EEAE43', ink: '#1E1A1B' },
    { name: 'Terracotta', hex: '#B65031', ink: '#FFFFFF' },
    { name: 'Charcoal', hex: '#1E1A1B', ink: '#FFFFFF' }
  ],
  decisions: [
    {
      title: 'Simplifying vendor product setup', discipline: 'Progressive disclosure',
      problem: 'A single form must accommodate pricing, inventory, lead times, and fulfillment.',
      decision: 'Group details into steps, reveal optional settings when relevant, and distinguish delivery, shipping, and pickup.',
      benefit: 'A staged listing flow that retains product flexibility without presenting every setting at once.'
    },
    {
      title: 'Making business performance understandable', discipline: 'Information hierarchy',
      problem: 'Revenue, orders, and followers answer different business questions.',
      decision: 'Separate metric views and keep the selected measure and time period visible.',
      benefit: 'A dashboard organized around a focused business question, with recent orders and customer-message entry points nearby.'
    }
  ],
  journeys: [
    { title: 'Consumer experience', steps: ['Discover & search', 'Explore vendor profiles', 'Compare & save', 'Checkout'], text: 'Category and location filters support discovery; saved items and checkout stay within the shopping context.', image: '/images/AMPA/Consumer-experience.png' },
    { title: 'Vendor experience', steps: ['Register', 'Create listings', 'Manage orders', 'Review analytics'], text: 'A dedicated dashboard groups listings, order status, and analytics, keeping operational tools out of consumer navigation.', image: '/images/AMPA/Vendor-experience.png' }
  ],
  deliverables: [
    'Brand identity: cultural rationale, logo exploration, palette, and typography.',
    'UX architecture: consumer/vendor flows, account states, and interaction specifications.',
    'Product design: high-fidelity mobile screens, responsive web direction, and reusable UI.',
    'Handoff: annotated flows and component behavior for implementation.'
  ]
} as const;
