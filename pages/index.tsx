import { NextPage } from 'next';
import Head from 'next/head';

import PageHeader from '../components/atoms/PageHeader';
import Layout from '../components/organisms/Layout';

const HomePage: NextPage = () => (
  <Layout>
    <Head>
      <meta name="description' content='Meal planning app bootstrapped by create-next-app" />
    </Head>

    <PageHeader>
      <h1 className="display text-align-center">
        mealwise
      </h1>
    </PageHeader>
  </Layout>
);

export default HomePage;
