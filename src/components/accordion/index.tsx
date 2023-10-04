import React, { HTMLAttributes } from "react";
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from "./styles";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const AccordionDemo = () => (
  <Accordion.Root type="multiple" className={AccordionRoot}>
    <Accordion.Item value="item-1" className={AccordionItem}>
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item value="item-2" className={AccordionItem}>
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item value="item-3" className={AccordionItem}>
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Header className={StyledHeader}>
    <Accordion.Trigger {...props} ref={forwardedRef} className={StyledTrigger}>
      {children}
      <ChevronDownIcon aria-hidden className={StyledChevron} />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Content {...props} ref={forwardedRef} className={StyledContent}>
    <div className={StyledContentText}>{children}</div>
  </Accordion.Content>
));
