import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Banner from '../components/Banner/Banner';
import ErrorFallback from '../components/ErrorBoundary';
// import CoinsTable from '../components/CoinsTable';
const CoinsTable = React.lazy(() => import('../components/CoinsTable'));

const Homepage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <CoinsTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Homepage;
