import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import ArchCloud from 'icons/archcloud.svg';
import Isovalent from 'icons/isovalent.svg';
import Rokt from 'icons/rokt.svg';
import WhiteRabbit from 'icons/white-rabbit.svg';

import AndreasGehrigPhoto from './images/andreas-gehrig-photo.jpg';
import MilenaThalmannPhoto from './images/milena-thalmann-photo.jpg';
import PhilippMeierPhoto from './images/philipp-meier-photo.jpg';
import ThomasPhiliponaPhoto from './images/thomas-philipona-photo.jpg';

const ITEMS = [
  {
    name: 'Andreas Gehrig',
    position: 'Co-founder Arch.cloud',
    photo: AndreasGehrigPhoto,
    url: 'https://www.linkedin.com/in/andreasgehrig/',
  },
  {
    name: 'Milena Thalmann',
    position: 'Founder White Rabbit Communications',
    photo: MilenaThalmannPhoto,
    url: 'https://www.linkedin.com/in/milena-thalmann/',
  },
  {
    name: 'Philipp Meier',
    position: 'Ecosystem Builder - Isovalent',
    photo: PhilippMeierPhoto,
    url: 'https://www.linkedin.com/in/phmeier/',
  },
  {
    name: 'Thomas Philipona',
    position: 'Founder ROKT GmbH',
    photo: ThomasPhiliponaPhoto,
    url: 'https://www.linkedin.com/in/thomas-philipona-thun/',
  },
];

const LOGOS = [
  { icon: ArchCloud, url: 'https://arch.cloud/', iconClassName: 'w-[260px] h-auto' },
  { icon: WhiteRabbit, url: 'https://www.whiterabbitcom.ch', iconClassName: 'w-[200px]' },
  { icon: Isovalent, url: 'https://isovalent.com/', iconClassName: '' },
  { icon: Rokt, url: 'https://rokt.cloud/', iconClassName: 'w-28 h-[72px]' },
];

const Members = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container">
      <ul className="mt-20 grid grid-cols-4 gap-8 lg:gap-6 md:flex md:flex-wrap md:justify-evenly [@media(max-width:900px)]:mx-auto [@media(max-width:900px)]:max-w-[570px]">
        {ITEMS.map(({ name, position, photo, url }, index) => (
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

            <Link
              className="mt-2.5 text-base font-semibold leading-normal text-blue-1"
              to={url}
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <ul className="mx-auto mt-36 flex flex-wrap justify-center gap-x-4">
      {LOGOS.map(({ icon, url, iconClassName }, index) => (
        <li className="flex min-h-[80px] min-w-[280px] items-center justify-center" key={index}>
          <Link className="flex h-full w-full items-center justify-center" to={url}>
            <img
              className={clsx(iconClassName, 'max-w-[260px] md:max-w-[220px]')}
              src={icon}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
            />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Members;
