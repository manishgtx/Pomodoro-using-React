import {useEffect,useContext} from 'react';
import styled from "styled-components";
import {PomoContext} from '../App';
const Clock = () => {
    const {play,rest,setRest,cycle,setCycle,time,setTime,setInitial} = useContext(PomoContext);
    
    useEffect(()=> {
      if(cycle >= 0) {
        if (time > 0 && play === true) {
          const interval = setTimeout(() => {
            setTime((time) => time - 1);
          }, 1000);
          return () => clearTimeout(interval);
        } else if (time === 0) {
          
          if(rest === true){
            setTime(5*60);
            setInitial(5*60);
            setRest(false);
            setCycle((cycle) => cycle - 1);
          }
          else if (rest === false && cycle > 0) {
            setTime(25*60);
            setInitial(25*60);
            setRest(true);
          }
          
        }
      }
      else {
        setTime(0);
      }
        
    },[time,cycle,rest,play,setCycle,setRest,setTime,setInitial]);

    const formatTime = (time) => {
      
      const min = Math.floor(time / 60);
      const second = time % 60;
      return `${min < 10 ? "0" + min : min}:${
        second < 10 ? "0" + second : second
      }`;
        
    }
  return (
    <ClockContainer>
          <Title>{rest ? 'Session' : 'Break' }</Title>
        <TimerText>
            {formatTime(time)}
        </TimerText>
          <CycleInput maxLength={2} onChange={(e) => setCycle(e.target.value)} value={cycle}/>
    </ClockContainer>
  )
}
const CycleInput = styled.input`
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #bf392b;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  outline: none;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: white;
  margin-left: auto;
  margin-right: auto;
`;
const ClockContainer = styled.div`
    width: 240px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    text-align: center;
`;
const Title = styled.div`
  text-align: center;
`;
const TimerText = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: 700;
`;
export default Clock