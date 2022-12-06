import "./carousel.css";
import { Image } from "../images";
import { useEffect, useState } from "react";
import { Icon, IconType } from "../icons";
import { Helper } from "../../utils";
import { ColourConfigurations } from "../../constants/colourConfigurations";
import { Card, CardProps } from "../card";

interface CarouselProps {
  /**
   * List of elements in Carousel
   */
  elements?: Array<string>;
  /**
   * List of card elements in Carousel
   */
  cardElements?: Array<CardProps>;
  /**
   * Unique accordion ID
   */
  id?: string;
  /**
   * Card type?
   */
  card?: boolean;
}

export const CarouselCustom = ({
  elements = [],
  cardElements = [],
  id,
  card,
  ...props
}: CarouselProps) => {
  const [currentElement, setCurrentElement] = useState(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setNumberOfCards(Math.floor((getBreakpoint() * 0.8) / 200));
  }, [width]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getBreakpoint = () => {
    switch (true) {
      case width >= 1400:
        return 1320;
      case width >= 1200:
        return 1140;
      case width >= 992:
        return 960;
      case width >= 768:
        return 720;
      case width >= 576:
        return 540;
      default:
        return width;
    }
  };

  if (!card)
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
                currentElement === index ? "active" : ""
              }`}
              key={index}
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
  else
    return (
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {numberOfCards &&
            Array.from(
              { length: Math.floor(cardElements.length / numberOfCards) },
              (element, index) => (
                <div
                  className={`carousel-item carousel-inner-float ${
                    currentElement === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="w-100 row d-flex justify-content-around">
                    {cardElements
                      .slice(
                        index * numberOfCards,
                        index * numberOfCards + numberOfCards
                      )
                      .map((e, i) => (
                        <Card
                          img={e.img}
                          title={e.title}
                          colour={e.colour}
                          key={i}
                        />
                      ))}
                  </div>
                </div>
              )
            )}
          {numberOfCards && cardElements.length % numberOfCards !== 0 && (
            <div
              className={`carousel-item carousel-inner-float ${
                currentElement ===
                Math.ceil(cardElements.length / numberOfCards)
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-100 row d-flex justify-content-start">
                {cardElements
                  .slice(
                    cardElements.length - (cardElements.length % numberOfCards),
                    cardElements.length
                  )
                  .map((e, i) => (
                    <Card
                      className="ms-4 me-4"
                      img={e.img}
                      title={e.title}
                      colour={e.colour}
                      key={i}
                    />
                  ))}
              </div>
            </div>
          )}
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
