/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

import { deletePlannedMeal, addNoteToPlan } from '../../services/dbService';

import Button from '../atoms/Button';
import IconButton from '../atoms/IconButton';
import InputGroup from '../atoms/InputGroup';
import Note from './Note';

type DayContainerProps = {
  dayId: number,
  dayName: string,
  dayMeals: { id: string, recipeId: string, recipeName: string }[] | undefined,
  dayNotes: { id: string, content: string }[] | undefined,
};

const DayContainer = ({
  dayName, dayId, dayMeals, dayNotes,
}: DayContainerProps) => {
  const [meals, setMeals] = useState<{ id: string, recipeId: string, recipeName: string }[]>();
  const [notes, setNotes] = useState<{ id: string, content: string }[]>();
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteValue, setNewNoteValue] = useState('');
  const router = useRouter();

  const handleAddMeal = () => {
    router.push(
      {
        pathname: '/planner/add',
        query: { id: dayId, day: dayName },
      },
      '/planner/add',
    );
  };

  const handleDeletePlannedMeal = (dayOfMeal: number, id: string) => {
    deletePlannedMeal(dayOfMeal, id);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewNoteValue(e.currentTarget.value);
  };

  const handleAddNewNote = () => {
    setIsAddingNote(true);
  };

  const handleSaveNewNote = (dayOfNote: number, id: string, content: string) => {
    addNoteToPlan(dayOfNote, id, content);
    setIsAddingNote(false);
    setNewNoteValue('');
  };

  useEffect(() => {
    setMeals(dayMeals);
    setNotes(dayNotes);
  }, [dayMeals, dayNotes]);

  return (
    <section>
      <h3 className="bigger text-align-center">{dayName}</h3>

      {meals?.map((meal: { id: string, recipeId: string, recipeName: string }) => (
        <div key={meal.id} className="obj-grid-end-button">
          <Link href={`/recipes/${meal.recipeId}`}>
            <a>{meal.recipeName}</a>
          </Link>
          <IconButton
            minus
            onClick={() => handleDeletePlannedMeal(dayId, meal.id)}
          />
        </div>
      ))}

      <Button
        buttonType="button"
        buttonName="add meal"
        modifier="link"
        onClick={handleAddMeal}
      />

      <h4 className="bigger">{`${dayName} Notes`}</h4>

      {notes?.map((note: { id: string, content: string }) => (
        <Note
          key={note.id}
          dayId={dayId}
          id={note.id}
          content={note.content}
        />
      ))}

      {isAddingNote && (
        <div className="obj-grid-end-button">
          <InputGroup
            inputName="new note"
            inputType="text"
            isRequired
            onChange={handleNoteChange}
            value={newNoteValue}
          />
          <IconButton
            plus
            onClick={() => handleSaveNewNote(dayId, nanoid(), newNoteValue)}
          />
        </div>
      )}

      {!isAddingNote && (
        <Button
          buttonType="button"
          buttonName="add note"
          modifier="link"
          onClick={handleAddNewNote}
        />
      )}
    </section>
  );
};

export default DayContainer;
