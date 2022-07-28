import React from 'react'
import styled from 'styled-components'
import './index.css';

export default function Modal({isSettingOpen,close}) {
    
    const playerNumArray = [2,3,4,6,12]
    const speedArray = [0.5,1,1.5]
    return (
    <>
        <ModalContainer className={isSettingOpen ? 'show' : 'hide'}>
            <List>
                <Text>人數：</Text>
                <select className='select'>
                    {playerNumArray.map((num,idx)=>
                    <option key={idx}>{num}</option>
                    )}
                </select>
            </List>
            <List>
                <Text>旋轉速度：</Text>
                <select className='select'>
                    {speedArray.map((num,idx)=>
                    <option key={idx}>{num}</option>
                    )}
                </select>
            </List>
            <ButtonGroup>
                <Button onClick={close}>取消</Button>
                <Button onClick={close}>確認</Button>
            </ButtonGroup>
        </ModalContainer>
    </>
  )
}

const ModalContainer = styled.div`
    position: fixed;
    width: 350px;
    height: 400px;
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
    margin: 0;
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
    margin: 0 10px;
`