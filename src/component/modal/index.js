import React from 'react'
import styled,{keyframes,css} from 'styled-components'
import picture1 from '../../image/you0.jpeg';
import picture2 from '../../image/you2.jpeg';
import picture3 from '../../image/you3.jpeg';
import './index.css';

export default function Modal({selected,close}) {
    const array = [picture1,picture2,picture3]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
  return (
    <>
        {selected != 0 &&
            <ModalContainer className={selected ? 'show' : 'hide'}>
                <img src={array[getRandomInt(3)]} alt="" />
                <Text>{selected ? '恭喜中獎' + selected : '掰掰'}</Text>
                <Button onClick={close}>確認</Button>
            </ModalContainer>
        }
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
const Text = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
`
const Button = styled.div`
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    background-color: rgb(198, 207, 255);
    display: flex;
    justify-content: center;
    align-items: center;
`