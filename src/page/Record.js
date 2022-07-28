import styled from 'styled-components'
import arrow from '../image/whiteArrow.png';

export default function Record({tohome}) {
    const recordData = localStorage.getItem('spinnerRecord') ? JSON.parse(localStorage.getItem('spinnerRecord')) : null

    const clear = () =>{
        localStorage.removeItem('spinnerRecord')
    }
  return (
    <Container >
        <Arrow onClick={tohome} src={arrow} alt=''/>
        <Title>歷史紀錄</Title>
        <Lists recordData={recordData}>
        {recordData ? recordData.map((_data,idx)=>
        <List key={idx}>
            <Text>{_data.time}</Text>
            <Text>
                {_data.winner}
                <Color style={{background: _data.color}}/>
            </Text>
        </List>
        )
        :
        <Text>沒有轉盤歷史紀錄</Text>
        }
        </Lists>
        <Button onClick={clear}>清除</Button>
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
const Text = styled.p`
  padding: 0 25px;
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
`
const Lists = styled.div`
    width: 100%;
    height: 90%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.recordData ? 'flex-start' :'center'};
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 0;
    padding-top: ${props => props.recordData && '100px'};
    overflow-y: scroll;
`
const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin: 10px 0;
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
  margin-left: 3px;
`