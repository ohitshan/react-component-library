import Table from "./Table";
import React from "react";
import hi2 from "../../../src/hi.svg";
export default {
  component: Table,
  title: "Table",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args: any) => (
  <div style={{ background: "red", width: 1000 }}>
    <Table />
  </div>
);

export const Default = Template.bind({});
