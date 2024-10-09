import React from 'react';

import Link from 'components/shared/link';
import Bellamap from './images/bellagroup-map-1080x1080.webp';

const TITLE = 'Transport Information';

const Transport = () => (
  <section className="safe-paddings mb-20 bg-white py-20 md:py-24 sm:py-16">
    <div className="container-md ">
      <h2 id="Transport" className="mb-10 text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>

      <div className="mb-1 text-2xl text-primary-1 sm:text-lg">
      For a more detailed transportation guide, please visit Bella Center's website
      <Link
                to="https://www.bellacenter.dk/en/visitor/getting-here"
                className="pl-1 text-2xl font-semibold sm:text-xl"
                theme="primary"
              >
              here
          </Link>
      </div>

      <div className="pt-5 mb-1 text-2xl font-semibold text-primary-1 sm:text-lg">
        Public Transport
      </div>

      <div style={{textAlign: 'center'}}>
      </div>


      <div className="mt-7">
        <span className="font-bold">Metro</span> 
        <p className='pt-5'>
        Take the metro M1 between Vandløse and Vestamager, and get off at the Bella Center st. <br  />
        It is a 5 minute walk from the metro to Bella Center.
        </p>
        <p className='pt-5 pb-5'>
        <span className="font-bold">Bus</span> 
        <p className='pt-5'>
        It's possible to take multiple bus lines towards Bella Center, search at <Link
                to="https://www.rejseplanen.dk/webapp/?language=en_EN"
                className="pt-5 font-semibold sm:text-xl"
                theme="primary"
              >
                Rejseplanen
          </Link> for more information on which bus to take.
        </p>
        <p className='pt-5'>
        <span className="font-bold">Train</span> 
        <p className='pt-5 pb-5'>
        When using regional trains, it is possible to switch to the Metro at Ørestad St. and take the Metro to Bella Center st.
        </p>
      < br />



        <div className="mb-1 text-2xl font-semibold text-primary-1 sm:text-lg">
        Car
      </div>
      <p className='pt-5 pb-5'>
        It's possible to park near the venue, parking spaces are marked on the map, we recommend parking near entrance 4.
        </p>
        <img src={Bellamap} width={500}></img>
      
        </p>
          
        </p>
      <div style={{textAlign: 'center'}}>
      </div>
      </div>
      </div>
  </section>
);

export default Transport;
