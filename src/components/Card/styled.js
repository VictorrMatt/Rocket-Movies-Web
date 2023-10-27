import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
    font-weight: 400;
    height: 52.846px;
    align-self: stretch;
    overflow: hidden;
  }

  > div:first-child {
    width: 84px;
    height: 12px;
    flex-shrink: 0;
  }

  > div:last-child {
    justify-content: start;
    gap: 8px;
  }
`;
