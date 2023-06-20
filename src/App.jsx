import styled from 'styled-components';
import sound from './assets/chiverito.mp3';
import React, { useState } from 'react';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  console.log("mascota numero: "+codigo);
  var source = "";
  const [mostrarDiv, setMostrarDiv] = useState(true);

  function play(){
    new Audio(sound).play();
    setMostrarDiv(false);
  }

 
  
if(codigo == "chiverito"){
  source = "./assets/chiverito.glb"
}
  

  return (
    <div className="App">
     

<model-viewer src={source} ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1" autoplay>
{mostrarDiv ? (<div id="color-controls">
          <button data-color="#ff0000" onClick={play}>SONIDO</button>
        </div>): (<div id="color-controls">
        
        </div>)}
       
        <Boton slot="ar-button">
          🎉 RA 🎉
        </Boton>

        
  </model-viewer>
    </div>
  )
}

const Boton = styled.button`
background-color: white; 
border-radius: 4px; 
border: none; 
position: absolute; 
bottom: 50px; 
right: 100px; 
color: black;
font-size: 16px;


`;

export default App;
