import React from 'react';

import Link from 'components/shared/link';

import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import SorenPhoto from './images/organizer-soren.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';
import NikitaPhoto from './images/organizer-nikita-hald.jpg';
import MadsPhoto from './images/organizer-mads.jpg';
import AllanPhoto from './images/organizer-allan.jpg';
import RenePhoto from './images/organizer-rene.jpg';
import PerPhoto from './images/organizer-per-christiansen.jpg';
import RobertPhoto from './images/organizer-robert-jensen.jpg';
import RyanPhoto from './images/organizer-ryan-gough.jpg';
import ThomasPhoto from './images/organizer-thomas-vitale.jpg';
import ThorPhoto from './images/organizer-thor-lange.jpg';
import PlaceholderPhoto from './images/organizer-placeholder-picture.jpg';

const ITEMS = [
  {
    name: 'Camilla Larsen',
    position: 'Platform Engineer @ Netic',
    photo: CamillaPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/camilla-larsen-tux',
    twitterUrl: '',
  },
  {
    name: 'Jinhong Brejnholt',
    position: 'Chief Cloud Architect & Global Head of Cloud and Container Platform Engineering @ Saxo Bank A/S',
    photo: JinhongPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/jbrejnholt',
    twitterUrl: '',
  },
  {
    name: 'Kasper Borg Nissen',
    position: 'Lead Platform Architect @ Lunar',
    photo: KasperPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/kaspernissen',
    twitterUrl: 'https://twitter.com/phennex',
  },
  {
    name: 'Per Hedegaard Christiansen',
    position: 'Chief Container Platform Engineer @ Saxo Bank A/S',
    photo: PerPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/perhchristiansen',
    twitterUrl: '',
  },
  {
    name: 'Robert Jensen',
    position: 'Cloud Native Consultant @ Globeteam',
    photo: RobertPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/robertjensen',
    twitterUrl: 'https://twitter.com/rhjensen',
  },
  {
    name: 'Ryan Gough',
    position: 'Senior IT Operations Specialist & DevOps @ JYSK',
    photo: RyanPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/ryanjgough',
    twitterUrl: '',
  },
  {
    name: 'Thomas Vitale',
    position: 'Software Architect @ Systematic & Author of "Cloud Native Spring in Action"',
    photo: ThomasPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/vitalethomas',
    twitterUrl: 'https://twitter.com/vitalethomas',
  },
  {
    name: 'Thor Anker Kvisgård Lange',
    position: 'Platform Development Specialist @ Netic',
    photo: ThorPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/thor-lange-26b388',
    twitterUrl: 'https://twitter.com/thorlange',
  },
  {
    name: 'Nikita Hald Sørensen',
    position: 'Communication and event coordinator @ Coding Pirates & Innovation Lab',
    photo: NikitaPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/nikitahald',
    twitterUrl: '',
  },
  {
    name: 'René Gulager',
    position: 'Platform Engineer/DevOps Freelancer',
    photo: RenePhoto,
    linkedinUrl: 'https://www.linkedin.com/in/renegulager/',
    twitterUrl: '',
  },
  {
    name: 'Allan Hoejgaard Jensen',
    position: 'Platform Development Specialist @ Netic',
    photo: AllanPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/allanhoejgaardjensen/',
    twitterUrl: '',
  },
  {
    name: 'Søren Boss Jacobsen',
    position: 'Regional Sales Manager @ EDB',
    photo: SorenPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/sorenbossjacobsen/',
    twitterUrl: '',
  },
  {
    name: 'Mads Høgstedt Danqua',
    position: 'Lead Engineer @ The LEGO Group',
    photo: MadsPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/danquah/',
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
