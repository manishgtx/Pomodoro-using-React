import styled from "styled-components"
import Play from "./Play";
const Timer = ({play,setPlay}) => {
  return (
    <TimerContainer>
        <Play play={play} setPlay={setPlay}/>
    </TimerContainer>
  )
}
const TimerContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #bf392b;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
export default Timer;