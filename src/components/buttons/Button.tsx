import React from "react";
import "../../styles/main.css";
import { Icon, IconType } from "../icons";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page? (overrides icon button settings)
   */
  primary?: boolean;
  /**
   * If not primary, what shape does this button take?
   */
  shape?: "circle" | "square" | "rectangle";
  /**
   * If icon button, what icon is it showing?
   */
  icon?: IconType;
  /**
   * If icon button, what colour is its icon?
   */
  iconColour?: string;
  /**
   * If icon button, what size is its icon?
   */
  iconSize?: number;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents for non-icon buttons
   */
  label?: string;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  shape,
  icon,
  iconColour,
  iconSize = 24,
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "";
  const content = primary ? (
    label
  ) : (
    <Icon type={icon!} colour={iconColour} size={iconSize} />
  );

  return (
    <button
      type="button"
      className={["storybook-button", shape, mode, className].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {content}
    </button>
  );
};
