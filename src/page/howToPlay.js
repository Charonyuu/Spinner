import React from 'react'
import styled from 'styled-components'
import arrow from '../image/whiteArrow.png';

export default function howToPlay({tohome}) {
  return (
    <Container>
        <Arrow onClick={tohome} src={arrow} alt=''/>
        <Title>轉盤介紹</Title>
        <Text>
            這是一個方便工具，可以用轉盤隨機挑選名稱或物品。它也稱為隨機選擇器，或在線輪盤賭。有時候，人們很難做出決定。然後製作現有選項或候選項的清單，然後從中隨機選取一個選項。在這種情況下，您可以使用這個工具來做出決定。簡單又有趣。您可以設定選項，只需點擊開始鍵，它就會開始旋轉幾秒鐘。結果是隨機選取清單中的一個名稱。
        </Text>
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
  margin-top: 40%;
  color: white;
  font-weight: 600;
  text-align: justify;
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