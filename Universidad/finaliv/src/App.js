import React, {useState, useEffect} from 'react'
import './App.css';
import { HomePages } from './components/Homepage';

function App() {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    const getAnimales = () => {
      fetch('http://localhost:4000/animales')
      .then(res => (res.json))
      .then(res => setDatos(res))

    }
   getAnimales()
  }, [])
  

  return (
    <div className="App">
      <HomePages info = {datos}/>
    </div>
  );
}

export default App;
