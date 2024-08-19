// import React, { createContext, useState } from 'react';

// const FormContext = createContext();

// const initialData = {
//     name: '',
//     phoneNo: '',
//     email: '',
//     gender: '',
//     active: '',
//     review: '',
//     sports: []
//   } ;

// const FormProvider = ({ children }) => {
//   const [form, setForm] = useState(initialData);
//   const [formData, setFormData] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [details, setDetails] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData([...formData, form]);
//     setForm(initialData);
//   };

//   const handleReviewChange = (index, newReview) => {
//     setFormData(formData.map((item, i) => 
//       i === index ? { ...item, review: newReview } : item
//     ));
//   };

//   const handleRemove = (index) => {
//     setFormData(formData.filter((item, i) => i !== index));
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

//   const handleSportOpen = () => setIsOpen(!isOpen);

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



// import React, { createContext, useState } from 'react';

// const FormContext = createContext();

// const initialFormData = {
//   name: '',
//   phoneNo: '',
//   email: '',
//   gender: '',
//   active: '',
//   review: '',
//   sports: []
// };

// const initialState = {
//   form: initialFormData,
//   formData: [],
//   isOpen: false,
//   details: false
// };

// const FormProvider = ({ children }) => {
//   const [input, setInput] = useState(initialState);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInput(prevState => ({
//       ...prevState,
//       form: {
//         ...prevState.form,
//         [name]: value
//       }
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setInput(prevState => ({
//       ...prevState,
//       formData: [...prevState.formData, prevState.form],
//       form: initialFormData
//     }));
//   };

//   const handleReviewChange = (index, newReview) => {
//     setInput(prevState => ({
//       ...prevState,
//       formData: prevState.formData.map((item, i) =>
//         i === index ? { ...item, review: newReview } : item
//       )
//     }));
//   };

//   const handleRemove = (index) => {
//     setInput(prevState => ({
//       ...prevState,
//       formData: prevState.formData.filter((item, i) => i !== index)
//     }));
//   };

//   const handleSports = ({ target }) => {
//     const { value, checked } = target;
//     setInput(prevState => ({
//       ...prevState,
//       form: {
//         ...prevState.form,
//         sports: checked
//           ? [...prevState.form.sports, value]
//           : prevState.form.sports.filter(sport => sport !== value)
//       }
//     }));
//   };

//   const handleSportOpen = () => {
//     setInput(prevState => ({
//       ...prevState,
//       isOpen: !prevState.isOpen
//     }));
//   };

//   const handleViewAll = () => {
//     setInput(prevState => ({
//       ...prevState,
//       details: !prevState.details
//     }));
//   };

//   return (
//     <FormContext.Provider value={{
//       ...input,
//       handleInputChange,
//       handleSubmit,
//       handleReviewChange,
//       handleRemove,
//       handleSports,
//       handleSportOpen,
//       handleViewAll
//     }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export { FormContext, FormProvider };