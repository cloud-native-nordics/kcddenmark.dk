import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import Cloudnative from 'icons/cloudnative.svg';
import JYSK from 'icons/JYSK.svg';
import CodingPirates from 'icons/codingpirates.svg';
import Isovalent from 'icons/isovalent.svg'
import Netic from 'icons/netic.png'
import Dynatrace from 'icons/dynatrace.svg'
import Systematic from 'icons/systematic.svg'
import Atea from 'icons/atea.svg'
import Lunar from 'icons/lunar.png'
import Redpill from 'icons/redpill.png'
import Sysdig from 'icons/sysdig.svg'
import Lego from 'icons/lego.svg'
import Saxo from 'icons/saxo.svg'
import Nordics from 'icons/nordics.svg'
import PaloAlto from 'icons/paloalto.svg'
import KubeCareers from 'icons/kube-careers.svg'
import KubeEvents from 'icons/kube-events.svg'
import Deranged from 'icons/deranged.svg'
import Bestseller from 'icons/bestseller.svg'
import Eficode from 'icons/eficode.svg'
import Boozt from 'icons/boozt.png'
import TV2 from 'icons/tv2.svg'
import TrendMicro from 'icons/trendmicro.svg'
import Akamai from 'icons/akamai.svg'
import Dypang from 'icons/dypang.svg'
import Enggaard from 'icons/enggaard.svg'
import StickerMule from 'icons/stickermule.svg'

const TITLE = 'Sponsors';

const ITEMS = [
  {
    title: 'Platinum Sponsors',
    logos: [
      { icon: Isovalent, url: 'https://isovalent.com/' },
      { icon: Netic, url: 'https://www.netic.dk/', scale: '70%' },

      { icon: Bestseller, url: 'https://bestseller.com/' },

      { icon: Systematic, url: 'https://systematic.com/en-gb/' },
      { icon: Atea, url: 'https://atea.dk/' },
      { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
    ],
    cardClassname:
      'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Community Sponsors',
    logos: [
      { icon: Lunar, url: 'https://www.lunar.app/' },
      { icon: Redpill, url: 'https://redpill-linpro.com/' },
      { icon: Sysdig, url: 'https://sysdig.com/'},
      { icon: Lego, url: 'https://www.lego.com/', scale: '65%' },
      { icon: PaloAlto, url: 'https://www.paloaltonetworks.com/' },
      { icon: Saxo, url: 'https://www.home.saxo/' },
      { icon: Deranged, url: 'https://deranged.dk' },
      { icon: Eficode, url: 'https://eficode.com' },
      { icon: Boozt, url: 'https://www.booztgroup.com/' },
      { icon: TV2, url: 'https://tv2.dk/' },
      { icon: TrendMicro, url: 'https://www.trendmicro.com/' },
      { icon: Akamai, url: 'https://www.akamai.com/' },
    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[150px] sm:min-w-[290px]',
  },
  {
    title: 'Venue & Partners',
    logos: [
      { icon: JYSK, url: 'https://www.jysk.com/', scale: '70%'  },
      { icon: Nordics, url: 'https://cloudnativenordics.com/' },
      { icon: CodingPirates, url: 'https://codingpirates.dk/' , scale: '80%' },

      { icon: KubeCareers, url: 'https://kube.careers/', scale: '80%' },
      { icon: KubeEvents, url: 'https://kube.events/' , scale: '80%' },

      { icon: Cloudnative, url: 'https://www.cncf.io/' },
      { icon: Dypang, url: 'https://dypaang.dk/' },
      { icon: Enggaard, url: 'https://www.enggaard.dk/' },
      // { icon: StickerMule, url: 'https://www.stickermule.com/eu/custom-stickers' },
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
        to the community. We couldn't do it without them!
        {/* If you’re interested in becoming a
        sponsor, please contact{' '}
        <Link className="font-semibold" theme="blue-underlined" to="mailto:contact@kcddenmark.dk">
          contact@kcddenmark.dk
        </Link> */}
      </p>

      <ul className="mt-16 flex flex-col">
        {ITEMS.map(({ title, logos, cardClassname, iconClassname }, index) => (
          <li className="" key={index}>
            <p className="text-center text-2xl font-bold uppercase leading-normal text-primary-1">
              {title}
            </p>

            <ul className="mt-10 mb-[70px] flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url, scale = '100%' }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className={clsx('h-auto xs:max-w-full', iconClassname)}
                      style={{maxHeight: "130px"}}
                      src={icon}
                      width={scale}
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
