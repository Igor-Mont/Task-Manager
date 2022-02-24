import styled from "styled-components";

const Container = styled.div`
  h1 {
    text-align: center;
  }

  .box-btn {
    width: 100%;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .cancel {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background-color: red;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .done {
    border: 1px solid green;
    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background-color: green;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export { Container };