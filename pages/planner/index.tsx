import React, { useState } from 'react';
import { NextPage } from 'next';

import Layout from '../../components/organisms/Layout';
import Planner from '../../components/organisms/Planner';

const PlannerPage: NextPage = () => {
  const [shoppingDay, setShoppingDay] = useState(null);

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
    setShoppingDay(e.target.value);
  };

  return (
    <Layout>
      <h1 className="title text-align-center">Meal Plan</h1>

      <div>
        <label htmlFor="shoppingDay">
          Select the day of the week when you go shopping:

          <select
            name="shoppingDay"
            onChange={handleSelect}
          >
            <option aria-label="none" value="" />
            {DAYS_OF_THE_WEEK.map((day) => (
              <option key={day} value={day}>{day}</option>
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
