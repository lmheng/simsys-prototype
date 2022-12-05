import {
  Search,
  Youtube,
  Facebook,
  Menu,
  DoubleUp,
  Right,
  Left,
  Up,
  Minus,
  Plus,
} from "../../assets/svgs";
import { ColourConfigurations } from "../../constants/colourConfigurations";
import { Helper } from "../../utils";
import "./icon.css";

export enum IconType {
  search = "search",
  youtube = "youtube",
  facebook = "facebook",
  menu = "menu",
  doubleUp = "doubleUp",
  right = "right",
  left = "left",
  up = "up",
  minus = "minus",
  plus = "plus",
}

export enum IconVariant {
  inline = "inline",
  clickable = "clickable",
}

interface IconProps {
  /**
   * Icon appearance
   */
  type: IconType;
  /**
   * Optional colour customization
   */
  colour?: string;
  /**
   * Optional size customization
   */
  size?: number;
  /**
   * Notification (if this is >1, will show up as notification)
   */
  variant?: IconVariant;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Icon = ({
  type,
  colour = Helper.getConstantColour(ColourConfigurations.white),
  size = 24,
  variant,
  className,
  ...props
}: IconProps) => {
  const translate = `scale(${size / 24})`;

  const getIconType = () => {
    switch (type) {
      case IconType.search:
        return <Search fill={colour} transform={translate} />;
      case IconType.youtube:
        return <Youtube fill={colour} transform={translate} />;
      case IconType.facebook:
        return <Facebook fill={colour} transform={translate} />;
      case IconType.menu:
        return <Menu fill={colour} transform={translate} />;
      case IconType.doubleUp:
        return <DoubleUp fill={colour} transform={translate} />;
      case IconType.right:
        return <Right fill={colour} transform={translate} />;
      case IconType.left:
        return <Left fill={colour} transform={translate} />;
      case IconType.up:
        return <Up fill={colour} transform={translate} />;
      case IconType.minus:
        return <Minus fill={colour} transform={translate} />;
      case IconType.plus:
        return <Plus fill={colour} transform={translate} />;
      default:
        return <></>;
    }
  };

  if (variant === IconVariant.inline) return <>{getIconType()}</>;
  else
    return (
      <div
        className={[
          variant === IconVariant.clickable ? "clickable" : "",
          className,
        ].join(" ")}
        onClick={variant === IconVariant.clickable ? props.onClick : undefined}
      >
        {getIconType()}
      </div>
    );
};
