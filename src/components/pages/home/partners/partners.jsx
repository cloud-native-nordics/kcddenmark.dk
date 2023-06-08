import React from 'react';

import Link from 'components/shared/link';
import ArchCloud from 'icons/archcloud.svg';
import Cloudnative from 'icons/cloudnative.svg';
import InsideIt from 'icons/insideIt.svg';
import Rokt from 'icons/rokt.svg';
import Techface from 'icons/techface.svg';
import WhiteRabbit from 'icons/white-rabbit.svg';

const TITLE = 'Community & Media Partners';

const ITEMS = [
  { icon: Cloudnative, url: 'https://www.cncf.io/' },
  { icon: Techface, url: 'http://techface.ch' },
  { icon: InsideIt, url: 'https://www.inside-it.ch' },
  { icon: ArchCloud, url: 'https://arch.cloud/' },
  { icon: Rokt, url: 'https://rokt.cloud/' },
  { icon: WhiteRabbit, url: 'https://www.whiterabbitcom.ch' },
];

const Partners = () => (
  <section className="safe-paddings relative bg-white pt-24 pb-48 lg:pb-40 md:pb-32 sm:pb-24 sm:pt-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>

      <ul className="mx-auto mt-20 flex max-w-[1000px] flex-wrap justify-center gap-y-14 gap-x-8">
        {ITEMS.map(({ icon, url }, index) => (
          <li className="flex min-h-[80px] min-w-[280px] items-center justify-center" key={index}>
            <Link className="flex h-full w-full items-center justify-center" to={url}>
              <img
                className="max-w-[210px]"
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
    </div>
  </section>
);

export default Partners;
