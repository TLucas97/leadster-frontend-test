import { CardStyles } from "./styled";
import type { CardProps } from "./interface";
import Button from "../Button";
import { useState } from "react";

export default function Card({ description, image_url, onClick }: CardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CardStyles
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="card-banner">
        <img src={image_url} alt="card-image" />
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      {isHovering && (
        <div className="absolute-middle-play-btn">
          <Button variant="secondary" onClick={onClick}>
            <h3>Assistir vídeo</h3>
          </Button>
        </div>
      )}
    </CardStyles>
  );
}
