
import { useState,createContext, useContext } from 'react';
import Table from './table.jsx';
import Form from './form.jsx';
import DetailView from './detailview.jsx';
import './input.css';


const initialData = {
  id: "",
  name: '',
  phoneNo: '',
  email: '',
  gender: '',
  active: '',
  review: '',
  sports: [],
  remove: ""
};

export const FormDataContext = createContext({
  formData: []
});
export const useFormContext = ()=>{
 const context = useContext(FormDataContext );
}

const InputField = ({children}) => {
  const [form, setForm] = useState(initialData);
  const [formData, setFormData] = useState([]);
  

  const handleFormDataUpdate = (newData) => {
    setFormData([...formData, newData]);
  };
  const handleReviewChange = (index, newReview) => {
    setFormData(formData.map((item, i) => 
      i === index ? { ...item, review: newReview } : item
    ));
  };

  const handleRemove = (index) => {
    setFormData(formData.filter((item, i) => i !== index));
  };

  return (
    <div>
       <FormDataContext.Provider >

      <Table  setFormData={setFormData}  handleReviewChange={handleReviewChange} handleRemove={handleRemove} initialData={initialData} />
      <DetailView  />
      <Form form={form} setForm={setForm} setFormData={handleFormDataUpdate}  />
      </FormDataContext.Provider>

    </div>
  );
};

export default InputField;

