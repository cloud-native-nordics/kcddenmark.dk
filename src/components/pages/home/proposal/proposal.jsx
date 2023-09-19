import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Call for Proposal';
const DESCRIPTION = "Call for Proposals are now closed. We are currently in review of those proposals which were submitted. Watch this space for the schedule release, or follow us on LinkedIn/X."
  //"If you are an expert or newcomer in the cloud native computing world and would like to share your knowledge and experience with the community, we encourage you to submit a proposal. Our committee is looking for diverse topics and speakers, so don't hesitate to submit your ideas. We can't wait to see what the community offers, and we look forward to receiving your submissions.";

const Proposal = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container-md text-center text-primary-1">
      <div className="absolute left-1/2 top-0 h-[529px] w-[529px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h2 className="text-6xl font-bold leading-tight" id={LINKS.proposal.id}>
          {TITLE}
        </h2>
        <p className="mt-8 text-2xl leading-normal sm:text-lg">{DESCRIPTION}</p>

        <div className="container py-10 mx-auto overflow-x-auto">
  <table className="table-auto text-base border-collapse border mx-auto">
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        <th className="px-4 py-4">Activity</th>
        <th className="px-4 py-4">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-4 py-4 font-medium">CFP Opens</td>
        <td className="px-4 py-4">1st August, 2023</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-4 py-4 font-medium"><strong>CFP Closes</strong></td>
        <td className="px-4 py-4"><strong>15th September, 2023</strong></td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-4 py-4 font-medium">CFP Notifications</td>
        <td className="px-4 py-4">1st October, 2023</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-4 py-4 font-medium">Schedule Announced</td>
        <td className="px-4 py-4">7th October, 2023</td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-4 py-4 font-medium">Slides Submission</td>
        <td className="px-4 py-4">7th November, 2023</td>
      </tr>
    </tbody>
  </table>
</div>


      </div>
    </div>
  </section>
);

export default Proposal;
