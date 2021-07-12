import styled, { css } from 'styled-components';
import { theme } from '@gympass/yoga';

export const ContentUser = styled.div`
  display: flex;
  gap: ${theme.spacing.xlarge}px;
  margin-bottom: ${theme.spacing.medium}px;

  span {
    color: ${theme.colors.medium};
    font-size: ${theme.fontSizes.small}px;
  }

  ul {
    li{
      span {
        color: #0366d6;
      }
    }
  }
`;

export const UserImage = styled.img`
  width: 125px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small}px;
`;

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxxsmall}px;
`;

export const UserInfo = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xxxsmall}px;

    li {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xxxsmall}px;
    }
  }
`;

export const LinkProfile = styled.div`
  padding-top: ${theme.spacing.xsmall}px;
  padding-bottom: ${theme.spacing.xsmall}px;
  text-align: center;
  p {
    a {
      background: #2ea44f;
      color: ${theme.colors.white};
      text-decoration: none;
      border-radius: ${theme.radii.small}px;
      padding: ${theme.spacing.xsmall}px ${theme.spacing.xlarge}px;
      transition: 0.2s;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  padding-top: ${theme.spacing.xsmall}px;
  padding-bottom: ${theme.spacing.small}px;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxxsmall}px;

  ${({ active }) => (active
    ? css`
      &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #0366d6;
    }
    ` : css`
        &:hover {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 4px;
            background: #d1d5da;
          }
        }
    `)
}
`;
