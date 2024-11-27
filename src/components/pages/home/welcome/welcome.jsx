import React from 'react';

const Welcome = () => (
  <section className="safe-paddings bg-white py-10 md:py-24 sm:py-16">
    <div className="container-md">
      <div className="text-2xl text-primary-1 sm:text-lg">
        {/* <p className="mt-0 text-center text-4xl font-bold leading-tight pb-8">Ticket sales are now open!</p> */}

        {/* <p className="mt-0 mb-5 text-center text-4xl font-bold leading-tight pb-10">
        <web-component-embed id="zXJRWk" app_slug="countdown-timer"></web-component-embed><script src="https://app.powr.io/assets/webcomponent.js"></script>
        </p> */}

        <p className="mt-0 text-center text-4xl font-bold leading-tight pb-8">The KCD Denmark organizers would like to thank <br /> all attendees, speakers, partners & sponsors<br /> who joined our 2024 conference!</p>


        <p>
          <span className="font-bold">KCDs</span> are a global,
          community-organized events that gather adopters and technologists from open source and
          Cloud Native communities for education, collaboration, and networking. KCDs are
          supported by the <a href="https://cncf.io"><span className="font-bold">Cloud Native
            Computing Foundation</span></a> (CNCF).
        </p>
        <p className="mt-7">
          This years conference, was the second <span className="font-bold">KCD</span> event in <span className="font-bold">Denmark</span>, and we are greatfull for all the kind words, you have given us upon the event. 
          It was a blast to meet all the Cloud Native professionals and experts during the two day event. 
          We're also proud to announce that all <span className="font-bold">350.000DKK</span> in profits from the event were donated to <a href="https://codingpirates.dk"><span className="font-bold">Coding Pirates</span></a>, a non-profit organization 
          dedicated to developing IT creativity in children.
        </p>

      </div>
    </div>
  </section>
);

export default Welcome;
