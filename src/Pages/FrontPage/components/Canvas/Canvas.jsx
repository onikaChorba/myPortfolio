import React, { useRef, useEffect } from "react";
import "./Canvas.scss";
const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // width and height - parent div
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // fact size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // get access canvas-flame
    const ctx = canvas.getContext("2d");

    // constants for circle
    const circle = [];
    const maxCircle = 30;
    const colors = ["white", "red", "grey", "maroon"];
    const minRadius = 2.5;
    const maxRadius = 5.5;
    const plusCircle = 0.25;
    // get random circle

    const getCircle = () => {
      for (let i = 0; i < maxCircle; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        // const speedX = Math.random() * 2 - 1;
        // const speedY = Math.random() * 2 - 1;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        circle.push({ x, y, radius, randomColor });
      }
    };

    // function draw circle
    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circle.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(
          // (circle.x += circle.speedX),
          // (circle.y += circle.speedY),
          circle.x,
          circle.y,
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fillStyle = circle.randomColor;
        ctx.fill();
      });
      requestAnimationFrame(drawCircle);
    };
    // plus and minuc circle
    const upDateCircle = () => {
      for (let i = 0; i < 2; i++) {
        if ((circle.length = maxCircle)) {
          const randomIndex = Math.floor(Math.random() * plusCircle);
          circle.splice(randomIndex, 1);
        }
      }

      for (let i = 0; i < 2; i++) {
        if (circle.length > maxCircle) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          circle.push({ x, y });
        }
      }
      requestAnimationFrame(getCircle);
    };

    const drawLine = () => {};
    const animate = () => {
      getCircle();
      drawCircle();
      setInterval(upDateCircle, 3000);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Canvas;
