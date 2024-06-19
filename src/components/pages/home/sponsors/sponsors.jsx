import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import Cloudnative from 'icons/cloudnative.svg';
import JYSK from 'icons/JYSK.svg';
import CodingPirates from 'icons/codingpirates.svg';
import Isovalent from 'icons/isovalent.svg'
// import Netic from 'icons/netic.png'
import ContainByNetic from 'icons/containbynetic.svg'
import Dynatrace from 'icons/dynatrace.svg'
import Systematic from 'icons/systematic.svg'
// import Atea from 'icons/atea.svg'
// import Lunar from 'icons/lunar.png'
// import Redpill from 'icons/redpill.png'
// import Sysdig from 'icons/sysdig.svg'
import Lego from 'icons/lego.svg'
// import Saxo from 'icons/saxo.svg'
import Nordics from 'icons/nordics.svg'
// import PaloAlto from 'icons/paloalto.svg'
// import KubeCareers from 'icons/kube-careers.svg'
// import KubeEvents from 'icons/kube-events.svg'
import Deranged from 'icons/deranged.svg'
// import Bestseller from 'icons/bestseller.svg'
import Eficode from 'icons/eficode.svg'
// import Boozt from 'icons/boozt.png'
// import TV2 from 'icons/tv2.svg'
// import TrendMicro from 'icons/trendmicro.svg'
import Akamai from 'icons/akamai.svg'
// import Dypang from 'icons/dypang.svg'
// import Enggaard from 'icons/enggaard.svg'
// import StickerMule from 'icons/stickermule.svg'
import TeamBlue from 'icons/teamblue.svg'
import TechChapter from 'icons/techchapter.svg'
import GlobeTeam from 'icons/globeteam.png'
import EDB from 'icons/edb.png'
import Portworx from 'icons/portworx.png'
import AWS from 'icons/aws-logo.png'


const TITLE = 'Sponsors';

const ITEMS = [
  {
    title: 'Platinum Sponsors',
    logos: [
      { icon: ContainByNetic, url: 'https://contain.dk/', scale: '75%' },
      { icon: TeamBlue, url: 'https://team.blue/', scale: '100%' },
    ],
    cardClassname:
      'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[100%] scale-[1.6] sm:scale-[1]',
  },
  {
    title: 'Gold Sponsors',
    logos: [
      { icon: Isovalent, url: 'https://isovalent.com/' },
      { icon: Eficode, url: 'https://www.eficode.com/', scale: '80%' },
      { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
      { icon: Akamai, url: 'https://www.akamai.com/', scale: '80%' },
      { icon: EDB, url: 'https://www.enterprisedb.com/', scale: '80%' },
      { icon: Portworx, url: 'https://portworx.com/', scale: '80%' }
    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[70%]',
  },
  {
    title: 'Bronze Sponsors',
    logos: [
      { icon: GlobeTeam, url: 'https://globeteam.com/'  },
      { icon: AWS, url: 'https://aws.amazon.com/'  },

    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[70%]',
  },
  {
    title: 'Community Sponsors',
    logos: [
      { icon: JYSK, url: 'https://www.jysk.com/', scale: '80%' },
      { icon: TechChapter, url: 'https://www.techchapter.com/' },
      { icon: Lego, url: 'https://www.lego.com/'},

      { icon: Deranged, url: 'https://deranged.dk/' },
      { icon: Systematic, url: 'https://systematic.com/' },

    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[70%]  scale-[0.7]',
  },
  {
    title: 'Media & Partners',
    logos: [
      { icon: Nordics, url: 'https://cloudnativenordics.com/' },
      { icon: CodingPirates, url: 'https://codingpirates.dk/' , scale: '80%' },

      // { icon: KubeCareers, url: 'https://kube.careers/', scale: '80%' },
      // { icon: KubeEvents, url: 'https://kube.events/' , scale: '80%' },

      { icon: Cloudnative, url: 'https://www.cncf.io/' },

      // { icon: Enggaard, url: 'https://www.enggaard.dk/' },
      // { icon: StickerMule, url: 'https://www.stickermule.com/eu/custom-stickers' },
    ],
    cardClassname:
      'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
    iconClassname: 'max-w-[330px] sm:min-w-[100%]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white sm:pb-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <p className="mx-auto mt-5 max-w-[800px] text-lg leading-normal text-primary-1">
        {/* We would like to extend a special thank you to our sponsors for their support and commitment
        to the community. We couldn't do it without them! */}
        If you’re interested in becoming a sponsor, please contact{' '}
        <Link className="font-semibold" theme="blue-underlined" to="mailto:contact@kcddenmark.dk">
          sponsor@kcddenmark.dk
        </Link> or view our {' '}
        <Link className="font-semibold" theme="blue-underlined" to="https://www.canva.com/design/DAF5X4WiO6I/6bgxDDraWrQzTfyTYtINmQ/view">
prospectus </Link>
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
