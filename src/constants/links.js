import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule2023: {
    to: '/schedule2023',
    id: getAnchor('Schedule2023'),
    homeTo: '/schedule2023',
  },
  schedule: {
    to: '/schedule',
    id: getAnchor('Schedule'),
    homeTo: '/schedule',
  },
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
    homeTo: '/workshops',
  },
  sponsors: {
    to: `/#${getAnchor('Sponsors')}`,
    id: getAnchor('Sponsors'),
    homeTo: null,
  },
  speakers: {
    to: `/#${getAnchor('Speakers')}`,
    id: getAnchor('Speakers'),
    homeTo: null,
  },
  proposal: {
    to: `/#${getAnchor('Call for Proposal')}`,
    id: getAnchor('Call for Proposal'),
    homeTo: null,
  },
  venue: {
    to: '/venue',
    id: getAnchor('Venue'),
    homeTo: '/venue',
  },
  team: {
    to: '/team',
  },
  tickets: {
    to: '#',
    target: '_blank',
  },
  cfp: {
    to: 'https://sessionize.com/kcd-denmark-2024/',
    homeTo: 'https://sessionize.com/kcd-denmark-2024/',
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
  },
  transparency: {
    to: 'https://www.cncf.io/reports/kcd-denmark-2023/',
    target: '_blank',
  },
  gettingthere: {
    to: '/venue',
    id: getAnchor('Transport'),
    homeTo: '/venue',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/kubernetes-community-days-denmark',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/kcd_dk',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://goo.gl/maps/aegmwLjH3CxsY8wm7',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@CloudNativeNordics',
    target: '_blank',
  }
};
