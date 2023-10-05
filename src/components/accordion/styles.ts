import { css } from "@styled/css";

export const AccordionRoot = css({
  borderRadius: 6,
  width: 300,
});

export const AccordionItem = css({
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },
});

export const StyledHeader = css({
  all: "unset",
  display: "flex",
});

export const StyledTrigger = css({
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "purps.default",
  "&:hover": { backgroundColor: "purps.20" },
});

export const StyledChevron = css({
  color: "purps.default",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

export const StyledContent = css({
  overflow: "hidden",
  fontSize: 15,

  '&[data-state="open"]': {
    animation: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  },
  '&[data-state="closed"]': {
    animation: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  },
});

export const StyledContentText = css({
  padding: "15px 20px",
});
