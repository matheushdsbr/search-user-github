import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
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

  ${media.md`
    gap: ${theme.spacing.xxlarge}px;
  `}
`;

export const UserImage = styled.img`
  width: 125px;
  border-radius: 50%;

  ${media.md`
    width: 280px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small}px;

  ${media.md`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxxsmall}px;

  ${media.md`
    p {
      font-size: ${theme.fontSizes.xxlarge}px;
    }

    span {
      font-size: ${theme.fontSizes.medium}px;
    }
  `}
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

  ${media.md`
    ul {
      gap: ${theme.spacing.xsmall}px;
    }
  `}
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

export const ResultContainer = styled.div`
  margin-top: 30px;
  box-shadow: 0px 6px 8px 0px rgb(0 0 0 / 45%);
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #24292e;
  border: none;
  padding-top: ${theme.spacing.xsmall}px;
  padding-bottom: ${theme.spacing.small}px;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxxsmall}px;

  span {
    font-family: Rubik;
    color: ${theme.colors.clear};
  }

  &:first-child {
    border-radius: 8px 0 0 0;
  }

  &:last-child {
    border-radius: 0 8px 0 0;
  }

  ${media.md`
    font-size: ${theme.fontSizes.medium}px;
    padding-top: ${theme.spacing.medium}px;
    padding-bottom: ${theme.spacing.medium}px;
  `}

  ${({ active }) => (active
    ? css`
      span {
        font-weight: ${theme.fontWeights.medium};
      }

      &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #2ea44f;

      ${media.md`
        height: 6px;
      `}
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

            ${media.md`
              height: 6px;
            `}
          }
        }
    `)
}
`;
