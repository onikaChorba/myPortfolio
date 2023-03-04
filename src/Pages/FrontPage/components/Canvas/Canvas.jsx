import React, { useRef, useEffect } from "react";
import "./Canvas.scss";
const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");

    const circle = [];
    const maxCircle = 50;
    const colors = ["white", "yellow", "red", "grey", "orangered", "maroon"];
    const minRadius = 2.5;
    const maxRadius = 5.5;

    for (let i = 0; i < maxCircle; i++) {
      const radius = Math.random() * (maxRadius - minRadius) + minRadius;

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      circle.push({ x, y, radius, randomColor });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circle.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circle.randomColor;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Canvas;
