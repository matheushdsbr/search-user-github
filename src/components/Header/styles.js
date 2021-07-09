import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  background-color: #24292e;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;

    svg {
      width: 32px;
      fill: white;
    }
  }
`;
