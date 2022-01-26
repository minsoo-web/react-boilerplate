import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import MButton from "./MButton";

export default {
  title: "Common/MButton",
  component: MButton,
  argTypes: {
    backGroundColor: {
      control: "color"
    }
  }
} as ComponentMeta<typeof MButton>;

const Template: ComponentStory<typeof MButton> = args => <MButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  backGroundColor: "#black",
  title: "Button"
};
