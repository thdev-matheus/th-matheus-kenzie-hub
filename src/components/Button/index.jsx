import { Container } from "./styles";

export default function Button(
  { children, pinkSchema = false, ...rest },
  onClick
) {
  return (
    <Container pinkSchema={pinkSchema} type="button" {...rest}>
      {children}
    </Container>
  );
}
