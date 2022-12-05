import { ComponentStory, ComponentMeta } from "@storybook/react";

import LOGO from "../../assets/images/Image9.png";

import { Image } from "./Image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: LOGO,
};

export const Clickable = Template.bind({});
Clickable.args = {
  src: LOGO,
  clickable: true,
};
