import Head from 'next/head';

import Navbar from '../molecules/Navbar';

const Layout = ({ children }) => {
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
