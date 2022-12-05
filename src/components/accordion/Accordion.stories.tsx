import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "landing-test",
  elements: [
    {
      title: "Are you able to support my small business?",
      paragraph:
        "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
    },
    {
      title: "What are the services you provide?",
      paragraph:
        "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
    },
    {
      title: "Are you hiring?",
      paragraph:
        "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
    },
    {
      title: "How do I contact you?",
      paragraph:
        "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
    },
  ],
};
