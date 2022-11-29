import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Banner.css";

export default function Banner({
  variant = "info",
  children,
  title = "Title content",
}) {
  const [btext, setBtext] = useState("Click to load");

  const handleClick = () => {
    if (btext != "Loading") {
      setBtext("Loading");
    } else {
      setBtext("Click to load");
    }
  };

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "1.5rem auto",
        lineHeight: "1.2",
        textAlign: "left",
        position: "relative",
        maxWidth: "500px",
      }}
      className={"mbox-" + variant}
    >
      <div style={{ marginLeft: "15px", padding: "10px" }}>
        <div className={"m-title"}>{title} </div>
        <div>{children} </div>
      </div>
      <div>
        X
      </div>
    </aside>
  );
}
Banner.propTypes = {
  variant: "info" | "congrats" | "documentation" | "danger",
};
