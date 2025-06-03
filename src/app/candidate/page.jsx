import React, { Suspense } from 'react';
import Candidate from './Candidate';

const TermsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Candidate/>
    </Suspense>
  );
};

export default TermsPage;
