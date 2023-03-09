import { useRef, useEffect } from "react";

const useCanvas = (animate) => {
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
    const circles = [];
    const maxCircle = 50;
    const colors = ["white", "red", "grey", "maroon"];
    const minRadius = 2.5;
    const maxRadius = 5.5;

    // get random circle
    const getCircle = () => {
      for (let i = 0; i < maxCircle; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        circles.push({ x, y, radius, randomColor });
      }
    };
    // function draw circle
    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle, key) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        const next1 = circles[key + 1] || circles[0];
        ctx.moveTo(circle.x, circle.y);
        ctx.lineTo(next1.x, next1.y);
        ctx.stroke();
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 1;
        ctx.fillStyle = circle.randomColor;
        ctx.fill();
      });
      requestAnimationFrame(drawCircle);
    };

    // plus and minuc circle
    const upDateCircle = () => {
      for (let i = 0; i < 5; i++) {
        if (circles.length > 0) {
          const randomIndex = Math.floor(Math.random() * circles.length);
          circles.splice(randomIndex, 1);
        }
      }
      for (let i = 0; i < 5; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        circles.push({ x, y, radius, randomColor });
      }
      requestAnimationFrame(drawCircle);
    };
    const animate = () => {
      getCircle();
      drawCircle();
      setInterval(upDateCircle, 1000);
    };
    animate();
  }, [animate]);

  return canvasRef;
};
export default useCanvas;
