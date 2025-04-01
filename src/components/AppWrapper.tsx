
import React from 'react';
import BlogProvider from '../BlogProvider';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <>
      <BlogProvider />
      {children}
    </>
  );
};

export default AppWrapper;
