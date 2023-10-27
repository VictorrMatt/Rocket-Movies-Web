import styled from "styled-components";
import clock from "../../assets/Clock.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  > section {
    .buttons {
      display: flex;
      justify-content: space-between;
    }

    .movie_title {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;

      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 36px;
        font-weight: 500;
      }

      div {
        display: flex;
        gap: 10px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .user_data {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 40px;

      img {
        height: 16px;
        width: 16px;
      }

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    .movie_tags {
      display: flex;
      gap: 8px;
      margin-bottom: 40px;
    }

    .movie_description {
      p {
        text-align: justify;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

export const Clock = styled.svg`
  width: 16px;
  height: 16px;
  background-image: url(${clock});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
