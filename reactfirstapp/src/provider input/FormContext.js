import React, { createContext, useReducer,useRef } from 'react';
const initialFormData = {
  name: '',
  phoneNo: '',
  email: '',
  gender: '',
  active: '',
  review: '',
  sports: []
};

const initialState = {
  form: initialFormData,
  formData: [],
  isOpen: false,
  details: false
};

const formReducer = (state, action) => {


  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        form: {
          ...state.form,
          [action.value.name]: action.value.value
        }
      };
    case "submit":
      return {
        ...state,
        formData: [...state.formData, state.form],
        form: initialFormData
      };
    case "reviewChange":
      return {
        ...state,
        formData: state.formData.map((item, i) =>
          i === action.value.index ? { ...item, review: action.value.newReview } : item
        )
      };
    case "remove":
      return {
        ...state,
        formData: state.formData.filter((item, i) => i !== action.value.index)
      };
    case "sports":
      return {
        ...state,
        form: {
          ...state.form,
          sports: action.value.checked
            ? [...state.form.sports, action.value.value]
            : state.form.sports.filter(sport => sport !== action.value.value)
        }
      };
    case "sportsOpen":
      return {
        ...state,
        isOpen: !(state.isOpen)
      };
    case "viewAll":
      return {
        ...state,
        details: !(state.details)
      };
    default:
      return state;
  }
};

const FormContext = createContext();

const FormProvider = ({ children }) => {
  
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "inputChange",
      value: { name, value }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
   inputRef.current.focus();
  };

  const handleReviewChange = (index, newReview) => {
    dispatch({
      type: "reviewChange",
      value: { index, newReview }
    });
  };

  const handleRemove = (index) => {
    dispatch({
      type: "remove",
      value: { index }
    });
  };

  const handleSports = ({ target }) => {
    const { value, checked } = target;
    dispatch({
      type: "sports",
      value: { value, checked }
    });
  };

  const handleSportOpen = () => {
    dispatch({ type: "sportsOpen" });
  };

  const handleViewAll = () => {
    dispatch({ type: "viewAll" });
  };

  return (
    <FormContext.Provider value={{
      ...state,
      handleInputChange,
      handleSubmit,
      handleReviewChange,
      handleRemove,
      handleSports,
      handleSportOpen,
      handleViewAll,
      inputRef
    }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
