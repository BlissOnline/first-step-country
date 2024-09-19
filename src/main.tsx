import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/global.css';

//testing
import goldObject from './goldObject.ts';
//import updatedGoldObject from './utilities/updatedGoldObject.ts';
//import goldObjectWithFlags from './utilities/goldObjectWithFlags.ts';
//import CountryList from './Pages/CountryIndex.tsx';

console.log(goldObject);
//console.log(updatedGoldObject);
//console.log(goldObjectWithFlags);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
