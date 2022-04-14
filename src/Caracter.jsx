import React, { useState } from "react";

export default function Caracter({name,id,image,species,genero}) {


  return (
    <div className="caracter_tarjeta">
      <div className="caracter_tarjeta_imagen">
        <div className="imagen">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="caracter_tarjeta_info">
        <div className="info1">
          <h1>{name}</h1>
        </div>
        <div className="info">
          <h3>Genero : {genero}</h3>

       
        </div>
        <div className="info">
          <h3>Especie : {species}</h3>
          
        </div>
      </div>
    </div> 
  );
}