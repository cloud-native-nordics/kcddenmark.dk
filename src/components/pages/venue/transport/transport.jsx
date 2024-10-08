import React from 'react';

import Link from 'components/shared/link';
import Bellamap from './images/bellagroup-map-1080x1080.webp';

const TITLE = 'Transport Information';

const Transport = () => (
  <section className="safe-paddings mb-20 bg-white py-20 md:py-24 sm:py-16">
    <div className="container-md ">
      <h2 id="Transport" className="mb-10 text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>

      <div className="mb-10 text-2xl text-primary-1 sm:text-lg">
        Public Transport
      </div>

      <div style={{textAlign: 'center'}}>
      </div>


      <div className="mt-7">
        <span className="font-bold">Metro</span> 
        <p className='pt-5 pb-5'>
        Take the metro M1 between Vandløse and Vestamager, and get off at the Bella Center st. <br  />
        It is a 5 minute walk from the metro to Bella Center.
        </p>
        <p className='pt-5 pb-5'>
        <span className="font-bold">Bus</span> 
        <p className='pt-5 pb-5'>
        It's possible to take multiple busses, look at <Link
                to="rejseplanen.dk"
                className="pt-5 pb-5 font-semibold sm:text-xl"
                theme="primary"
              >
                Rejseplanen
          </Link> for more information on which bus to take.
        </p>
        <p className='pt-5 pb-5'>
        <span className="font-bold">Train</span> 
        <p className='pt-5 pb-5'>
        Using regional trains it's possible to switch to the Metro at Ørestad St. and take the metro to Bella Center st.
        </p>
        </p>
          <Link
                to="https://www.bellacenter.dk/udstiller/transport-parkering"
                className="text-2xl font-semibold sm:text-xl"
                theme="primary"
              >
                Visit Bella Center's website for more information
          </Link>
        </p>


        <div className="mb-10 text-2xl text-primary-1 sm:text-lg">
        Car
      </div>
      <p className='pt-5 pb-5'>
        It's possible to park near the venue, parking spaces are marked on the map.
        </p>
        <br />
        <img src={Bellamap} width={500}></img>

      


      <div style={{textAlign: 'center'}}>
      </div>
      </div>
      </div>
  </section>
);

export default Transport;
