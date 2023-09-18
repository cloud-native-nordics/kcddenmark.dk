/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/venue/hero';
import Hotel from 'components/pages/venue/hotel';
import Transport from 'components/pages/venue/transport';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Venue = () => (
  <Layout>
    <Hero />
    <Transport />
    <Hotel />
  </Layout>
);

export default Venue;

export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.venue} pathname={pathname} />;
