import styled from 'styled-components';
import { theme } from '@gympass/yoga';

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 16px;

  div {
    display: flex;
    justify-content: center;

    svg {
      width: 32px;
      fill: ${theme.colors.stamina};
    }
  }
`;
