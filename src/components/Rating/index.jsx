import { Container } from "./styles";

export function Rating({ rating, gap }) {
  const stars = addStars(rating);

  function addStars(rate) {
    let rating = rate;
    let allStars = [];

    for (let c = 1; c <= 5; c++) {
      allStars.push(
        <Container key={c} disabled={rating >= 1} />
      );
      rating--;
    }

    return allStars;
  }

  return <div><div>{stars}</div></div>;
}