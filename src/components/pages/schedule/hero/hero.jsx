import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import { useSessionizeSchedule } from 'hooks/use-sessionize';

const TITLE = 'Conference Schedule';
const DESCRIPTION =
  "Get ready for an action-packed day. The schedule will be announced shortly with two tracks and more than 25 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";
const DESCRIPTION_ANNOUNCED =
  "Get ready for two action-packed days. With two tracks and more than 25 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

//"Check the schedule of KCD Denmark 2023 and watch the presentation recordings by expanding the details of your favorite sessions.";
//"Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Hero = () => {
  const { schedule } = useSessionizeSchedule();
  const [announcement, setAnnouncement] = useState(DESCRIPTION);

  useEffect(() => {
    if (schedule.length > 0) {
      setAnnouncement(DESCRIPTION_ANNOUNCED);
    }
  });

  return (
    <section className="safe-paddings pb-10 pt-24 lg:pt-[4.5rem] md:pb-4 md:pt-16 sm:py-8">
      <div className="container mt-4 text-center text-primary-1 sm:px-7">
        <h1
          className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <p className="mx-auto mt-9 max-w-[865px] text-2xl leading-normal md:mt-6 md:text-xl sm:text-lg">
          {announcement}
        </p>
        <Button
          className="mt-10 rounded-3xl bg-red text-xl font-bold leading-none text-white shadow-xl hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
          size="lg"
          to="https://kcddenmark-3.ticketbutler.io/en/e/kcd-denmark-2024-1/"
          target="_blank"
        >
          Get your ticket
        </Button>
        {/* <Button
        className="mt-10 shadow-xl bg-red text-white hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
        size="lg"
        to="/workshops"
      >
        Check the workshops
      </Button> */}
      </div>
    </section>
  );
};

export default Hero;
