import React from 'react';

import Link from 'components/shared/link';

import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import HenrikPhoto from './images/organizer-henrik-hoeegh.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';
import NikitaPhoto from './images/organizer-nikita-hald.jpg';
import OpheliaPhoto from './images/organizer-ophelia-dalsgaard.jpg';
import PerPhoto from './images/organizer-per-christiansen.jpg';
import RobertPhoto from './images/organizer-robert-jensen.jpg';
import RyanPhoto from './images/organizer-ryan-gough.jpg';
import ThomasPhoto from './images/organizer-thomas-vitale.jpg';
import ThorPhoto from './images/organizer-thor-lange.jpg';

const ITEMS = [
  {
    name: 'Camilla Larsen',
    position: 'Platform Engineer at Lunar',
    photo: CamillaPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/camilla-larsen-tux',
    twitterUrl: '',
  },
  {
    name: 'Henrik René Høegh',
    position: 'Product Owner at VELUX',
    photo: HenrikPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/hoeghh',
    twitterUrl: 'https://twitter.com/henrikhoegh',
  },
  {
    name: 'Jinhong Brejnholt',
    position: 'Chief Cloud Architect & Product Owner at Saxo Bank A/S',
    photo: JinhongPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/jbrejnholt',
    twitterUrl: '',
  },
  {
    name: 'Kasper Borg Nissen',
    position: 'Lead Platform Architect at Lunar',
    photo: KasperPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/kaspernissen',
    twitterUrl: 'https://twitter.com/phennex',
  },
  {
    name: 'Ophelia Z. Dalsgaard',
    position: 'Chapter Lead at Danske Bank',
    photo: OpheliaPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/ophelia-zhang-dalsgaard-123580106',
    twitterUrl: '',
  },
  {
    name: 'Per Hedegaard Christiansen',
    position: 'Chief Container Platform Engineer at Saxo Bank A/S',
    photo: PerPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/perhchristiansen',
    twitterUrl: '',
  },
  {
    name: 'Robert Jensen',
    position: 'Lead Solution Engineer at VMware',
    photo: RobertPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/robertjensen',
    twitterUrl: 'https://twitter.com/rhjensen',
  },
  {
    name: 'Ryan Gough',
    position: 'Senior IT Operations Specialist & DevOps at JYSK',
    photo: RyanPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/ryanjgough',
    twitterUrl: '',
  },
  {
    name: 'Thomas Vitale',
    position: 'Software Architect at Systematic & Author of "Cloud Native Spring in Action"',
    photo: ThomasPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/vitalethomas',
    twitterUrl: 'https://twitter.com/vitalethomas',
  },
  {
    name: 'Thor Anker Kvisgård Lange',
    position: 'Platform Development Specialist at Netic',
    photo: ThorPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/thor-lange-26b388',
    twitterUrl: 'https://twitter.com/thorlange',
  },
  {
    name: 'Nikita Hald Sørensen',
    position: 'Communication and event coordinator at Coding Pirates and Innovation Lab',
    photo: NikitaPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/nikitahald',
    twitterUrl: '',
  },
];

const Members = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container">
      <ul className="mt-20 grid grid-cols-4 gap-8 lg:gap-6 md:flex md:flex-wrap md:justify-evenly [@media(max-width:900px)]:mx-auto [@media(max-width:900px)]:max-w-[570px]">
        {ITEMS.map(({ name, position, photo, linkedinUrl, twitterUrl }, index) => (
          <li
            className="flex w-[240px] flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]"
            key={index}
          >
            <img
              className="w-full"
              src={photo}
              width={240}
              height={284}
              loading="lazy"
              alt={name}
            />

            <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 sm:text-left">
              {name}
            </p>

            <span className="mt-1.5 text-primary-1">{position}</span>

            <p className="mt-2.5 text-base font-semibold leading-normal">
              <Link className="text-blue-1" to={linkedinUrl} target="_blank">LinkedIn</Link>
              {twitterUrl != "" && <Link className="text-blue-1" to={twitterUrl} target="_blank"> | Twitter</Link>}
            </p>

          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Members;
