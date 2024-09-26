import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Speakers', ...LINKS.speakers },
    //{ text: 'CFP', ...LINKS.cfp },
    // { text: 'Workshops', ...LINKS.workshops },
    //{ text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Getting There', ...LINKS.gettingthere },
    // { text: 'Venue', ...LINKS.venue },
    // { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Archive', ...LINKS.schedule2023 } , 
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Privacy Policy', ...LINKS.privacy },
    { text: 'Transparency \'23', ...LINKS.transparency },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    // { text: 'CFP', ...LINKS.cfp },
    // { text: 'Workshops', ...LINKS.workshops },
    //{ text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Getting There', ...LINKS.gettingthere },
    // { text: 'Venue', ...LINKS.venue },
    // { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Archive', ...LINKS.schedule2023 },
  ],
};

export default MENUS;
