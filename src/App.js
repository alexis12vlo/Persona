import logo from './logo.svg';
import './App.css';
import React ,  { useState } from 'react';
import axios from 'axios';
import Info from './Info.jsx'
import imagen from './imagenn.png'

function App() {
  const [id, setId] = useState('')
  const [persona, setPersona]=useState('');
  function Personas(e){
    
    axios.get(`https://rickandmortyapi.com/api/character/${e}`)
      .then(res => {
        const personas = {
          name : res.data.name,
          id : res.data.id,
          species : res.data.species,
          image : res.data.image,
          genero : res.data.gender
        }
        setPersona(personas)
        console.log(personas.image);
      })
      
}
  return (
    <div className="App">
      <header className="App-header">
        <div className="imagenportada">
        <img src={imagen} alt=""/>
        </div>
        
        <form onSubmit={e => {
      e.preventDefault();
      Personas(id);
      setId('');
    }}>
      <input
      className="input"
        type="text"
        placeholder="INGRESA UN NUMERO"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="boton" type="submit" value="Agregar" />
    </form>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Info persona={persona} Personas={Personas}></Info>
      </header>
    </div>
  );
}

export default App;
