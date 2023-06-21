import styled from 'styled-components';
import sound from './assets/chiverito.mp3';
import React, { useState, useEffect, useRef } from 'react';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  console.log("mascota numero: "+codigo);
  var source = "";
  var source2 = "";
  const [mostrarDiv, setMostrarDiv] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);


  function play(){
    new Audio(sound).play();
   // alert('¡Hola! Esto es un mensaje de alerta.');
   
    setMostrarDiv(false);
  }

  

 
  
if(codigo == "chiverito"){
  source = "./assets/chiverito.glb"
  source2 = "./assets/chive.usdz"
}

const toggleAudio = () => {
  const audioElement = document.getElementById('myAudio');

  if (isAudioPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }

  setIsAudioPlaying(!isAudioPlaying);
};


  return (
    <div className="App">
<model-viewer src={source} ios-src={source2} ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls shadow-intensity="1"  camera-target="0m 0m 0m" autoplay>

        <SoundButton
        src={isAudioPlaying ? './assets/audio.png' : './assets/sinaudio.png'}
        alt={isAudioPlaying ? 'Sonido inactivo' : 'Sonido activo'}
        onClick={toggleAudio}
      />

      <audio id="myAudio" src={sound} />


        <Boton slot="ar-button">
          Click Aquí
        </Boton>


        
  </model-viewer>
    </div>
  )
}

const SoundButton = styled.img`
display: inline-block;
`;





const BotonB = styled.button`

display: inline-block;
border: none;
border-radius: 4px;
background-color: #0088cc;
color: #fff;
padding: 12px 24px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
transition: background-color 0.3s ease;


bottom: 100px; 

&:hover {
  background-color: #006699;
}

&:focus {
  outline: none;
  background-color: #004466;
}
`;

const Boton = styled.button`

display: inline-block;
border: none;
border-radius: 4px;
background-color: #0088cc;
color: #fff;
padding: 12px 24px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
transition: background-color 0.3s ease;
position: absolute; 
right: 100px; 
left: 100px;

bottom: 100px; 

&:hover {
  background-color: #006699;
}

&:focus {
  outline: none;
  background-color: #004466;
}
`;

export default App;
