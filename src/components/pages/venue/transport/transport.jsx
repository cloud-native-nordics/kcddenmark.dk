import React from 'react';

import Link from 'components/shared/link';
import Button from 'components/shared/button';

const TITLE = 'Transport Information';

const Transport = () => (
  <section className="safe-paddings mb-20 bg-white py-20 md:py-24 sm:py-16">
    <div className="container-md ">
      <h2 id="Transport" className="mb-10 text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>

      <div className="mb-10 text-2xl text-primary-1 sm:text-lg">
        IMPORTANT: There is no parking available at the venue, however we have arranged free parking in the near
        by shopping center City Vest. This is however a 3km walk, so we recommend using our shuttle bus service.
      </div>

      <div style={{textAlign: 'center'}}>

      <Button
        className="mt-10 shadow-xl bg-red text-white hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
        to="/shuttle-bus"
        size="lg"
      >
       Shuttle Bus Service
      </Button>
      </div>


      <div className="mt-7">
        <p className='pt-5 pb-5'>
        <span className="font-bold">Public Transportation by bus</span> 
        <p className='pt-5 pb-5'>
        Take bus 11, 12 or 113 to the stop “Sødalsvej/Silkeborgvej”, follow the footpath between the
        buildings on the north side of Silkeborgvej and turn left for JYSK Head Office.
        </p>
        <img src='https://www.jysk.com/sites/jysk.com/files/inline-images/By%20bus.png' width={500}></img>
        </p>
        <span className="font-bold">By car (drop off only)</span>

<p className="pt-5 pb-5">
    From Aarhus: When driving from the city centre at Silkeborgvej, turn right at Bagerivej,
    follow the right turn at Sødalsparken and JYSK is on the right hand.
  </p>
  <p className="pt-5 pb-5">
    From Silkeborg/E45: Follow Herningmotorvejen until the roundabout, take the first exit
    towards Brabrand, take the second exit in the second roundabout towards Brabrand at
    Silkeborgvej, follow Silkeborgvej for 900 metres and turn left at Bagerivej, follow the
    right turn at Sødalsparken and JYSK is on the right hand.
  </p>
  <br />
  <img src="https://www.jysk.com/sites/jysk.com/files/inline-images/By%20car.png" width={500}></img>

      </div>
    </div>
  </section>
);

export default Transport;
