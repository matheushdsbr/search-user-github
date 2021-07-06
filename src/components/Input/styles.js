import styled from 'styled-components';
import { theme } from '@gympass/yoga';

export const Container = styled.div`
  fieldset {
    border-color: ${theme.colors.medium};

    &:hover, &:focus-within {
      border-color: ${theme.colors.clear};
    }

    input:focus {
      color: ${theme.colors.clear};

      & ~ label {
        color: ${theme.colors.clear};
      }
    }

    label {
      color: ${theme.colors.medium};
    }
  }
`;
