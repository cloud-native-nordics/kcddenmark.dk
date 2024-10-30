import React from 'react';

import Link from 'components/shared/link';

import CardIllusrtation from './images/bellasky.jpg';
import FloorMap from './images/floor-plan.svg';

const TITLE = 'Venue';

const Hero = () => (
  <section className="safe-paddings safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-24 pb-20">
    <div className="container relative mt-4 text-center text-primary-1">
      <div className="absolute -top-1/2 left-1/2 h-[503px] w-[503px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h1 className="text-6xl font-bold leading-denser ">{TITLE}</h1>
        <div className="mt-14 flex justify-between lg:justify-around md:flex-col sm:items-center gap-10">
          <div className="grid max-w-[384px] grid-cols-1 rounded shadow-[0_14px_40px_#CCCCCC] md:max-w-none md:grid-cols-2 sm:max-w-[500px] sm:grid-cols-1">
            <img
              className="min-w-full md:col-span-1 md:col-start-1 md:row-start-1 md:h-full"
              src={CardIllusrtation}
              width={384}
              height="auto"
              loading="eager"
              alt="card-illustration"
            />
            <div className="pt-5 pb-8 pl-10 pr-16 leading-normal md:row-start-1 md:px-6 sm:row-start-2">
              <Link
                to="https://maps.app.goo.gl/RFChKAjH48HAjjkAA"
                className="text-2xl font-semibold sm:text-xl"
                theme="primary"
              >
                Bella Center
              </Link>
              <address className="mt-5 text-lg not-italic text-[#262F59] opacity-60 sm:text-lg">
              Bella Center <br /> Indgang 3, Martha Christensens Vej 10<br /> 2300 København S
              </address>
            </div>
          </div>

          <div className="max-w-none grid-cols-1 md:max-w-none md:grid-cols-2 sm:row-start-2 sm:grid-cols-2">
            <img
              className="pt-8 min-w-full md:pt-0 md:col-span-1 md:col-start-1 md:row-start-1 md:h-full sm:h-full"
              src={FloorMap}
              width={1000}
              height="auto"
              loading="eager"
              alt="card-illustration"
            />
        </div> 
        </div>
        </div>
        </div>
  </section>
);

export default Hero;
