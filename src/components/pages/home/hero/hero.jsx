import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/kcd2024.png';

const TITLE = 'Kubernetes Community Days Denmark';


const DESCRIPTION = 'KCD Denmark is coming to Copenhagen November 19-20. \n Get your Blind Bird ticket now and experience the power of community in Denmark! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';


const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:pt-24 md:pb-[500px] sm:pb-[520px] [@media(max-width:600px)]:pb-[430px] [@media(max-width:460px)]:pb-[420px]">
    <div className="container relative md:flex md:flex-col">
      <div className="absolute top-0 -left-[40%] h-[566px] w-[566px] translate-x-1/2 md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative md:flex md:flex-col md:items-center md:text-center">
        {/* <time
          className="rounded-3xl bg-red px-4 py-2 text-sm font-bold leading-none text-white"
          dateTime="2023-06-14"
        >
          November 14, 2023
        </time> */}
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>
        {
          <p className="mt-10 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
            {/* <Button
              className="rounded-3xl bg-red px-20 py-2 text-xl font-bold leading-none text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
              to="https://kcddenmark-1.ticketbutler.io/e/kcd-denmark-2023"
              size="lg"
              target="_blank"
            >
              Get your ticket
            </Button> */}
            <Button
              className="rounded-3xl bg-red px-20 py-2 text-xl font-bold leading-none text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
              to="https://kcddenmark-3.ticketbutler.io/en/e/kcd-denmark-2024-1/"
              size="lg"
              theme="secondary"
            >Blind Bird Tickets</Button>
            {/* <Button
              className="mt-5 rounded-3xl bg-red px-20 py-2 text-xl font-bold leading-none text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
              to="/venue"
              size="lg"
              theme="secondary"
            >
              Getting There
            </Button> */}
          </p>
        }
      </div>
      <img
        className="absolute -top-44 -left-20 translate-x-1/4 -z-10
        xl:-top-28 xl:-left-8 xl:w-full xl:max-w-[920px] xl:translate-x-1/3
        lg:left-[28%] lg:-top-16 lg:w-[950px] lg:translate-x-1
        md:top-[0px] md:-translate-x-1/4 md:translate-y-1/2 
        sm:top-[0px] sm:left-1/4
        [@media(max-width:600px)]:top-[-20%] 
        [@media(max-width:600px)]:w-[900px] 
        [@media(max-width:600px)]:left-[-20%]
        [@media(max-width:460px)]:top-[-10%] 
        [@media(max-width:460px)]:w-[900px]
        [@media(max-width:460px)]:left-[-50%]
        "
        src={illustration}
        width={1090}
        height="auto"
        loading="eager"
        alt="Illustration"
        style={{zIndex: -1000}}
      />
    </div>
  </section>
);

export default Hero;
