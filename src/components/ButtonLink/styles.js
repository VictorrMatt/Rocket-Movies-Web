import styled from "styled-components";
import arrowLeft from "../../assets/arrowleft.svg";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme, stressed }) => (stressed ? "red" : theme.COLORS.PINK)};
  margin-bottom: 25px;
`;

export const ArrowLeft = styled.svg`
  width: 16px;
  height: 20px;
  background-image: url(${arrowLeft});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
