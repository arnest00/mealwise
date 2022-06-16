import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Button from '../../components/atoms/Button';
import Modal from '../../components/atoms/Modal';
import PageHeader from '../../components/atoms/PageHeader';
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
  const [modal, setModal] = useState({ open: false, message: '' });
  const router = useRouter();

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
    createShoppingList(plannedMeals);

    setShoppingDay(e.target.value);
  };

  const handleCreateShoppingList = () => {
    createShoppingList(plannedMeals);
    setModal({
      open: true,
      message: 'Shopping list created!',
    });
  };

  const checkDeleteMealPlan = () => {
    setModal({
      open: true,
      message: 'Delete meal plan?',
    });
  };

  const handleDeleteMealPlan = () => {
    deleteMealPlan();
    deletePlanNotes();
    setModal({ open: false, message: '' });
  };

  const handleCloseModal = () => {
    setModal({ open: false, message: '' });
  };

  const handleNavigateToShoppingList = () => {
    setModal({ open: false, message: '' });
    router.push('/shopping-list');
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

  const shoppingListCreatedModalButtons = (
    <>
      <Button
        buttonType="button"
        buttonName="check it out"
        modifier="link"
        onClick={handleNavigateToShoppingList}
      />
      <Button
        buttonType="button"
        buttonName="add more meals"
        onClick={handleCloseModal}
      />
    </>
  );

  const deleteMealPlanModalButtons = (
    <>
      <Button
        buttonType="button"
        buttonName="yes, delete it"
        modifier="destructive"
        onClick={handleDeleteMealPlan}
      />
      <Button
        buttonType="button"
        buttonName="no, keep it"
        onClick={handleCloseModal}
      />
    </>
  );

  return (
    <Layout>
      <PageHeader>
        <h1 className="title text-align-center">Meal Plan</h1>
      </PageHeader>

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

        <div className="obj-grid-two-cols">
          <Button
            buttonType="button"
            buttonName="create shopping list"
            onClick={handleCreateShoppingList}
          />

          <Button
            buttonType="button"
            buttonName="delete meal plan"
            modifier="destructive"
            onClick={checkDeleteMealPlan}
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

      {modal.open && (
        <Modal
          onClick={handleCloseModal}
        >
          <p>{modal.message}</p>
          <div className="obj-grid-two-cols">
            {(modal.message === 'Shopping list created!') && shoppingListCreatedModalButtons }
            {(modal.message === 'Delete meal plan?') && deleteMealPlanModalButtons }
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default PlannerPage;
