import { Container } from "./styles";

export function Button({ title, loading = false, $altercolors, ...rest }) {
  return (
    <Container disabled={loading} $altercolors={$altercolors} {...rest}>
      {loading ? "Loading..." : title}
    </Container>
  );
}
