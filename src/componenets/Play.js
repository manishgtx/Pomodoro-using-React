import styled from "styled-components"
import {AiOutlinePause} from "react-icons/ai"
import { AiFillPlayCircle } from "react-icons/ai";
import { useContext } from "react";
import { PomoContext } from "../App";
const Play = () => {
  const {play,setPlay} = useContext(PomoContext);
  return (
    <div>
      <PlayContainer>
        {play ? (
          <AiOutlinePause onClick={() => setPlay(false)} />
        ) : (
          <AiFillPlayCircle onClick={() => setPlay(true)} />
        )}
      </PlayContainer>
    </div>
  );
}
const PlayContainer = styled.span`
    color: white;
    font-size: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;
export default Play;