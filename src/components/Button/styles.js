import styled from "styled-components";

export const Container = styled.button`
  height: 40px;
  width: 100%;

  margin-top: 16px;

  border: 2px solid var(--black);
  border-radius: 3px;

  color: var(--white);
  background-color: ${(props) => (props.pinkSchema ? "#ff577f" : "#212529")};

  transition: 0.5s;

  font-weight: 400;
  font-size: medium;

  :hover {
    background-color: ${(props) => (props.pinkSchema ? "#ff427f" : "#343b41")};
  }
`;
