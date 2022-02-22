import styled, { css } from "styled-components";

type ContainerProps = {
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 50px;
  background-color: blue;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  cursor: grabbing;

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
    border: 2px dashed white;
    padding-top: 1rem;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grab;

    h3, img {
      opacity: 0;
    }
  `}
`;

export { Container };