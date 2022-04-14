import React , { useState } from 'react';
import './App.css'
export default function Persona({persona}) {
   
    return (
      <div className="container">

      <h1>Nombre:</h1>
      <h1>Edad:{persona.name}</h1>
      <h1>Nombre:</h1>
      <h1>Edad:{persona.name}</h1>
      
      </div>
    );
  }