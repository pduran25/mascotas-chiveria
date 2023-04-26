import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components';

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  console.log("mascota numero: "+codigo);
  var source = "";

  source = "./assets/animacionpreg.glb"

  return (
    <div className="App">
       <model-viewer src={source} autoplay ar ar-modes="webxr scene-viewer quick-look" camera-controls touch-action="pan-y" camera-orbit="0deg 80deg 0m" alt="A 3D model of some wall art">
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

export default App
