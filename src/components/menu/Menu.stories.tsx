import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "./Menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Menu",
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colour: { control: "color" },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mobile: false,
  menuElements: [
    {
      element: {
        label: "Home",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
    {
      element: {
        label: "About us",
        url: "#",
      },
      onSelected: (link: string) => console.log(link),
      multiElement: [
        { label: "Our Story", url: "#" },
        { label: "Our Vision", url: "#" },
      ],
    },
    {
      element: {
        label: "News",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
    {
      element: {
        label: "Career",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
  ],
};

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.args = {
  mobile: true,
  menuElements: [
    {
      element: {
        label: "Home",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
    {
      element: {
        label: "About us",
        url: "#",
      },
      onSelected: (link: string) => console.log(link),
      multiElement: [
        { label: "Our Story", url: "#" },
        { label: "Our Vision", url: "#" },
      ],
    },
    {
      element: {
        label: "News",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
    {
      element: {
        label: "Career",
        url: "#",
      },
      multiElement: [],
      onSelected: (link: string) => console.log(link),
    },
  ],
};
