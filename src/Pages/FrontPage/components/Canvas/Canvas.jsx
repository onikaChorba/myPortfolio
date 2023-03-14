import React from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { animate, ...rest } = props;
  const canvasRef = useCanvas(animate);

  return <canvas ref={canvasRef} {...rest} className="canvas" />;
};

export default Canvas;
