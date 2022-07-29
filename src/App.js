import styled from 'styled-components';
import React from 'react';
import {useState} from 'react';
import ProgressBar from './componenets/ProgressBar';
import Clock from './componenets/Clock';
export const PomoContext = React.createContext();
function App() {
  const [play,setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(25*60);
  const [cycle, setCycle] = useState(3);
  const [rest, setRest] = useState(true);
  const [initial,setInitial] = useState(25*60);
  return (
    <PomoContext.Provider value={{play,setPlay,progress,setProgress,time,setTime,cycle,setCycle,rest,setRest,initial,setInitial}}>
    <Title>Pomodoro</Title>
      <ProgressBar/>
      <Clock/>
    </PomoContext.Provider>
  );
}
const Title = styled.h1`
text-transform: uppercase;
text-align: center;
`;

export default App;
