import styled from "styled-components";
import backgroundImg from "../../assets/background.jpeg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 136px;
  margin: auto 0;
  text-align: center;
  gap: 48px;

  > .logo {
    h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    text-align: left;
  }

  > a {
    margin-top: 48px;
    display: inline-block;
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: opacity(0.2);
`;
