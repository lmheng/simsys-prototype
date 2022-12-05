import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { IconType } from "../icons";
import { Helper } from "../../utils";
import { ColourConfigurations } from "../../constants/colourConfigurations";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Circle = Template.bind({});
Circle.args = {
  primary: false,
  shape: "circle",
  icon: IconType.right,
  iconColour: Helper.getConstantColour(ColourConfigurations.primary),
};

export const Square = Template.bind({});
Square.args = {
  primary: false,
  shape: "square",
  icon: IconType.search,
  iconColour: Helper.getConstantColour(ColourConfigurations.text),
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  primary: false,
  shape: "rectangle",
  iconSize: 48,
  icon: IconType.doubleUp,
  iconColour: Helper.getConstantColour(ColourConfigurations.white),
};
