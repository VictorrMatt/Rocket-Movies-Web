import styled from "styled-components";

export const Container = styled.div`
  height: 24px;
  padding: 5px 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;
