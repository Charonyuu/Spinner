import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './index.css';
import { GithubPicker } from 'react-color'

export default function SettingPlayerModal({change,setChange,playerId,close}) {
    
    const [ form , setForm ] = useState({name:'',color:''})
    useEffect(()=>{
        if (playerId !== -1) {
            setForm(change.players[playerId])
        }
    },[playerId])
    
    const save = () =>{
        change.players[playerId] = form
        setChange(change)
        close()
    }
    console.log(playerId);

    return (
    <>
        {playerId !== false &&
        <ModalContainer className={playerId >= 0 ? 'show' : 'hide'}>
            <Input type='text' value={form && form.name} onChange={(e)=>{setForm(form => ({...form,name: e.target.value}))}} />
            <Text>
                <Color  style={{background: form && form.color}}/>
                <p >{form && form.color}</p>
            </Text>
            <GithubPicker width='220px' className='colorPicker' onChange={(e)=> setForm(form => ({...form,color: e.hex}))}/>
            
            <ButtonGroup>
                <Button onClick={close}>取消</Button>
                <Button onClick={save}>確認</Button>
            </ButtonGroup>
        </ModalContainer>
    }
    </>
  )
}

const ModalContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 350px;
    min-height: 300px;
    z-index: 999;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 25px;
`
const Text = styled.div`
    font-size: 22px;
    color: black;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    border: 0;
    border-bottom: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
    width: 100%;
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
  margin-right: 5px;
`