import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Banner.css";

export default function Banner({
  variant = "info",
  children,
  title = "Title content",
  closeAble = false,
  timeout = 3,
}) {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const maxWidth = "300px";
  const progressBg = {
    info: "#AEE3F9",
    congrats: "#AEE3F9",
    danger: "#F4CEA3",
  };

  useEffect(() => {
    if (timeout > 0) {
      const loop = setInterval(() => {
        if (progress >= 100) {
          clearInterval(loop);
          setIsActive(false);
        } else if(!isPaused) setProgress((progress) => progress + 1);
      }, (timeout * 1000) / 100);

      return () => {
        clearInterval(loop);
      };
    }
  }, [progress, isPaused]);

  const handleClick = (e) => {
    setIsActive(false);
  };
  const handleMouseEnter = (e) => {
    setIsPaused(true);
  };
  const handleMouseLeave = (e) => {
    setIsPaused(false);
  };

  const fillerStyles = {
    height: "5%",
    bottom: "0",
    left: "0",
    position: "absolute",
    width: `${progress}%`,
    backgroundColor: progressBg[variant],
    borderRadius: "inherit",
    zIndex: "1",
    transition: "width 1ms ease-in-out",
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
        maxWidth: maxWidth,
      }}
      className={isActive ? "mbox-" + variant : "mhide"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={timeout > 0 ? fillerStyles : { display: "none" }}></div>
      <div style={{ zIndex: "10", display: "flex" }}>
        <div style={{ marginLeft: "15px", padding: "10px", flexGrow: "4" }}>
          <div className={"m-title"}>{title} </div>
          <div>{children} </div>
        </div>
        <div
          className={closeAble ? "m-x" : "mhide"}
          id={Math.floor(Math.random() * 100)}
          onClick={handleClick}
        >
          X
        </div>
      </div>
    </aside>
  );
}
Banner.propTypes = {
  variant: "info" | "congrats" | "danger",
};
