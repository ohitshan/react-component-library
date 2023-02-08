import Button from "./Button";
import React from "react";
export default {
  component: Button,
  title: "Button",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args: any) => (
  <div style={{ background: "red", width: 1000 }}>
    <Button {...args} shape="circle" />
  </div>
);

export const Default = Template.bind({});
