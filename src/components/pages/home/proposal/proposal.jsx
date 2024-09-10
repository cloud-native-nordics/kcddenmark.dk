import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Call for Proposal';

const Proposal = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container-md text-center text-primary-1">
      <div className="absolute left-1/2 top-0 h-[529px] w-[529px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h2 className="text-6xl font-bold leading-tight" id={LINKS.proposal.id}>
          {TITLE}
        </h2>
        <p className="mt-8 text-2xl leading-normal sm:text-lg">
          Call for Proposals are now closed. We are currently in review of those proposals which
          were submitted. Watch this space for the schedule release, or follow us on{' '}
          <a href="https://www.linkedin.com/company/kubernetes-community-days-denmark/">LinkedIn</a>.
        </p>

        <div className="container mx-auto overflow-x-auto py-10">
          <table className="mx-auto table-auto border-collapse border text-base">
            <thead className="dark:border-neutral-500 border-b font-medium">
              <tr>
                <th className="px-4 py-4">Activity</th>
                <th className="px-4 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dark:border-neutral-500 border-b">
                <td className="px-4 py-4 font-medium">CFP Opens</td>
                <td className="px-4 py-4">1st July, 2024</td>
              </tr>
              <tr className="dark:border-neutral-500 border-b">
                <td className="px-4 py-4 font-medium">
                  <strong>CFP Closes</strong>
                </td>
                <td className="px-4 py-4">
                  <strong>1st September, 2024</strong>
                </td>
              </tr>
              <tr className="dark:border-neutral-500 border-b">
                <td className="px-4 py-4 font-medium">CFP Notifications</td>
                <td className="px-4 py-4">20th September, 2024</td>
              </tr>
              <tr className="dark:border-neutral-500 border-b">
                <td className="px-4 py-4 font-medium">Schedule Announced</td>
                <td className="px-4 py-4">1st October, 2024</td>
              </tr>
              <tr className="dark:border-neutral-500 border-b">
                <td className="px-4 py-4 font-medium">Slides Submission</td>
                <td className="px-4 py-4">12th November, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default Proposal;
