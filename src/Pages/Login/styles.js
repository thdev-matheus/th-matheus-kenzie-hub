import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;

  padding: 1rem 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  width: 18rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;

  > img {
    width: 7rem;
  }

  @media (min-width: 1440px) {
    width: 30rem;
    min-height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

    > img {
      width: 10rem;
    }
  }
`;

export const LoginBox = styled.form`
  width: 19rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  border-radius: 3px;

  background-color: var(--grey-3);

  h3 {
    margin: 1.2rem 0 2rem;
  }

  small {
    margin: 1rem 0;
  }

  > button {
    height: 3rem;
  }

  .registerButtonLog {
    background-color: var(--grey-2);
    margin-top: 0;

    :hover {
      background-color: var(--grey-1);
    }
  }

  @media (min-width: 1440px) {
    width: 30rem;

    h3 {
      margin: 1.2rem 0 2rem;

      font-size: 18pt;
    }

    small {
      margin: 1rem 0;

      font-size: 12pt;
    }

    > button {
      height: 4rem;

      font-size: 16pt;
    }
  }
`;
