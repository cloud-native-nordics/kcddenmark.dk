import React from 'react';

import Link from 'components/shared/link';

const TITLE = 'Hotel Information';

const Hotel = () => (
  <section className="safe-paddings bg-white py-1 md:py-1 sm:py-1 mb-20">
    <div className="container-md ">
      <h2 className="mb-10 text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>

      <div className="mt-7">
        <p>
          <Link
            to="https://www.marriott.com/en-us/hotels/cphac-ac-hotel-bella-sky-copenhagen/overview/"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Bella Sky
          </Link>
          <br />
          Martha Christensens Vej 5, 2300 Copenhagen - Venue Hotel

        </p>
      </div>
      <div className="mt-7">
        <p>
          <Link
            to="https://www.booking.com/hotel/dk/ibis-styles-copenhagen-orestad.en-gb.html"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Ibis Ørestad
          </Link>
          <br />
          Ørestads Boulevard 47, 2300 Copenhagen - Close to the venue
        </p>
      </div>
    </div>
  </section>
);

export default Hotel;
