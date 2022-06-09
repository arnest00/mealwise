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
  deleteMealPlan,
  createPlanNotes,
  getAllPlannerNotes,
  deletePlanNotes,
} from '../../services/dbService';

type MealPlan = {
  [key: number]: { id: string, recipeId: string, recipeName: string }[]
};

type Notes = {
  [key: number]: { id: string, content: string }[]
};

const PlannerPage: NextPage = () => {
  const [shoppingDay, setShoppingDay] = useState('');
  const [plannedMeals, setPlannedMeals] = useState<MealPlan>({});
  const [plannerNotes, setPlannerNotes] = useState<Notes>({});

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
    createPlanNotes();

    setShoppingDay(e.target.value);
  };

  const handleCreateShoppingList = () => {
    createShoppingList(plannedMeals);
  };

  const handleDeleteMealPlan = () => {
    deleteMealPlan();
    deletePlanNotes();
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

    const getAndSetPlannerNotes = async () => {
      try {
        const currentPlannerNotes = await getAllPlannerNotes();

        setPlannerNotes(currentPlannerNotes);
      } catch (err) {
        setPlannerNotes({
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
    getAndSetPlannerNotes();
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

        <div className="grid-two-col">
          <Button
            buttonType="button"
            buttonName="create shopping list"
            onClick={handleCreateShoppingList}
          />

          <Button
            buttonType="button"
            buttonName="delete meal plan"
            modifier="--bad-job"
            onClick={handleDeleteMealPlan}
          />
        </div>
      </div>

      {shoppingDay && (
        <Planner
          daysOfTheWeek={DAYS_OF_THE_WEEK}
          shoppingDay={shoppingDay}
          plannedMeals={plannedMeals}
          plannerNotes={plannerNotes}
        />
      )}
    </Layout>
  );
};

export default PlannerPage;
