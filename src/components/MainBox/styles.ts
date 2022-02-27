import styled from "styled-components";


const Container = styled.div`
  .top {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    >div {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 1rem;
    }
  }

  width: 33rem;
  height: 580px;
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 0rem;

  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 510px){
    height: auto;
    .top {
      margin-bottom: 3rem;
    }
  }

  input {
    width: 60%;
    height: 2.2rem;
    padding: 0rem 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 0.9rem;
  }
`;

export { Container };