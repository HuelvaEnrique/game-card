import styled from "styled-components";

export const ContentGridImage = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
` 

export const ContentImage = styled.div`
  width: 150px;
  height: 200px;
  background: #000;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #10101050;
    transition: all .3s linear;
    visibility: hidden;
    opacity: 0;
  }
  .data {
    position: absolute;
    z-index: 10;
    left: calc(50% - 65px);
    top: calc(50% - 20px);
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s linear;
    button {
      width: 130px;
      height: 40px;
    }
  }

  &:hover::before, &:hover .data {
    visibility: visible;
    opacity: 1;
  }

`