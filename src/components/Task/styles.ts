import styled, { css } from "styled-components";

type ContainerProps = {
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 350px;
  height: 50px;
  background-color: blue;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1.5rem 1rem;
  /* border-top: 0.5rem solid white; */
  cursor: grabbing;

  animation: bounce 1s infinite alternate;
    transition: all 0.7s;

    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-0.1rem);
      }
    }

  .functional-box {
    width: 40%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .box-title {
    width: 55%;
    
    h3 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: white;
    }
  }

  ${props => props.isDragging && css`
    border: 0.125rem dashed white;
    /* padding-top: 1.75rem; */
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    animation: none;

    cursor: grab;

    h3, img {
      opacity: 0;
    }
  `}
`;

export { Container };