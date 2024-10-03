import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import JobListings from '../components/JobListings';
import CallToAction from '../components/CallToAction';

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