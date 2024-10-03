import React from 'react';
import Layout from '../components/Layout.tsx';
import Hero from '../components/Hero.tsx';
import JobListings from '../components/JobListings.tsx';
import CallToAction from '../components/CallToAction.tsx';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <JobListings />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;