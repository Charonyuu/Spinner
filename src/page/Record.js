import {useState,useEffect} from 'react'
import styled from 'styled-components'
import arrow from '../image/whiteArrow.png';

export default function Record({tohome}) {
    const recordData = localStorage.getItem('spinnerRecord') ? localStorage.getItem('spinnerRecord') : null

    const clear = () =>{
        localStorage.removeItem('spinnerRecord')
    }
  return (
    <Container recordData={recordData}>
        <Arrow onClick={tohome} src={arrow} alt=''/>
        <Title>歷史紀錄</Title>
        {recordData ? recordData.map((_data,idx)=>
        <List key={idx}>
            <Text>{_data.name}</Text>
            <Color style={{background: _data.color}}/>    
        </List>
        )
        :
        <Text>沒有轉盤歷史紀錄</Text>
        }
        <Button onClick={clear}>清除</Button>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.recordData ? 'flex-start' :'center'};
  align-items: center;
  position: relative;
  padding-top: ${props => props.recordData && '80px'};
`
const Title = styled.p`
  font-size: 24px;
  position: absolute;
  top: 15px;
  transform: translate(-50%,0%);
  left: 50%;
  color: white;
`
const Text = styled.p`
  padding: 0 25px;
  font-size: 22px;
  color: white;
  font-weight: 600;
`
const Arrow = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
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