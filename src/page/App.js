import styled from 'styled-components'
import './App.css';
import { useEffect, useState } from 'react'
import Game from '../component/game';
import Modal from '../component/modal';
import SettingModal from '../component/Setting';
import setting from '../image/settings.png';
import arrow from '../image/rightArrow.png';
import home from '../image/home.png';

function App({tohome}) {
  const [data,setData] = useState(
    {
      playerNum: 2,
      players: [
        {name:'Player1',color: '#' + Math.floor(Math.random()*16777215).toString(16)},
        {name:'Player2',color: '#' + Math.floor(Math.random()*16777215).toString(16)},
      ],
      speed:1,
      language: 'chinese',
    }
  )
  const [selected,setSelected] = useState(0) //誰中獎了
  const [openMenu,setOpenMenu]=useState(false) //小選單開關
  const [isSettingOpen,setIsSettingOpen] = useState(0) //設定modal開關
  
  useEffect(()=>{
    if(localStorage.getItem('spinner')){
      setData(JSON.parse(localStorage.getItem('spinner')))
    }else{
      const spinnerObject = {
        playerNum: 2,
        players: [
          {name:'Player1',color: '#' + Math.floor(Math.random()*16777215).toString(16)},
          {name:'Player2',color: '#' + Math.floor(Math.random()*16777215).toString(16)},
        ],
        speed:1,
        language: 'chinese',
      }
      localStorage.setItem('spinner',JSON.stringify(spinnerObject))
      setData(spinnerObject)
    }
  },[isSettingOpen])

  const openSetting = () =>{
    setSelected(0)
    setIsSettingOpen(true)
    setOpenMenu(false)
  } 
  const arrowOpen = () =>{
    if (isSettingOpen !== false) {
      setOpenMenu(!openMenu)
    }
  }
  return (
    <Container>
      <Title>Spinner</Title>
      <Game setSelected={setSelected} data={data}/>
      <Modal selected={selected} close={()=>setSelected('')}/>
      <Footer>
        <Players length={data.players.length}>
          {data && data.players.map((_data,idx)=>
          <Player key={idx}>
            <p>{_data.name}</p>
            <Color style={{background: _data.color}}/>
          </Player>      
          )}
        </Players> 
      </Footer>
      <Menu className={openMenu && 'openMenu'}>
        <HomeIcon onClick={tohome} src={home} alt=''/>
        <SettingIcon src={setting} alt='' onClick={openSetting}/>
        <Arrow onClick={arrowOpen}>
          <ArrowIcon openMenu={openMenu} src={arrow} alt='' />
        </Arrow>
      </Menu>
      <SettingModal isSettingOpen={isSettingOpen} setIsSettingOpen={setIsSettingOpen} close={()=>setIsSettingOpen(false)}/>
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
  overflow: hidden;
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
  bottom: 20px;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Menu = styled.div`
  position: absolute;
  top: 0;
  left: -120px;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 0 5px 5px 0;
  transition: all 1s ease-in-out;
  padding-right: 10px;
`
const HomeIcon = styled.img`
  width: 30px;
  height: 30px;
`
const SettingIcon = styled.img`
  width: 30px;
  height: 30px;
`
const Arrow = styled.div`
  position: absolute;
  top: 5px;
  right: -18px;
  width: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0 5px 5px 0;
`
const ArrowIcon = styled.img`
  transition: all 1s ease-in-out;
  height: 15px;
  width: 13px;
  transform: ${props => props.openMenu && 'rotate(180deg)'};
`
const Players = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: ${props => props.length > 4 ? 'flex-start' : 'center'};
  color: white;
  flex-wrap: wrap;
  
`
const Player = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
`