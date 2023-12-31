import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme, $altercolors }) =>
    $altercolors ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, $altercolors }) =>
    $altercolors ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
