import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import Button from '../../components/atoms/Button';

import Layout from '../../components/organisms/Layout';
import Planner from '../../components/organisms/Planner';

import {
  selectShoppingDay,
  getShoppingDay,
  createMealPlan,
  getAllPlannedMeals,
  createShoppingList,
} from '../../services/dbService';

type MealPlan = {
  [key: number]: { id: string, recipeId: string, recipeName: string }[]
};

const PlannerPage: NextPage = () => {
  const [shoppingDay, setShoppingDay] = useState('');
  const [plannedMeals, setPlannedMeals] = useState<MealPlan>({});

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
    selectShoppingDay(e.target.value);
    createMealPlan();

    setShoppingDay(e.target.value);
  };

  const handleCreateShoppingList = () => {
    createShoppingList(plannedMeals);
  };

  useEffect(() => {
    const getAndSetShoppingDay = async () => {
      const savedShoppingDay = await getShoppingDay();

      setShoppingDay(savedShoppingDay);
    };

    const getAndSetPlannedMeals = async () => {
      try {
        const currentPlannedMeals = await getAllPlannedMeals();

        setPlannedMeals(currentPlannedMeals);
      } catch (err) {
        setPlannedMeals({
          0: [],
          1: [],
          2: [],
          3: [],
          4: [],
          5: [],
          6: [],
          7: [],
        });
      }
    };

    getAndSetShoppingDay();
    getAndSetPlannedMeals();
  }, [shoppingDay, plannedMeals]);

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

        <Button
          buttonType="button"
          buttonName="create shopping list"
          onClick={handleCreateShoppingList}
        />
      </div>

      {shoppingDay && (
        <Planner
          daysOfTheWeek={DAYS_OF_THE_WEEK}
          shoppingDay={shoppingDay}
          plannedMeals={plannedMeals}
        />
      )}
    </Layout>
  );
};

export default PlannerPage;
