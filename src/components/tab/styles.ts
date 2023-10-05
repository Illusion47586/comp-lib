import { css } from "@styled/css";

export const TabRoot = css({
  width: "30vw",
});

export const TabList = css({
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0,
});

export const TabTrigger = css({
  padding: "10px",
  width: "100%",
  cursor: "pointer",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ccc",
  boxSizing: "content-box",
  _active: {
    backgroundColor: "#f5f5f5",
  },
  _hover: {
    backgroundColor: "#f0f0f0",
  },
  position: "relative",
  '&[data-state="active"]': {
    borderBottom: "none",
    _after: {
      content: '" "',
      position: "absolute",
      width: "100%",
      height: "2px",
      backgroundColor: "purps.default",
      left: 0,
      bottom: 0,
    },
  },
});

export const TabContent = css({
  padding: "15px 0",
});
