import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import Cloudnative from 'icons/cloudnative.svg';

const TITLE = 'Sponsors';

const ITEMS = [
  {
    title: 'Platinum Sponsors',
    logos: [
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
    ],
    cardClassname:
      'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Venue Sponsors',
    logos: [
      { icon: Cloudnative, url: 'https://www.cncf.io/' },
    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white sm:pb-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <p className="mx-auto mt-5 max-w-[800px] text-lg leading-normal text-primary-1">
        We would like to extend a special thank you to our sponsors for their support and commitment
        to the community. We couldn't do it without them! If you’re interested in becoming a
        sponsor, please contact{' '}
        <Link className="font-semibold" theme="blue-underlined" to="mailto:contact@kcddenmark.dk">
          contact@kcddenmark.dk
        </Link>
      </p>

      <ul className="mt-16 flex flex-col">
        {ITEMS.map(({ title, logos, cardClassname, iconClassname }, index) => (
          <li className="" key={index}>
            <p className="text-center text-2xl font-bold uppercase leading-normal text-primary-1">
              {title}
            </p>

            <ul className="mt-10 mb-[70px] flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className={clsx('h-auto w-auto xs:max-w-full', iconClassname)}
                      src={icon}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="sponsor-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
