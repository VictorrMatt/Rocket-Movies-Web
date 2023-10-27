import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  padding: 0 123px;
  gap: 64px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }

  > .userData {
    display: flex;
    align-items: center;
    text-align: end;
    gap: 10px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const PlaceLink = styled.a``;
