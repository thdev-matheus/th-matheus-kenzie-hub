import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  background-color: #121214aa;
`;

export const ModalHeader = styled.div`
  width: 19rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.2rem 0.5rem;

  border-radius: 3px 3px 0 0;

  background-color: var(--grey-2);

  h4 {
    font-size: 9pt;
  }

  svg {
    width: 2rem;
    height: 2rem;

    padding: 0.2rem;

    border-radius: 0.25rem;
    color: var(--white);

    cursor: pointer;
  }

  @media (min-width: 1440px) {
    width: 25rem;

    padding: 0.5rem 1rem;

    h4 {
      font-size: 12pt;
    }
  }
`;

export const ModalBox = styled.form`
  width: 19rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  border-radius: 0 0 3px 3px;

  background-color: var(--grey-3);

  div {
    width: 100%;

    display: flex;
    gap: 1rem;

    button + button {
      background-color: var(--grey-2);
      width: 8rem;

      :hover {
        background-color: var(--grey-1);
      }
    }
  }

  @media (min-width: 1440px) {
    width: 25rem;

    button {
      height: 4rem;
      font-size: 14pt;
    }
  }
`;
