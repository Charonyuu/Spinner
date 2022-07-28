import styled from 'styled-components'
import './App.css';
import { useState ,useEffect } from 'react'
import {
    HashRouter,
    Link,
    useLocation,
    Route,
    Routes
  } from "react-router-dom";
import App from './App';
import HowToPlay from './HowToPlay';
import SettingPage from './SettingPage';


function Home() {
  const [ishome,setIsHome] = useState(true)
  return (
    <HashRouter>
        <Container>
            {ishome 
            ?
            <HomePage className={ishome && 'fadeIn'}>
              <Title>Spinner</Title>
              <Nav>
                  <Link className='link' onClick={()=>setIsHome(false)} to="/" >轉盤開始</Link>
                  <Link className='link' onClick={()=>setIsHome(false)} to="/record">轉盤紀錄</Link>
                  <Link className='link' onClick={()=>setIsHome(false)} to="/setting">遊戲設定</Link>
                  <Link className='link' onClick={()=>setIsHome(false)} to="/howToPlay">遊戲玩法</Link>
              </Nav>
              <Footer>
                  <FooterInfo>Design By Charonyu</FooterInfo>
                  <FooterInfo>
                      more imformation code in <a className='githubLink' href='https://github.com/Charonyuu/Spinner'>Github</a>    
                  </FooterInfo>
              </Footer>
            </HomePage>        
            :
            <Content tohome={()=>setIsHome(true)}/>
            }

        </Container>
    </HashRouter>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #222;
`
const HomePage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #222;
`
const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 60px;
  margin: 40px auto;
  color: rgba(0,0,0,0.6);
  text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
`
const Nav = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  margin-top: 40px;
  
  font-size: 30px;
`
const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  font-size: 18px;
`
const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bababa;
`

function Content({tohome}) {
    const location = useLocation();
  
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
  
    useEffect(() => {
      if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);
  
    return (
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<App tohome={tohome}/>}/>
          <Route path="/record" element={<HowToPlay tohome={tohome}/>} />
          <Route path="/setting" element={<SettingPage tohome={tohome}/>} />
          <Route path="/howToPlay" element={<HowToPlay tohome={tohome}/>} />
        </Routes>
      </div>
    );
  }
  