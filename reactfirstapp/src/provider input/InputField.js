import React from 'react';
import TableView from './TableView';
import DetailView from './DetailView';
import FormInput from './FormInput';
import {FormProvider} from './FormContext.js';
import '../formtable/input.css'

const InputField = () => {
  return (
    <div>
     <FormProvider>
      <TableView />
       <DetailView />
      <FormInput />
      </FormProvider>
    </div>
  );
};


export default InputField;
