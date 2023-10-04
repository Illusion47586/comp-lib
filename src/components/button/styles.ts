import { cva } from "@styled/css";

export const ButtonRecipe = cva({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",

    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: "8px",
    cursor: "pointer",
    lineHeight: 1,
    color: "white",
    width: "100%",
    transition: "all .3s",

    "&:hover, &:focus": {
      boxShadow: "0px 8px 15px 0px rgba(128, 0, 255, 0.30)",
    },
    "&:active": {
      background: "purps.3",
    },
  },
  variants: {
    mode: {
      primary: {
        backgroundColor: "purps.default",
      },
      secondary: {
        color: "purps.default",
        backgroundColor: "transparent",
        border: "1px solid token(colors.purps.default)",
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
        fontSize: "20px",
        lineHeight: "24px",
        padding: "13px 20px",
      },
    },
  },
  defaultVariants: { mode: "primary", size: "large" },
});
