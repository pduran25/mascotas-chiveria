import styled from 'styled-components';
import sound from './assets/chiverito.mp3';
import  { useState} from 'react';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  var valtipo = params.get('prueba');
  console.log("mascota numero: "+codigo);
  var source = "";
  var source2 = "";
  var imagen = "";
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);


  valtipo = (valtipo === null || valtipo === undefined)?0:valtipo;
  


  
if(codigo == "manolo"){
  source = "./assets/chiverito/chiverito1.glb"
  source2 = "./assets/chiverito/chiveritop18.usdz"
}else if(codigo == "firulais"){
  source = "./assets/batman/batmanandroid1.glb"
  source2 = "./assets/batman/batmanios1.usdz"
}else if(codigo == "chiverito"){
  source = "./assets/golden/golden.glb"
  source2 = "./assets/golden/golden.usdz"
}else if(codigo == "marley"){
  source = "./assets/peluza/peluza.glb"
  source2 = "./assets/peluza/peluza.usdz"
}else if(codigo == "dulce"){
  source = "./assets/simba/simba.glb"
  source2 = "./assets/simba/simba.usdz"
}

imagen = "./assets/provisional.png"

const toggleAudio = () => {
  const audioElement = document.getElementById('myAudio');

  if (isAudioPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }

  setIsAudioPlaying(!isAudioPlaying);
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};


  return ((valtipo != 1)?(<div style={containerStyle}>
    <img src={imagen} alt="Muy Pronto en Chivería" style={imageStyle} />
  </div>):
    (<div className="App">
<model-viewer src={source} ios-src={source2} camera-controls camera-orbit="-40deg 70deg 200m" camera-target="0 0 0" ar ar-modes="scene-viewer webxr quick-look" xr-environment ar-placement="wall" autoplay>

        <SoundButton
        src={isAudioPlaying ? './assets/audio.png' : './assets/sinaudio.png'}
        alt={isAudioPlaying ? 'Sonido inactivo' : 'Sonido activo'}
        onClick={toggleAudio}
      />

      <audio id="myAudio" src={sound} />


        <Boton slot="ar-button" >
          Click Aquí
        </Boton>


        
  </model-viewer>
    </div>)
  )
}

const SoundButton = styled.img`
display: inline-block;
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
