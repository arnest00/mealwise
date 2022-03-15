import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const {
    container, main, title,
  } = styles;

  return (
    <div className={container}>
      <Head>
        <title>mealwise</title>
        <meta name="description" content="Meal planning app generated by create-next-app" />
      </Head>

      <main className={main}>
        <h1 className={title}>
          mealwise
        </h1>
      </main>
    </div>
  );
};

export default Home;
