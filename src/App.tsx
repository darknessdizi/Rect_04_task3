import './App.css';
// import { useState } from 'react';
// import { Form } from './components/Form/Form';
// import { Table } from './components/Table/Table';
// import { IElements, IFormData } from './modals/modals';
// import { sortArray, addZero } from './utils/utils';
import { FieldInput } from './components/FieldInput/FieldInput';
import { FieldImages } from './components/FieldImages/FieldImages';

function App() {

  return (
    <div className='content__task'>
      
      <FieldInput />
      <FieldImages />
       
    </div>
  )
}

export default App
