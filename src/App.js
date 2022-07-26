import styled,{keyframes,css} from 'styled-components'
import './App.css';
import { useState } from 'react'
import Game from './component/game';
import Modal from './component/modal';
function App() {
  
  const [selected,setSelected] = useState(0)

  return (
    <Container>
      <Title>Spinner</Title>
      <Game setSelected={setSelected}/>
      <Modal selected={selected} close={()=>setSelected('')}/>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #222;
  `
const Title = styled.p`
  font-size: 60px;
  position: absolute;
  top:40px;
  margin: 0;
  color: rgba(0,0,0,0.6);
  text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
`
