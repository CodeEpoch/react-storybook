import React from "react";
import Banner from "./Banner";
export default { title: "Example/Banner", component: Banner };

const Template = args => <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
    variant: "info",
    children: `This is an INFO banner`
}

export const Danger = () => (
  <Banner variant="danger">
    {" "}
          <p>This is an example of a danger banner to display warnings.</p>   {" "}
  </Banner>
);
export const Congrats = () => (
  <Banner variant="congrats">
    {" "}
          <p> This is an example a congrats banner to celebrate a win!</p>    {" "}
  </Banner>
);
export const Documentation = () => (
  <Banner variant="documentation">
    {" "}
         {" "}
    <p>
      {" "}
      This is an example a documentation banner to highlight relevant reading
      materials and documentation.{" "}
    </p>{" "}
       {" "}
  </Banner>
);