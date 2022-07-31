import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  icon: Icon,
  register,
  name,
  error = "",
  ...rest
}) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer iserrored={!!error}>
        {Icon && <Icon />}
        <input iserrored={error && "true"} {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
