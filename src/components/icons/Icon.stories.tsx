import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconType, IconVariant } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  colour: "#232323",
  type: IconType.facebook,
};

export const Clickable = Template.bind({});
Clickable.args = {
  colour: "#232323",
  type: IconType.facebook,
  variant: IconVariant.clickable,
};

export const Inline = Template.bind({});
Inline.args = {
  colour: "#232323",
  variant: IconVariant.inline,
  type: IconType.facebook,
};
