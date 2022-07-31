import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .mainBox {
    width: 90%;
    max-width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      width: 70%;
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;
