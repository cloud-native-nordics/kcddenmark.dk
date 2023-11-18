import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Workshops', ...LINKS.workshops },
    // { text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Getting There', ...LINKS.gettingthere },
    { text: 'Venue', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Privacy Policy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Workshops', ...LINKS.workshops },
    // { text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Getting There', ...LINKS.gettingthere },
    { text: 'Venue', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
