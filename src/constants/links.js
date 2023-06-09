import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule: {
    to: '/schedule',
    id: getAnchor('Schedule'),
    homeTo: '/schedule',
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
  team: {
    to: '/team',
  },
  tickets: {
    to: '#',
    target: '_blank',
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/cloud-native-nordics',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/CNNordics',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://goo.gl/maps/aegmwLjH3CxsY8wm7',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@CloudNativeNordics',
    target: '_blank',
  },
};
