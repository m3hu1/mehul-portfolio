// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#3C82F6"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default Providers;