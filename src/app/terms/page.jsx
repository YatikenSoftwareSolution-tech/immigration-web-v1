import React, { Suspense } from 'react';
import Terms from './Terms';

const TermsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Terms/>
    </Suspense>
  );
};

export default TermsPage;
