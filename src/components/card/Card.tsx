import { Image } from "../images";
import "./card.css";

interface CardProps {
  /**
   * Image path
   */
  img?: string;
  /**
   * Card title
   */
  title: string;
  /**
   * Card colour
   */
  colour: "primary" | "rose" | "yellow" | "peach" | "cyan" | "lilac";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Card = ({ img, title, colour, ...props }: CardProps) => {
  return (
    <div className="card">
      <Image src={img} className="card-img-top" />
      <div className={`card-body ${colour}`}>
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
};
