import styled from "styled-components";

export const Container = styled.div`
  > section {
    main {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-height: 700px;
      overflow: auto;

      .inputs,
      .buttons {
        display: flex;
        gap: 40px;
      }

      .markers_container {
        h3 {
          margin-bottom: 24px;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
          font-size: 20px;
          font-weight: 400;
        }

        .markers {
          display: flex;
          overflow-x: scroll;
          gap: 24px;
          padding: 16px;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          border-radius: 8px;

          /* Estilo do scrollbar */
          &::-webkit-scrollbar {
            height: 8px;
          }

          &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border-radius: 0 0 8px 8px; /* raio de borda da trilha do scrollbar */
          }
        }
      }
    }

    h2 {
      font-size: 36px;
      font-weight: 500;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 274px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 19px 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
