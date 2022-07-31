import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: left;

  div {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    span {
      color: var(--negative);
    }
  }

  @media (min-width: 1440px) {
    div {
      font-size: 1rem;
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-2);
  border-radius: 3px;
  border: 1px solid var(--gray-2);
  color: var(--grey-0);
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${(props) =>
    props.iserrored &&
    css`
      border-color: var(--negative);

      svg {
        color: var(--negative);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);

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

  input:-internal-autofill-selected {
    background-color: transparent;
  }

  svg {
    margin-right: 1rem;
  }

  @media (min-width: 1440px) {
    height: 70px;

    input {
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

    input:-internal-autofill-selected {
      background-color: transparent;
    }

    svg {
      width: 1rem;
      height: 1rem;

      margin-right: 1rem;
    }
  }
`;
