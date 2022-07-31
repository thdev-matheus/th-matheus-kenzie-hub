import { Container, SelectContainer } from "./styles";

export default function Select({
  children,
  optionValueDefault,
  optionDefault,
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
      <SelectContainer isErrored={!!error}>
        {Icon && <Icon />}
        <select {...register(name)} {...rest}>
          <option value={optionValueDefault}>{optionDefault}</option>
          {children}
        </select>
      </SelectContainer>
    </Container>
  );
}
