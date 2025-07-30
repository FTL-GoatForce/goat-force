import {
  AppBar,
  Box,
  Paper,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ReusableComponents/Header";
import logo from "../../assets/sfgoat.webp";

const LandingPage = () => {
  const canvasRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isTouchingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setIsMobile(window.innerWidth < 768); // Set mobile breakpoint
    };

    updateCanvasSize();

    let particles = [];

    let textImageData = null;

    function createTextImage() {
      if (!ctx || !canvas) return 0;

      ctx.fillStyle = "white";
      ctx.save();

      // Set font size based on screen size
      const fontSize = isMobile ? 48 : 200;
      ctx.font = `bold ${fontSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw "GoatForce" text
      const text = "GoatForce";
      const x = canvas.width / 2;
      const y = canvas.height / 2;

      ctx.fillText(text, x, y);

      ctx.restore();

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      return fontSize / 96; // Return scale factor
    }

    function createParticle(scale) {
      if (!ctx || !canvas || !textImageData) return null;

      const data = textImageData.data;
      const particleGap = 2;

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5,
            color: "white",
            scatteredColor: "#1ea9d4", // Salesforce color for scattered particles
            life: Math.random() * 100 + 50,
          };
        }
      }

      return null;
    }

    function createInitialParticles(scale) {
      const baseParticleCount = 8000; // Increased for better text definition
      const particleCount = Math.floor(
        baseParticleCount *
          Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      );
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale);
        if (particle) particles.push(particle);
      }
    }

    let animationFrameId;

    function animate(scale) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mousePositionRef.current;
      const maxDistance = 240;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (
          distance < maxDistance &&
          (isTouchingRef.current || !("ontouchstart" in window))
        ) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force * 60;
          const moveY = Math.sin(angle) * force * 60;
          p.x = p.baseX - moveX;
          p.y = p.baseY - moveY;

          ctx.fillStyle = p.scatteredColor;
        } else {
          p.x += (p.baseX - p.x) * 0.1;
          p.y += (p.baseY - p.y) * 0.1;
          ctx.fillStyle = "white";
        }

        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.life--;
        if (p.life <= 0) {
          const newParticle = createParticle(scale);
          if (newParticle) {
            particles[i] = newParticle;
          } else {
            particles.splice(i, 1);
            i--;
          }
        }
      }

      const baseParticleCount = 15000;
      const targetParticleCount = Math.floor(
        baseParticleCount *
          Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      );
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale);
        if (newParticle) particles.push(newParticle);
      }

      animationFrameId = requestAnimationFrame(() => animate(scale));
    }

    const scale = createTextImage();
    createInitialParticles(scale);
    animate(scale);

    const handleResize = () => {
      updateCanvasSize();
      const newScale = createTextImage();
      particles = [];
      createInitialParticles(newScale);
    };

    const handleMove = (x, y) => {
      mousePositionRef.current = { x, y };
    };

    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect(); // Get the position and size of the canvas in the browser

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      handleMove(x, y); // useRef positioning correctly set
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchStart = () => {
      isTouchingRef.current = true;
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
      mousePositionRef.current = { x: 0, y: 0 };
    };

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 };
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);
  const navigate = useNavigate();
  const menuItems = ["Home", "About", "Contact"];
  return (
    // Page Container
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        width: "100%",
        backgroundColor: "black",
        flexDirection: "column",
        color: "white",
        alignItems: "center",
        scrollbarWidth: "none",
        overflowY: "hidden",
      }}
    >
      {/* Start of NavBar */}
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "black", backdropFilter: "blur(10px)" }}>
          <Typography
            className="hover-underline-animation"
            variant="h5"
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
            component="div"
          >
            GoatForce
          </Typography>
          <Avatar
            src={logo}
            sx={{ ml: 2, display: { xs: "none", sm: "flex" } }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00FF88",
              color: "black",
              "&:hover": { bgcolor: "#00CC70" },
              ml: "auto",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              px: { xs: 2, sm: 3 },
            }}
            onClick={() => navigate("/auth")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      {/* End of NAVBAR */}
      {/* Start of Hero Section */}
      <Box
        sx={{
          mt: { xs: 8, sm: 10, md: 15 },
          width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
          position: "absolute",
          zIndex: 5,
          alignSelf: "center",
          textAlign: "center",
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "6rem" },
            background:
              "linear-gradient(45deg,rgb(255, 255, 255),rgb(208, 210, 223))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: { xs: 1, md: 2 },
            lineHeight: { xs: 1.1, md: 1.2 },
          }}
        >
          Supercharge
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "6rem" },
            background:
              "linear-gradient(45deg,rgb(84, 189, 219),rgb(208, 210, 223))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: { xs: 2, md: 2 },
            lineHeight: { xs: 1.1, md: 1.2 },
          }}
        >
          Your Sales
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            mb: 1,
            lineHeight: 1.5,
          }}
        >
          Get instant, AI-powered insights into every B2B sales opportunity with
          GoatForce.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            mb: { xs: 2, md: 3 },
            lineHeight: 1.5,
          }}
        >
          Find exactly what you need, when you need it, to close more deals and
          crush your quotas.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              m: { xs: 0, sm: 3 },
              color: "white",
              minWidth: { xs: "200px", sm: "auto" },
            }}
            variant="contained"
            onClick={() => navigate("/dashboard")}
            size="medium"
          >
            Try It now
          </Button>
          <Button
            sx={{
              m: { xs: 0, sm: 3 },
              color: "white",
              minWidth: { xs: "200px", sm: "auto" },
            }}
            variant="outlined"
            size="medium"
            onClick={() => navigate("/onboarding")}
          >
            See a Demo
          </Button>
        </Box>
      </Box>
      {/* END OF HERO SECTION */}

      {/* Goat Force Particle effect */}
      <Box
        sx={{
          position: "absolute",
          height: "calc(100vh - 200px)",
          overflowY: "hidden",
          width: "100%",
          top: { xs: "200px", sm: "250px", md: "300px" },
        }}
      >
        <canvas
          ref={canvasRef}
          aria-label="particle effect"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            touchAction: "none",
          }}
        />
      </Box>
      {/* GoatForce Particle Effect End */}
    </Box>
  );
};

export default LandingPage;
