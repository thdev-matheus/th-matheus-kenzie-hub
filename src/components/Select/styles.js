import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;

  div {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    span {
      color: var(--negative);
    }
  }
`;
export const SelectContainer = styled.div`
  background: var(--grey-2);
  border-radius: 3px;
  border: 1px solid var(--gray-2);
  color: var(--grey-0);
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
      svg {
        color: var(--negative);
      }
    `}

  select {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);

    ::placeholder {
      color: var(--gray-1);
    }

    ::-webkit-scrollbar {
      display: inline;
    }

    option {
      background-color: var(--grey-2);

      cursor: pointer;
    }
  }

  svg {
    margin-right: 1rem;
  }

  @media (min-width: 1440px) {
    height: 70px;

    select {
      font-size: 14pt;

      ::placeholder {
        color: var(--gray-1);
      }

      ${(props) =>
        props.iserrored &&
        css`
          ::placeholder {
            color: var(--negative);
          }
        `}
    }

    select:-internal-autofill-selected {
      background-color: transparent;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;

      margin-right: 1rem;
    }
  }
`;
