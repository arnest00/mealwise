import Head from 'next/head';
import React from 'react';

import Navbar from '../molecules/Navbar';

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Head>
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
