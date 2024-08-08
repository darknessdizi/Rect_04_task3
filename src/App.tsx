import './App.css';
// import { useState } from 'react';
// import { Form } from './components/Form/Form';
// import { Table } from './components/Table/Table';
// import { IElements, IFormData } from './modals/modals';
// import { sortArray, addZero } from './utils/utils';
import { FieldInput } from './components/FieldInput/FieldInput';
import { FieldImages } from './components/FieldImages/FieldImages';

function App() {
  const onChangeInput = (event: React.ClipboardEvent<HTMLTableElement>) => {
    // В поле input выбрали фото и нажали открыть
    const target = event.target as HTMLElement;
    const { files } = target;
    console.log(files)
    // const { files } = event.target;
    if (!files) return;
    // this._fileProcessing(files);
    target.value = ''; // Чтобы повторно открывать один и тот же файл
  }

  return (
    <div className='content__task'>
      <FieldInput inviteFiles={onChangeInput} />
      <FieldImages />
    </div>
  )
}

export default App
