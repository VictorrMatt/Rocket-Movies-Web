import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  > section {
    div {
      display: flex;
    }

    .movie-title {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    button {
      width: 207px;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
    }

    .movie-cards {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-height: 600px;
      overflow: auto;

      div {
        cursor: pointer;
      }
    }
  }
`;

export const PlaceLink = styled(Link)``;
