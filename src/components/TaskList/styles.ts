import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  @media (max-width: 510px){
    height: auto;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 0.5rem; 
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(white, blue, white);
    border-radius: 1.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 1.5rem;
  }
`;

export { Container };