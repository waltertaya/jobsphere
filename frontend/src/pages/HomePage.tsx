import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import HighDemandJobs from '../components/PopularJobs';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <HighDemandJobs />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;