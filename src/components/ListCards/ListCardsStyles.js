import styled from "styled-components";

export const ContentListCards = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1300px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    height: 8px;
    background: #fff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d6d6d6;
    border-radius: 10px;
  }
`
export const Card = styled.div`
  min-width: 160px;
  max-width: 160px;
  height: 350px;
  img {
    width: 100%;
    object-fit: cover;
  }
  .atributos {
    list-style: none;
    padding: 0;
    li {
      margin: 5px 0;

    }
  }
`