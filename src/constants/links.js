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
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
    homeTo: '/workshops',
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
    to: 'https://tickets.kcdzurich.ch/',
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
    to: 'https://www.linkedin.com/company/kubernetes-community-days-zurich/',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/KcdZurich?s=20&t=2K7fxHFqThcgycuBzO_rSw',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://goo.gl/maps/ooQufQWKzaRM286Z7',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@KCDZH',
    target: '_blank',
  },
};
