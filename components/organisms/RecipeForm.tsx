import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

import IFormData from '../../interfaces/IFormData';
import { addRecipe } from '../../services/dbService';

import Button from '../atoms/Button';
import InputGroup from '../atoms/InputGroup';
import Modal from '../atoms/Modal';
import SelectGroup from '../atoms/SelectGroup';
import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  const formBottomRef = useRef<null | HTMLDivElement>(null);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    description: '',
    link: '',
    category: '',
    servings: 1,
  });
  const [ingredientsList, setIngredientsList] = useState([
    {
      id: nanoid(),
      content: '',
    },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    formBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ingredientsList]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData };
    newFormData.name = e.currentTarget.value;

    setFormData(newFormData);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData };
    newFormData.description = e.currentTarget.value;

    setFormData(newFormData);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData };
    newFormData.link = e.currentTarget.value;

    setFormData(newFormData);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newFormData = { ...formData };
    newFormData.category = e.currentTarget.value;

    setFormData(newFormData);
  };

  const handleServingsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData };
    newFormData.servings = Number(e.currentTarget.value);

    setFormData(newFormData);
  };

  const handleAddIngredient = () => {
    const newIngredientsList = [...ingredientsList];

    newIngredientsList.push({
      id: nanoid(),
      content: '',
    });

    setIngredientsList(newIngredientsList);
  };

  const handleRemoveIngredient = (id: string) => {
    const newIngredientsList = [...ingredientsList]
      .filter((ingredient) => ingredient.id !== id);

    setIngredientsList(newIngredientsList);
  };

  const handleIngredientChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const newIngredientsList = [...ingredientsList];
    const changedIngredientIdx = ingredientsList
      .findIndex((ingredient) => ingredient.id === id);

    newIngredientsList[changedIngredientIdx].content = e.currentTarget.value;

    setIngredientsList(newIngredientsList);
  };

  const handleSubmit = async (
    e: { preventDefault: () => void; currentTarget: any; target: any; },
  ) => {
    e.preventDefault();

    const { result, message } = await addRecipe(formData, ingredientsList);

    if (result !== 'error') {
      e.target.reset();
      setFormData({
        name: '',
        description: '',
        link: '',
        category: 'Breakfast',
        servings: 1,
      });
      setIngredientsList([
        {
          id: nanoid(),
          content: '',
        },
      ]);
    }

    setStatus(message);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleNavigateToRecipeBook = () => {
    setModalIsOpen(false);
    router.push('/recipes');
  };

  return (
    <>
      <form className="obj-form" onSubmit={handleSubmit}>
        <fieldset className="obj-form__fieldset">
          <legend className="bigger">Recipe Information</legend>

          <InputGroup
            inputName="name"
            inputType="text"
            isRequired
            onChange={handleNameChange}
            value={formData.name}
          />

          <InputGroup
            inputName="description"
            inputType="text"
            isRequired={false}
            onChange={handleDescriptionChange}
            value={formData.description}
          />

          <InputGroup
            inputName="link"
            inputType="url"
            isRequired={false}
            onChange={handleLinkChange}
            value={formData.link}
          />

          <div className="obj-grid-two-col">
            <SelectGroup
              selectName="category"
              isRequired
              onChange={handleCategoryChange}
              value={formData.category}
              options={[
                'Breakfast',
                'Lunch',
                'Dinner',
              ]}
            />

            <InputGroup
              inputName="servings"
              inputType="number"
              isRequired={false}
              onChange={handleServingsChange}
              value={formData.servings}
            />
          </div>
        </fieldset>

        <fieldset className="obj-form__fieldset">
          <legend className="bigger">Ingredient Information</legend>

          <p className="smaller">
            Add ingredients by denoting quantity, unit, and type of ingredient.
            {' '}
            Just the quantity and type of ingredient would also be sufficient. For example, &quot;1
            {' '}
            <abbr title="tablespoon">
              tbsp
            </abbr>
            {' '}
            olive oil&quot; or &quot;3 apples&quot;.
          </p>

          {ingredientsList.map(({ id, content }) => (
            <IngredientInputs
              key={id}
              onClick={() => handleRemoveIngredient(id)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleIngredientChange(e, id)}
              value={content}
            />
          ))}

          <Button
            buttonType="button"
            buttonName="add ingredient"
            onClick={handleAddIngredient}
          />
        </fieldset>

        <div className="obj-grid-two-cols">
          <Button
            buttonType="submit"
            buttonName="save"
            modifier="positive"
          />
          <Button
            buttonType="reset"
            buttonName="clear"
            modifier="destructive"
          />
        </div>

        <div ref={formBottomRef} />
      </form>
      {modalIsOpen && (
        <Modal
          onClick={handleCloseModal}
        >
          <p>{status}</p>
          <div className="grid-two-cols">
            <Button
              buttonType="button"
              buttonName="see all recipes"
              modifier="link"
              onClick={handleNavigateToRecipeBook}
            />
            <Button
              buttonType="button"
              buttonName="add another recipe"
              onClick={handleCloseModal}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default RecipeForm;
