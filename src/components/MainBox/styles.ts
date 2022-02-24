import styled from "styled-components";


const Container = styled.div`
  width: 25rem;
  padding: 1rem 1.5rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;


  input {
    width: 80%;
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