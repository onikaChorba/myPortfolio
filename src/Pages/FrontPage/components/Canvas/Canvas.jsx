import React from "react";
import useCanvas from "./useCanvas";
import "./Canvas.scss";
const Canvas = (props) => {
  const { animate, ...rest } = props;
  const canvasRef = useCanvas(animate);

  return <canvas ref={canvasRef} {...rest} className="canvas" />;
};

export default Canvas;
