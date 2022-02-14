import styled from "styled-components";

export const ContentModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${ props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${ props => props.isOpen ? '1' : '0'};
  width: 100%;
  min-height: 100vh;
`

export const ModalData = styled.div`
  width: 600px;
  height: 450px;
  background: #f6f6f6;
  border-radius: 20px;
  padding: 30px;
  position: relative;

  z-index: 11;
  .form-modal {
    display: flex;
    flex-wrap: wrap;
  }
  .content-input {
    width: 45%;
    margin: 5px;
    label {
      width: 100%;
      display: block;
    }
    input {
      margin: 5px 0 0 0;
      display: block;
      width: 90%;
      outline: none;
    }
  }

  button[type="submit"] {
    margin: 20px 0 0 0;
    background: #51a5c5;
    border: none;
    padding: 15px 10px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(0.9);  
      cursor: pointer;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #10101050;
  z-index: 10px;
`