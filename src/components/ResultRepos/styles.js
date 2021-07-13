import styled from 'styled-components';
import { theme } from '@gympass/yoga';

export const Container = styled.div`
  border-bottom: 1px solid #d1d5da;
  padding: ${theme.spacing.large}px;
  margin-bottom: 30px;

  h3 {
    font-size: ${theme.fontSizes.large}px;
    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        color: #0366d6;
        text-decoration: underline;
      }
    }
  }

  p {
    font-size: ${theme.fontSizes.small}px;
    color: #586069;
  }

  span {
    font-size: ${theme.fontSizes.xsmall}px;
    color: #586069;
  }
`;
