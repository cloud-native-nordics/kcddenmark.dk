import React from 'react';

const Welcome = () => (
  <section className="safe-paddings bg-white py-20 md:py-24 sm:py-16">
    <div className="container-md">
      <div className="text-2xl text-primary-1 sm:text-lg">
        {/* <p className="mt-0 text-center text-4xl font-bold leading-tight pb-8">Ticket sales are now open!</p> */}
        
        {/* <p className="mt-0 mb-5 text-center text-4xl font-bold leading-tight pb-10">
        <web-component-embed id="zXJRWk" app_slug="countdown-timer"></web-component-embed><script src="https://app.powr.io/assets/webcomponent.js"></script>
        </p> */}

        <p className="mt-0 text-center text-4xl font-bold leading-tight pb-8">KCD Denmark is coming to Copenhagen in 2024. Stay tuned!</p>
        
        <p>
          <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
          community-organized events that gather adopters and technologists from open source and
          cloud native communities for education, collaboration, and networking. KCDs are
          supported by the <a href="https://cncf.io"><span className="font-bold">Cloud Native
            Computing Foundation</span></a> (CNCF).
        </p>
        <p className="mt-7">
          This is the first KCD in <span className="font-bold">Denmark</span>, and we are excited
          to bring the community together. We want to provide a platform for professionals and
          experts from all levels and backgrounds to learn, network, and share their knowledge on
          all things cloud native. Furthermore, all profits from the event will be donated
          to <a href="https://codingpirates.dk"><span className="font-bold">Coding Pirates</span></a>,
          a non-profit organization that nurtures IT creativity in children.
        </p>

      </div>
    </div>
  </section>
);

export default Welcome;
