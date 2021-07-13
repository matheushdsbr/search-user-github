import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

export const Card = styled.div`
  background: #24292e;
  height: calc(100vh - 148px);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.small}px;

  div {
    background: #2ea44f;
    padding: 10px;
    border-radius: 8px;
  }

  h3 {
    color: ${theme.colors.clear};
  }

  p {
    color: ${theme.colors.light};
  }

  ${media.md`
    h3 {
      font-size: 50px;
    }

    p {
      font-size: 24px;
    }
  `}
`;
