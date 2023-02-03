import React, { lazy, Suspense } from 'react';
//import AliceCarousel from 'react-alice-carousel';

const MotionCarousel = lazy(() => import('react-alice-carousel'));

export const AnimatedCarousel = (props) => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionCarousel {...props} />
  </Suspense>
);
