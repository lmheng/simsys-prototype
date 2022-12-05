import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Carousel } from "./Carousel";

import Image8 from "../../assets/images/Image8.png";
import Image10 from "../../assets/images/Image10.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Carousel",
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "carousel-test",
  elements: [Image8, Image10, Image8, Image10],
};
