import React, { Suspense } from 'react';
import Payment from './Payment';

const TermsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Payment/>
    </Suspense>
  );
};

export default TermsPage;
