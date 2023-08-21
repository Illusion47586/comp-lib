import { cva } from "@styled/css";
import { styled } from "@styled/jsx";

const ButtonRecipe = cva({
  base: {
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: "3rem",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    color: "white",
  },
  variants: {
    mode: {
      primary: {
        backgroundColor: "#646cff",
      },
      secondary: {
        backgroundColor: "transparent",
        border: "rgb(100, 108, 255) 1px solid",
      },
    },
    size: {
      small: {
        fontSize: "12px",
        padding: "10px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "11px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
  },
  defaultVariants: { mode: "primary", size: "medium" },
});

export const PButton = styled("button", ButtonRecipe);
