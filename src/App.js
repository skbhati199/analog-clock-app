import {useEffect, useRef} from "react";

function App() {
  const hour = useRef(null);
  const min = useRef(null);
  const sec = useRef(null);

  const displayTime = () => {
    const date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss

    hour.current.style.transform = `rotate(${hRotation}deg)`
    min.current.style.transform = `rotate(${mRotation}deg)`
    sec.current.style.transform = `rotate(${sRotation}deg)`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      displayTime()
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  

  return (
   <>
    <div className="container">
      <div className="clock">

        <div ref={hour} style={{"--clr":"#B23023","--h":"70px", "--w":"4px"}} className="hand"><i></i></div>
        <div ref={min} style={{"--clr":"#000066","--h":"88px", "--w":"3px"}} className="hand"><i></i></div>
        <div ref={sec} style={{"--clr":"#FFFFFF", "--h":"98px", "--w":"2px"}} className="hand"><i></i></div>

        <span style={{"--i":1}}><b style={{"-i":1}}>1</b></span>
        <span style={{"--i":2}}><b style={{"-i":2}}>2</b></span>
        <span style={{"--i":3}}><b style={{"-i":3}}>3</b></span>
        <span style={{"--i":4}}><b style={{"-i":4}}>4</b></span>
        <span style={{"--i":5}}><b style={{"-i":5}}>5</b></span>
        <span style={{"--i":6}}><b style={{"-i":6}}>6</b></span>
        <span style={{"--i":7}}><b style={{"-i":7}}>7</b></span>
        <span style={{"--i":8}}><b style={{"-i":8}}>8</b></span>
        <span style={{"--i":9}}><b style={{"-i":9}}>9</b></span>
        <span style={{"--i":10}}><b style={{"-i":10}}>10</b></span>
        <span style={{"--i":11}}><b style={{"-i":11}}>11</b></span>
        <span style={{"--i":12}}><b style={{"-i":12}}>12</b></span>
      </div>
    </div>
    
   </>
  );
}

export default App;
