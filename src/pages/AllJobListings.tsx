import React from 'react';
import Layout from '../components/Layout';
import JobListings from '../components/JobListings';

const AllJobListings: React.FC = () => {
  return (
    <Layout>
      <JobListings />
    </Layout>
  );
};

export default AllJobListings;