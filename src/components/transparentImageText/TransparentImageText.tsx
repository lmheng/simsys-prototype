import { Icon, IconType, IconVariant } from "../icons";
import { Image } from "../images";
import "./transparentImageText.css";

interface CardProps {
  /**
   * Custom class for additional styling required
   */
  img?: string;
  /**
   * Custom class for additional styling required
   */
  title: string;
  /**
   * Custom class for additional styling required
   */
  text: string;
  /**
   * key param for child element
   */
  key: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const TransparentImageText = ({
  img,
  title,
  text,
  key,
  ...props
}: CardProps) => {
  return (
    <div className="image-container">
      <Image src={img} className="w-100" />
      <div className="content">
        <p>
          <a
            data-bs-toggle="collapse"
            href={`#collapseCard-${key}`}
            role="button"
            aria-expanded="false"
            aria-controls={`collapseCard-${key}`}
          >
            <Icon
              type={IconType.up}
              variant={IconVariant.clickable}
              size={12}
            />
          </a>
        </p>
        <h4>{title}</h4>
        <div className="collapse" id={`collapseCard-${key}`}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
