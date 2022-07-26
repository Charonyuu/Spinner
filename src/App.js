import styled,{keyframes,css} from 'styled-components'
import './App.css';
import { useState } from 'react'
import Game from './component/game';
import Modal from './component/modal';
import setting from './image/settings.png'
function App() {
  const [players,setPlayers] =useState(['player1','player2','player1','player2','player1','player2','player1','player2','player1','player2','player1','player2'])
  const [selected,setSelected] = useState(0)

  return (
    <Container>
      <Title>Spinner</Title>
      <Game setSelected={setSelected} players={players}/>
      <Modal selected={selected} close={()=>setSelected('')}/>
      <Footer>
        <Players>
          <Player>
            <p>Player1</p>
            <Color style={{background: '#6699ff'}}/>
          </Player>
          <Player>
            <p>Player2</p>
            <Color style={{background: '#00ff00'}}/>
          </Player>
        </Players>
        
      </Footer>
      <SettingBtn><img src={setting} alt='' /></SettingBtn>
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
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const SettingBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(198, 207, 255);
  border-radius: 5px;
`
const Players = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
const Player = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`