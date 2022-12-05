import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import SIMSYS from "../../assets/images/Image11.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  img: SIMSYS,
  title: "Test",
  colour: "primary",
};

export const Alternate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alternate.args = {
  img: SIMSYS,
  title: "Test",
  colour: "rose",
};
