import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: scroll;

  padding: 0.5rem 0;

  ::-webkit-scrollbar {
    display: none;
  }

  hr {
    width: 90%;

    margin: 0;

    border: 1px solid var(--grey-3);
  }
`;

export const HeaderContainer = styled.div`
  width: 90%;
  max-width: 50rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 7rem;
  }

  > div {
    width: 6rem;

    button {
      margin: 0;
    }
  }
`;

export const UserContainer = styled.div`
  width: 90%;
  max-width: 50rem;
  min-height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 18pt;
    }
  }
`;

export const PortfolioContainer = styled.div`
  width: 90%;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const HeaderPortfolio = styled.div`
  width: 100%;
  max-width: 50rem;
  min-height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;

    padding: 0.5rem;

    border-radius: 0.25rem;

    background-color: var(--grey-3);
    color: var(--white);

    cursor: pointer;
  }
`;

export const MainPortfolio = styled.div`
  width: 100%;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem 0.5rem;

  border-radius: 3px;

  background-color: var(--grey-3);
`;

export const Card = styled.div`
  width: 100%;
  height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  background-color: var(--grey-4);

  h4 {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    small {
    }

    svg {
      display: none;

      @media (min-width: 768px) {
        display: block;
        cursor: pointer;
      }
    }
  }
`;
