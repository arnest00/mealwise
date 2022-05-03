import Head from 'next/head';
import React from 'react';

import Navbar from '../molecules/Navbar';

const Layout: React.FC<{}> = ({ children }) => (
  <div className="layout">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <title>mealwise</title>
    </Head>

    <header className="layout__header">
      <Navbar />
    </header>

    <main className="layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
