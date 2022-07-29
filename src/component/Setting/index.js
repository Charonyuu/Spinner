import React, { useState } from 'react'
import styled from 'styled-components'
import './index.css';

export default function Setting({isSettingOpen,close}) {
    
    const playerNumArray = [2,3,4,6,12]
    const speedArray = [0.5,1,1.5]
    let settingData = JSON.parse(localStorage.getItem('spinner')) 
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
        setChange(settingData);
        close() 
    }
    const save = () =>{
        localStorage.setItem('spinner',JSON.stringify(change))
        close() 
    }

    return (
    <>
        {isSettingOpen !== 0 &&
        <ModalContainer className={isSettingOpen ? 'show' : 'hide'}>
            <List>
                <Text>人數：</Text>
                <select className='select' onChange={(e) => changePlayerNumber(e)} defaultValue={settingData.playerNum}>
                    {playerNumArray.map((num,idx)=>
                        <option key={idx}>{num}</option>
                    )}
                </select>
            </List>
            {settingData && change.players.map((_data,idx)=>
            <List key={idx}>
                <Text>{_data.name}</Text>
                <Color style={{background: _data.color}}/>    
            </List>
            )}
            <List>
                <Text>旋轉速度：</Text>
                <select className='select'>
                    {speedArray.map((num,idx)=>
                    <option key={idx} selected={settingData.speed === num && 'selected'}>{num}</option>
                    )}
                </select>
            </List>
            <ButtonGroup>
                <Button onClick={cancel}>取消</Button>
                <Button onClick={save}>確認</Button>
            </ButtonGroup>
        </ModalContainer>
        }
    </>
  )
}

const ModalContainer = styled.div`
    box-sizing: content-box;
    position: fixed;
    width: 350px;
    min-height: 400px;
    z-index: 999;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
const List = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 20px 0 0;
`
const Text = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
`
const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    background-color: rgb(198, 207, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
`
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
`