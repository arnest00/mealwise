import {
  FC, createContext, useContext, useState,
} from 'react';

export const errorMessages = {
  START_NUMBER: 'An ingredient must begin with a number for quantity.',
};

const useValue = () => {
  const [errors, setErrors] = useState([]);

  return {
    errors, setErrors,
  };
};

const ValidatorContext = createContext({} as unknown as ReturnType<typeof useValue>);

export const useValidatorContext = () => useContext(ValidatorContext);

export const ValidatorProvider: FC = ({ children }) => (
  <ValidatorContext.Provider value={useValue()}>
    {children}
  </ValidatorContext.Provider>
);
