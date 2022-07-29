import {useContext, useEffect} from 'react';
import styled from "styled-components"; 
import Timer from "./Timer";
import { PomoContext } from '../App';
const ProgressBar = () => {
    const {progress,setProgress,time,initial} = useContext(PomoContext);
    useEffect(()=> {
      setProgress(time/(initial/100));
    },[setProgress,time,initial])
  return (
    <ProgressBarOuter progress={progress}>
      <ProgressBarInner>
        <Timer/>
      </ProgressBarInner>
    </ProgressBarOuter>
  );
}
const ProgressBarOuter = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: red;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: conic-gradient(#e74d3d ${({progress})=> progress}%, white ${({progress})=> progress}%);
`;
const ProgressBarInner = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #e74d3d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
export default ProgressBar