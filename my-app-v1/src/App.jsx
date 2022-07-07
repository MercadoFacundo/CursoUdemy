import logo from './logo.svg';

import './App.css';

import PrimerComponente from './Components/PrimerComponente.jsx';
import Props from "./Components/propiedades.jsx";
import Estado from './Components/Estado.jsx';
//tambien podemos usar el fragment de la libreria
//import React, {Fragment} from 'react';

function App() {
  const lista = ["manzana", "pera", "Uvas", "Naranjas"]
  //todo el codigo html va dentro del return
  return (
    //Si queremos usar codigo jscrip dentro del return
    //lo metemos dentro de llaves {console.log("holamundo")}
    //Todo el codigo tiene que estar dentro de una caja
    
      /*no permite 
      retornar mas de una linea de codigo, 
      hay que fragmentarlo(fragment) por ejemplo
      con un div o mejores practicas <>...</> 
      o el <Fragment></Fragment> para eso hay que
      importar*/
    <>
      <h1>hola mundo</h1>
      <h2>Hola mundo</h2>
      <PrimerComponente nombre = {lista}/>
      
      <Props Nombre = {lista}/>

      <Estado/>


      


    </>
    
    
   
  );
}

export default App;
