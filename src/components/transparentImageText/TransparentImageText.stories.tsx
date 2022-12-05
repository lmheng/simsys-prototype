import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TransparentImageText } from "./TransparentImageText";
import SIMSYS from "../../assets/images/Image11.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/TransparentImageText",
  component: TransparentImageText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof TransparentImageText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TransparentImageText> = (args) => (
  <TransparentImageText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  img: SIMSYS,
  title: "Small business",
  text: "Contact us now to find out how we can assist your small business navigate in today's world of IT and Technology in a cost effective manner.",
};
