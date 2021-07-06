import { createGlobalStyle } from 'styled-components';
import { theme } from '@gympass/yoga';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Rubik', sans-serif;
    background-color: ${theme.colors.stamina};
  }
`;
