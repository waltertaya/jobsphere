import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllJobListings from './pages/AllJobListings';
import SeeMoreJob from './pages/seeMoreJob';
import AuthPage from './pages/authPages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-listings" element={<AllJobListings />} />
        <Route path="/see-more" element={<SeeMoreJob />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;