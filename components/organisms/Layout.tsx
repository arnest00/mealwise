import Head from 'next/head';
import React from 'react';

import Navbar from '../molecules/Navbar';

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>mealwise</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
