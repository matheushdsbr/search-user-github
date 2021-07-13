import styled from 'styled-components';
import { theme } from '@gympass/yoga';

export const Container = styled.form`
  padding: ${theme.spacing.large}px;

  /* fieldset {
    border-color: ${theme.colors.medium};

    &:hover, &:focus-within {
      border-color: ${theme.colors.clear};
    }

    input {
      color: ${theme.colors.clear};

      &:focus {
        color: ${theme.colors.clear};

        & ~ label {
          color: ${theme.colors.clear};
        }
      }
    }

    label {
      color: ${theme.colors.medium};
    }
  } */
`;
