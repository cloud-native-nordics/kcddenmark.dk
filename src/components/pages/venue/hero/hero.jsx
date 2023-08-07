import React from 'react';

import Link from 'components/shared/link';

import CardIllusrtation from './images/venue.jpg';

const TITLE = 'Venue';

const Hero = () => (
  <section className="safe-paddings safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-24 pb-20">
    <div className="container relative mt-4 text-center text-primary-1">
      <div className="absolute -top-1/2 left-1/2 h-[503px] w-[503px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h1 className="text-6xl font-bold leading-denser ">{TITLE}</h1>
        <div className="mt-14 flex justify-between lg:justify-around md:flex-col sm:items-center">
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
                to="https://goo.gl/maps/aegmwLjH3CxsY8wm7"
                className="text-2xl font-semibold sm:text-xl"
                theme="primary"
              >
                JYSK
              </Link>
              <address className="mt-5 text-lg not-italic text-[#262F59] opacity-60 sm:text-lg">
              JYSK <br /> Sødalsparken 18 <br /> 8220, Brabrand
              </address>
            </div>
          </div>

          <div className="w-[520px] self-center text-lg leading-normal text-primary-1 xl:max-w-[470px] lg:ml-8 lg:max-w-[530px] md:ml-0 md:mt-5 md:w-full md:max-w-none sm:text-lg">
            <p>
              The Kubernetes Community Days in Denmark will be held at JYSK, Brabrand.
            </p>
            {/* <p className="mt-5">
            Do not miss out on the opportunity of fun, to connect with fellow attendees and continue the conversation at the networking event.
            </p> */}
            <p className="mt-5 font-bold">We cannot wait to see you there!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
