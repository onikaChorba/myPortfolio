import { useRef, useEffect } from "react";

const useCanvas = () => {
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

    const properties = {
      bg: "black",
      colors: ["white", "red", "grey", "maroon"],
      radius: 2,
      maxCircle: 80,
      maxV: 0.5,
      minRadius: 2.5,
      maxRadius: 4.5,
      lineLength: 150,
      circlesLife: 18,
    };
    class Circles {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vX = Math.random() * (properties.maxV * 2) - properties.maxV;
        this.vY = Math.random() * (properties.maxV * 2) - properties.maxV;
        this.circlesLife = Math.random() * properties.circlesLife * 60;
        this.randomColor =
          properties.colors[
            Math.floor(Math.random() * properties.colors.length)
          ];
        this.radius =
          Math.random() * (properties.maxRadius - properties.minRadius) +
          properties.minRadius;
      }
      position() {
        return (
          (this.x + this.vX > canvas.width && this.vX > 0) ||
          (this.x + this.vX < 0 && this.vX < 0)
            ? (this.vX *= -1)
            : this.vX,
          (this.y + this.vY > canvas.height && this.vY > 0) ||
          (this.y + this.vY < 0 && this.vY < 0)
            ? (this.vY *= -1)
            : this.vY,
          (this.x += this.vX),
          (this.y += this.vY)
        );
      }
      reDraw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.randomColor;
        ctx.fill();
      }
      reLiveCircle() {
        if (this.circlesLife < 1) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vX = Math.random() * (properties.maxV * 2) - properties.maxV;
          this.vY = Math.random() * (properties.maxV * 2) - properties.maxV;
          this.circlesLife = Math.random() * properties.circlesLife * 660;
          this.randomColor =
            properties.colors[
              Math.floor(Math.random() * properties.colors.length)
            ];
          this.radius =
            Math.random() * (properties.maxRadius - properties.minRadius) +
            properties.minRadius;
        }
        this.circlesLife--;
      }
    }
    const reDrawBackground = () => {
      ctx.fillStyle = properties.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawLines = () => {
      let x1, y1, x2, y2, length, opacity;
      for (let i in circles) {
        for (let j in circles) {
          x1 = circles[i].x;
          y1 = circles[i].y;
          x2 = circles[j].x;
          y2 = circles[j].y;

          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            ctx.lineWindth = "0.3";
            ctx.strokeStyle = "rgb(77, 0, 0, " + opacity + ")";
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    };

    const reDrawCircles = () => {
      for (let i in circles) {
        circles[i].reLiveCircle();
        circles[i].reDraw();
        circles[i].position();
      }
    };
    const loop = () => {
      reDrawBackground();
      drawLines();
      reDrawCircles();
      requestAnimationFrame(loop);
    };
    const animate = () => {
      for (let i = 0; i < properties.maxCircle; i++) {
        circles.push(new Circles());
      }
      loop();
    };
    animate();
  });
  return canvasRef;
};
export default useCanvas;
