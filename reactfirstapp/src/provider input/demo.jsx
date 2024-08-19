// import React, { createContext, useState,useContext } from 'react';


// const initialData = {
//     name: '',
//     phoneNo: '',
//     email: '',
//     gender: '',
//     active: '',
//     review: '',
//     sports: []
//   } ;

//   const initialState = {
//     form: initialData,
//     formData: [],
//     isOpen: false,
//    details: false,
//   }

//  const FormContext = createContext({
//   ...initialState,
//   setFormData: ()=>{},
//   setForm: ()=>{},
//   handleInputChange: () => {},
//   handleSubmit: () => {},
//   handleReviewChange: () => {},
//   handleRemove: () => {},
//   handleSports: () => {},
//   handleSportOpen: () => {},
//   handleViewAll: () => {},
// });


// const FormProvider = ({ children }) => {
//   const [state,setState] = useState(initialData) 

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState(prevState => ({
//       ...prevState,
//       form: {...prevState.form, [name]: value}
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setState(prevState => ({
//       ...prevState,
//       formData: [...prevState.formData , prevState.form],
//       form: initialState

//     } ) )
//   };

//   const handleReviewChange = (index, newReview) => {
//     setState(prevState => ({
//       ...prevState,
//       formData: prevState.formData.map((item, i) =>
//         i === index ? { ...item, review: newReview } : item
//       )
//     }));
//   };

//   const handleRemove = (index) => {
//     setState(prevState => ({
//       ...prevState,
//       formData: prevState.formData.filter((item, i) => i !== index)
//     }));
//   };

//   const handleSports = ({ target }) => {
//     const { value, checked } = target;
//     setForm(prevState => ({
//       ...prevState,
//       sports: checked 
//         ? [...prevState.sports, value]
//         : prevState.sports.filter(sport => sport !== value),
//     }));
//   };

//   const handleSportOpen = () => {
//     setState(prevState => ({
//       ...prevState,
//       isOpen: !prevState.isOpen
//     }));
//   };
  
//   const handleViewAll = () => setDetails(!details);

//   return (
//     <FormContext.Provider value={{
//       form,
//       formData,
//       isOpen,
//       details,
//       handleInputChange,
//       handleSubmit,
//       handleReviewChange,
//       handleRemove,
//       handleSports,
//       handleSportOpen,
//       handleViewAll,
//     }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export { FormContext, FormProvider };
