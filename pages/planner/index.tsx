import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import Layout from '../../components/organisms/Layout';
import Planner from '../../components/organisms/Planner';

import { addShoppingDay, getShoppingDay } from '../../services/dbService';

const PlannerPage: NextPage = () => {
  const [shoppingDay, setShoppingDay] = useState('');

  const DAYS_OF_THE_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleSelect = (e: { target: any }) => {
    addShoppingDay(e.target.value);

    setShoppingDay(e.target.value);
  };

  useEffect(() => {
    const getAndSetData = async () => {
      const savedShoppingDay = await getShoppingDay();

      setShoppingDay(savedShoppingDay);
    };

    getAndSetData();
  }, [shoppingDay]);

  return (
    <Layout>
      <h1 className="title text-align-center">Meal Plan</h1>

      <div>
        <label htmlFor="shoppingDay">
          Select the day of the week when you go shopping:

          <select
            name="shoppingDay"
            onChange={handleSelect}
            value={shoppingDay}
          >
            <option aria-label="none" value="" />
            {DAYS_OF_THE_WEEK.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
      </div>

      {shoppingDay && (
        <Planner
          daysOfTheWeek={DAYS_OF_THE_WEEK}
          shoppingDay={shoppingDay}
        />
      )}
    </Layout>
  );
};

export default PlannerPage;
