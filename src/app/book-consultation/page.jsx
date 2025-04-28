
import React, { Suspense } from "react";

import MainPage from "./components/MainPage";

const Consultation = async () => {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPage/>
    </Suspense>
  );
};

export default Consultation;
