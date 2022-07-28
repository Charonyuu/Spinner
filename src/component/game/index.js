import React,{useEffect, useState} from 'react'
import './index.css';
import styled from 'styled-components'
import dayjs from 'dayjs';

export default function Game({setSelected,data}) {
  const {
    playerNum = 2,
    players = {},
    speed = 1,
  } = data
    const [turning,setTurning] = useState(false)
    const [time,setTime] = useState(0)
    const [partsArray,setPartsArray] = useState([])

    
    useEffect(()=>{
      if(playerNum !== 12){
        let array = []
        for(let i = 0 ; i < 12/playerNum ; i++){
          array = array.concat(players)
        }
        setPartsArray(array)
      }else{
        setPartsArray(players)
      }
    },[data])

    const start = () =>{
      let randomTime = (Math.floor(Math.random()*1000))/100 //隨機轉時間
      setTurning(true) //設定是否在轉，及紀錄上次時間
      setTimeout(() => {
          setTurning(false)
      }, "1000" * randomTime)
      let count = randomTime
      while (count > 1){ //減到一秒內乘360就知道跑了幾度
          count -= 1
      }
      setTime(count) //知道時間是多少才能什麼時候停在哪個角度
      const recordArray = localStorage.getItem('spinnerRecord') ? JSON.parse(localStorage.getItem('spinnerRecord')) : []
      setTimeout(() => {
        let date = new Date
        setSelected(partsArray[Math.floor(count*360/30)].name)
        recordArray.push(
          {time: dayjs(date).format('YYYY/MM/DD  HH:mm:ss'),
           winner: partsArray[Math.floor(count*360/30)].name,
           color: partsArray[Math.floor(count*360/30)].color}
          )
        localStorage.setItem('spinnerRecord',JSON.stringify(recordArray))
      }, "1000" * randomTime + 300)
        
    }
    return (
        <Circle>
            <Turner>
                <CenterPoint onClick={start}>
                    <Pointer  time={time} className={turning && 'turning'}/>
                </CenterPoint> 
                { partsArray.map((_data,index)=>
                <div 
                    key={index} 
                    className='part'
                    style={
                    {
                        background: _data.color,
                        transform: `rotate(${index * 30}deg) skew(40deg, 20deg)`
                    }
                    }>
                    </div>
                )}
            </Turner>
        </Circle>
    )
}

const Circle = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  background-color: rgb(236, 134, 50);
  border-radius: 50%;
  z-index: 1;
  @media (max-width: 520px) {
    width: 380px;
    height:380px;
  }
`
const Turner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(10deg);
  width: 35rem;
  height: 35rem;
  background-color: rgb(236, 198, 50);
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 520px) {
    width: 350px;
    height: 350px;
  }

`
const Pointer = styled.div`
  position: absolute;
  top: -115px;
  left: -5px;
  width: 70px;
  height: 150px;
  clip-path: polygon(50% 0%, 35% 100%, 65% 100%);
  background-color: black;
  z-index: -1;
  transform-origin: bottom;
  transform: ${(props) => (props.time) ? `rotate(${props.time * 360}deg)` : 'rotate(0deg)'};
`

const CenterPoint = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(-10deg);
  z-index: 2;
  &:after {
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    content: "開始";
    color: white;
  }
`
