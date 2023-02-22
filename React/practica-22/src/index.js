import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {PrimerComponente} from './Components/PrimerComponente.jsx';
import { SegundoComponente } from './Components/SegundoComponente.jsx';
import { Formulario } from './Components/Formulario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimerComponente></PrimerComponente>
    <SegundoComponente></SegundoComponente>
    <Formulario></Formulario>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
