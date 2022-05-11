import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../../components/organisms/Layout';

const AddMealPage: NextPage = () => {
  const router = useRouter();
  const { day } = router.query;

  return (
    <Layout>
      <h1 className="title text-align-center">
        Add Meal to
        {' '}
        {day}
      </h1>
    </Layout>
  );
};

export default AddMealPage;
