import React from "react";
import Banner from "./Banner";
export default { title: "Example/Banner", component: Banner };

const Template = args => <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
    variant: "info",
    children: `This is the content of INFO message box that will be displayed on the screen when the application is started and started successfully`,
    title: `This is the title of INFO message box`,
    timeout: 0,
    closeAble: true,
}

export const Danger = () => (
  <Banner variant="danger">
    {" "}
          <p>This is an example of a danger message box to display warnings.</p>   {" "}
  </Banner>
);
export const Congrats = () => (
  <Banner variant="congrats">
    {" "}
          <p> This is a green example </p>    {" "}
  </Banner>
);
