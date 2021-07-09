import styled from 'styled-components';
import { theme } from '@gympass/yoga';

export const Card = styled.div`
  background: ${theme.colors.clear};
  height: calc(100vh - 148px);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.small}px;

  p {
    color: ${theme.colors.medium};
  }
`;
