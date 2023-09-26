/* eslint-disable react/prop-types */
import React from 'react';

import Proposal from 'components/pages/home/proposal';
import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
import Schedule from 'components/pages/home/schedule';
import Speakers from 'components/pages/home/speakers';
import Sponsors from 'components/pages/home/sponsors';
import Welcome from 'components/pages/home/welcome';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = ({ location }) => (
  <Layout homepage>
    <Hero />
    <Welcome />
    {/* <Proposal /> */}
    <Speakers location={location} />
    {/*<Schedule /> */}
    {<Sponsors />}
    {/* <Partners /> */}
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
