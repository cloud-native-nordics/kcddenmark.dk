import React from 'react';

import Link from 'components/shared/link';

const TITLE = 'Hotel Information';

const Hotel = () => (
  <section className="safe-paddings bg-white py-20 md:py-24 sm:py-16 mb-20">
    <div className="container-md ">
      <h2 className="mb-10 text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>

      <div className="mb-10 text-2xl text-primary-1 sm:text-lg">
        <p>
          <span className="font-bold">Kubernetes Community Days Denmark</span> along with <span>JYSK</span> have arranged hotels
          in and around Aarhus with discounted rates for those who wish to stay over. Below you will
          find accommodation with{'  '}
          <Link
            to="https://www.scandichotels.com/hotels/denmark/aarhus"
            className="font-semibold sm:text-xl"
            theme="primary"
          >Scandic Hotels
          </Link>
          . There are however very limited amount of discounted rates available!
        </p>
      </div>

      <div className="mt-7">
        <p>
          <Link
            to="https://www.scandichotels.com/hotels/denmark/aarhus/scandic-the-mayor"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Scandic Aarhus City
          </Link>
          <br />
          Østergade 10, 8000 Aarhus - 89 31 81 00 - aarhuscity@scandichotels.com
        </p>
      </div>
      <div className="mt-7">
        <p>
          <Link
            to="https://www.scandichotels.com/hotels/denmark/aarhus/scandic-the-mayor"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Scandic Århus
          </Link>
          <br />
          Rytoften 3, 8210 Aarhus - 86 15 68 44 - aarhus@scandichotels.com
        </p>
      </div>
      <div className="mt-7">
        <p>
          <Link
            to="https://www.scandichotels.com/hotels/denmark/aarhus/scandic-the-mayor"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Scandic The Mayor
          </Link>
          <br />
          Banegårdspladsen 14, 8000 Aarhus - 87 32 01 00 - themayor@scandichotels.com
        </p>
      </div>

      <div className="mt-7">
        <p>
          Booking should be made direct via mail/phone and to take advantage of the discounted rate,
          let them know you are attending "KCD at JYSK". The
          closest hotel is{' '}
          <Link
            to="https://www.scandichotels.com/hotels/denmark/aarhus/scandic-aarhus-vest"
            className="font-semibold sm:text-xl"
            theme="primary"
          >
            Scandic Aarhus Vest
          </Link>.          
        </p>
      </div>
    </div>
  </section>
);

export default Hotel;
