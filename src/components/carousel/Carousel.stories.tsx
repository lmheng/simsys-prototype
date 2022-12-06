import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarouselCustom } from "./Carousel";

import Image8 from "../../assets/images/Image8.png";
import Image10 from "../../assets/images/Image10.png";

import SIMSYS from "../../assets/images/Image11.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/CarouselCustom",
  component: CarouselCustom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof CarouselCustom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CarouselCustom> = (args) => (
  <CarouselCustom {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "carousel-test",
  elements: [Image8, Image10, Image8, Image10],
};

export const CardCarousel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardCarousel.args = {
  id: "carousel-card-test",
  card: true,
  cardElements: [
    {
      img: SIMSYS,
      title: "Test",
      colour: "primary",
    },
    {
      img: SIMSYS,
      title: "Test",
      colour: "primary",
    },
    {
      img: SIMSYS,
      title: "Test",
      colour: "primary",
    },
    {
      img: SIMSYS,
      title: "Test",
      colour: "primary",
    },
    {
      img: SIMSYS,
      title: "Test",
      colour: "primary",
    },
  ],
};
