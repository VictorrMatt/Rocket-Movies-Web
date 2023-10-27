import { Container } from "./styled";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div>
        <Rating className="rating" rating={data.rating} />
      </div>
      <p>{data.description}</p>
      <div>
        {data.tags &&
          data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  );
}
