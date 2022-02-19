import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 50px;
  background-color: blue;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  /* border-radius: 0.2rem; */

  .functional-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    border: 1px solid black;

    width: 40%;
    height: 100%;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .title {
    width: 60%;
  }
`;

export { Container };