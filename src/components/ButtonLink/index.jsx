import { Container, ArrowLeft } from "./styles";

export function ButtonLink({ title, icon = false, ...rest}) {
  return (
    <Container {...rest}>
      {icon && <ArrowLeft />}
      <p>{title}</p>
    </Container>
  );
}
