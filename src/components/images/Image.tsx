import "./image.css";

interface ImageProps {
  /**
   * Image source
   */
  src: any;
  /**
   * Image clickable?
   */
  clickable?: boolean;
  /**
   * Custom class for additional styling required
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Image = ({
  src,
  clickable = false,
  className = "",
  onClick,
  ...props
}: ImageProps) => {
  return (
    <img
      src={src}
      className={["image-primary", clickable && "clickable", className].join(
        " "
      )}
      onClick={onClick}
    />
  );
};
