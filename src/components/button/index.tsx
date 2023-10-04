import { PButton } from "./styles";

import type { HTMLAttributes } from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <PButton
      type="button"
      mode={primary ? "primary" : "secondary"}
      size={size}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </PButton>
  );
};
