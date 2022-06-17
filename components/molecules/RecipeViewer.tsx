/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import { deleteRecipe } from '../../services/dbService';

import Button from '../atoms/Button';
import Modal from '../atoms/Modal';
import PageHeader from '../atoms/PageHeader';

const RecipeViewer = ({
  id,
  name,
  description,
  link,
  category,
  ingredients,
}: IRecipe) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const checkDeleteRecipe = () => {
    setModalIsOpen(true);
  };

  const handleDeleteRecipe = () => {
    router.push('/recipes');
    deleteRecipe(id);
  };

  return (
    <article>
      <PageHeader>
        <h3>{`Viewing ${name}`}</h3>
      </PageHeader>

      <div className="obj-page-content">
        <h4>{category}</h4>

        <p>{description}</p>

        {link && (
          <Link href={link}>
            <a>Link to recipe</a>
          </Link>
        )}

        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.content}</li>
          ))}
        </ul>

        <div className="obj-grid-two-cols">
          <Button
            buttonType="button"
            buttonName="delete recipe"
            modifier="destructive"
            onClick={checkDeleteRecipe}
          />
        </div>
      </div>

      {modalIsOpen && (
        <Modal
          onClick={handleCloseModal}
        >
          <p>Delete this recipe?</p>
          <div className="obj-grid-two-cols">
            <Button
              buttonType="button"
              buttonName="yes, delete it"
              modifier="destructive"
              onClick={handleDeleteRecipe}
            />
            <Button
              buttonType="button"
              buttonName="no, keep it"
              onClick={handleCloseModal}
            />
          </div>
        </Modal>
      )}
    </article>
  );
};

export default RecipeViewer;
