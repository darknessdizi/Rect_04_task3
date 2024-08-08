import './App.css';
import { useState } from 'react';
import { FieldInput } from './components/FieldInput/FieldInput';
import { FieldImages } from './components/FieldImages/FieldImages';

type TList = string[];

function App() {
  const [list, setList] = useState<TList>([]);
  console.log(list);

  const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    // В поле input выбрали фото и нажали открыть
    const { files } = evt.target;
    if (files) {
      const arrayFiles = [...files];
      const urls = await Promise.all(arrayFiles.map(o => fileToDataUrl(o)));
      setList([
        ...list,
        ...urls,
      ]);
      console.log(list);
      evt.target.value = '';
    }
  }

  const fileToDataUrl = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', (evt) => {
        resolve(evt.currentTarget?.result);
      });
      
      fileReader.addEventListener('error', (evt) => {
        reject(new Error(evt.currentTarget?.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  return (
    <div className='content__task'>
      <FieldInput inviteFiles={handleSelect} />
      <FieldImages array={list} />
    </div>
  )
}

export default App
