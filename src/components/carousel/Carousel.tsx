import "./carousel.css";
import { Image } from "../images";
import { useState } from "react";
import { Icon, IconType } from "../icons";
import { Helper } from "../../utils";
import { ColourConfigurations } from "../../constants/colourConfigurations";

interface CarouselProps {
  /**
   * List of elements in Carousel
   */
  elements: Array<string>;
  /**
   * Unique accordion ID
   */
  id?: string;
}

export const Carousel = ({ elements = [], id, ...props }: CarouselProps) => {
  const [currentElement, setCurrentElement] = useState(0);

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {elements.map((element, index) => (
          <button
            type="button"
            key={index}
            data-bs-target={`#${id}`}
            data-bs-slide-to={index}
            className={currentElement === index ? "active" : ""}
            aria-current={currentElement === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {elements.map((element, index) => (
          <div
            className={`carousel-item ${
              currentElement == index ? "active" : ""
            }`}
          >
            <Image
              src={element}
              className="d-block w-100 carousel-image"
              key={index}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <Icon
          type={IconType.left}
          colour={Helper.getConstantColour(ColourConfigurations.primary)}
        />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <Icon
          type={IconType.right}
          colour={Helper.getConstantColour(ColourConfigurations.primary)}
        />
      </button>
    </div>
  );
};
