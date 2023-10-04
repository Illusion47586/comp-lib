import { TabContent, TabList, TabRoot, TabTrigger } from "./styles";
import * as Tabs from "@radix-ui/react-tabs";

const tabList = [
  {
    label: "Unstyled",
    content:
      "Components ship with zero styles, giving you complete control over styling. Components can be styled with any styling solution (vanilla CSS, CSS preprocessors, CSS-in-JS libraries). Learn more in our styling guide.",
  },
  {
    label: "Uncontrolled",
    content:
      "Where applicable, components are uncontrolled by default but can also be controlled, alternatively. All of the behavior wiring is handled internally, so you can get up and running as smoothly as possible, without needing to create any local states.",
  },
];

export const Tab = () => (
  <Tabs.Root defaultValue="tab1" className={TabRoot}>
    <Tabs.List aria-label="tabs example" className={TabList}>
      {tabList.map((item: any, index: number) => {
        return (
          <Tabs.Trigger
            key={`tab${index + 1}`}
            value={`tab${index + 1}`}
            className={TabTrigger}
          >
            {item.label}
          </Tabs.Trigger>
        );
      })}
    </Tabs.List>
    {tabList.map((item: any, index: number) => {
      return (
        <Tabs.Content
          key={`tab${index + 1}`}
          value={`tab${index + 1}`}
          className={TabContent}
        >
          {item.content}
        </Tabs.Content>
      );
    })}
  </Tabs.Root>
);
