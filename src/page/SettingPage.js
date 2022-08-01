import {useState} from 'react'
import styled from 'styled-components'
import arrow from '../image/whiteArrow.png';
import SettingPlayerModal from '../component/SettingPlayerModal';

export default function SettingPage({tohome}) {
    const settingData = JSON.parse(localStorage.getItem('spinner'))
    const playerNumArray = [2,3,4,6,12]
    const [change,setChange] = useState(settingData)

    const changePlayerNumber = (e) =>{
        let array = change.players
        if (e.target.value > change.playerNum) {
            for(let i = change.playerNum + 1 ; i <= e.target.value; i++){
                array.push({name:'Player' + i,color: '#' + Math.floor(Math.random()*16777215).toString(16)})
            }
        }else{
            for(let i = 0 ; i < change.playerNum - e.target.value ; i++){
                array.pop()
            }
        }
        setChange(change => ({...change,playerNum: parseInt(e.target.value), players: array}))
    }
    const cancel = () =>{
        setChange({})
        tohome()
    }
    const save = () =>{
        localStorage.setItem('spinner',JSON.stringify(change))
        tohome()
    }

    const [openPlayerSetting,setOpenPlayerSetting] = useState(false)
  return (
    <Container>
        <Arrow onClick={cancel} src={arrow} alt=''/>
        <Title>轉盤設定</Title>
        <Lists>
            <List>
                <Text>人數：</Text>
                <select className='select' onChange={(e) => changePlayerNumber(e)} defaultValue={settingData.playerNum}>
                    {playerNumArray.map((num,idx)=>
                        <option key={idx} value={num}>{num}</option>
                    )}
                </select>
            </List>
            {settingData && change.players.map((_data,idx)=>
            <List key={idx}>
                <Text>{_data.name}</Text>
                <Text>
                    <Color style={{background: _data.color}}/> 
                    <SettingArrow src={arrow} onClick={()=>setOpenPlayerSetting(idx)}/>
                </Text>   
            </List>
            )}
            <List>
                <Text>旋轉速度：</Text>
                <select className='select' defaultValue={settingData.speed}>
                    <option value={0.5}>0.5</option>
                    <option value={1}>1</option>
                    <option value={1.5}>1.5</option>
                </select>
            </List>
        </Lists>
        <Button onClick={save}>確認</Button>
        <SettingPlayerModal change={change} setChange={setChange} playerId={openPlayerSetting} close={()=>setOpenPlayerSetting(-1)}/>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
`
const Title = styled.p`
  font-size: 24px;
  position: absolute;
  transform: translate(-50%,0%);
  left: 50%;
  color: white;
  width: 100%;
  height: 60px;
  padding: 15px 0 0;
  z-index: 2;
  text-align: center;
  background: #222;
`
const Text = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Arrow = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
  z-index: 3;
  cursor: pointer;
`
const Lists = styled.div`
    width: 100%;
    height: 90%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
    padding-top: 90px;
    overflow-y: scroll;
`
const List = styled.div`
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
    height: 50px;
`

const Button = styled.div`
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    background-color: rgb(198, 207, 255);
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
`
const SettingArrow = styled.img`
  width: 15px;
  height: 15px;
  margin-right: -10px;
  margin-left: 5px;
  cursor: pointer;
`