import React, { useState } from "react";
import Caracter from './Caracter.jsx'
export default function Info({Personas,persona}) {

if(persona){
  return (

    <div>
    <Caracter
           
            name={persona.name}
        
            genero={persona.genero}

            species={persona.species}
        
            image={persona.image}
          /> 
    
    </div> 
  );
  }else {
    return(
      <div></div>
    )
  }
}