/* eslint-disable react/prop-types */
import React from 'react';

import Proposal from 'components/pages/home/proposal';
import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
import Schedule from 'components/pages/home/schedule';
import Speakers from 'components/pages/home/speakers';
import Sponsors from 'components/pages/home/sponsors';
import Venue from 'components/pages/home/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hotel from 'components/pages/home/hotel';

const HomePage = ({ location }) => (
  <Layout homepage>
    <Hero />
    <Venue />
    <Proposal />
    <Hotel />
    {/* <Speakers location={location} />
    <Schedule /> */}
    {/* <Sponsors /> */}
    {/* <Partners /> */}
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
