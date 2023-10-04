import { TabContent, TabList, TabRoot, TabTrigger } from './styles';

const tabList = [
  {
    label: 'Unstyled',
    content:
      'Components ship with zero styles, giving you complete control over styling. Components can be styled with any styling solution (vanilla CSS, CSS preprocessors, CSS-in-JS libraries). Learn more in our styling guide.',
  },
  {
    label: 'Uncontrolled',
    content:
      'Where applicable, components are uncontrolled by default but can also be controlled, alternatively. All of the behavior wiring is handled internally, so you can get up and running as smoothly as possible, without needing to create any local states.',
  },
];

export const Tab = () => (
  <TabRoot defaultValue='tab1'>
    <TabList aria-label='tabs example'>
      {tabList.map((item: any, index: number) => {
        return (
          <TabTrigger key={`tab${index + 1}`} value={`tab${index + 1}`}>
            {item.label}
          </TabTrigger>
        );
      })}
    </TabList>
    {tabList.map((item: any, index: number) => {
      return (
        <TabContent key={`tab${index + 1}`} value={`tab${index + 1}`}>
          {item.content}
        </TabContent>
      );
    })}
  </TabRoot>
);
