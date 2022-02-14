import styled from "styled-components";

export const ContentPlay = styled.section`
  background: #efefef;
  padding: 30px;
  width: 100%;
  min-height: 100vh;
`

export const PlayButton = styled.div`
  background: #10101050;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${ props => !props.isReady ? 'visible' : 'hidden'};
  opacity: ${ props => !props.isReady ? '1' : '0'};
  button {
    padding: 15px 20px;
    border-radius: 10px;
    background: #2955f5;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`