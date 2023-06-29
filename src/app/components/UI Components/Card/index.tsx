import { CardStyles } from "./styled";
import type { CardProps } from "./interface";

export default function Card({ description, image_url }: CardProps) {
  return (
    <CardStyles>
      <div className="card-banner">
        <img src={image_url} alt="card-image" />
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </CardStyles>
  );
}
