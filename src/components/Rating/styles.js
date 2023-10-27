import styled from "styled-components";
import filledStar from "../../assets/star.svg";
import emptyStar from "../../assets/empty-star.svg";

export const Container = styled.svg`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15px;
  height: 15px;
  background-image: url(${({ disabled }) => disabled ? filledStar : emptyStar});
`;
