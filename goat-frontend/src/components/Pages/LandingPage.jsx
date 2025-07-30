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
import { GitHub, LinkedIn } from "@mui/icons-material";

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
      const fontSize = isMobile ? 48 : 170;
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
        overflowY: "auto", // Changed from "hidden" to "auto" to allow scrolling
        overflowX: "hidden",
        position: "relative",
        "&::-webkit-scrollbar": {
          display: "none",
        },
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
              bgcolor: "#00ccffff",
              color: "white",
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
      {/* GOAT FORCE PIXELS */}
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
      {/* Features Section */}
      <Box
        sx={{
          position: "absolute",
          top: "100vh",
          width: "100%",
          bgcolor: "black",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
              background:
                "linear-gradient(45deg, rgb(255, 255, 255), rgb(84, 189, 219))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI-Powered Sales Intelligence
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "grey.400",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Transform your sales process with cutting-edge AI that understands
            your prospects better than ever before
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {[
              {
                title: "Smart Lead Scoring",
                description:
                  "AI automatically scores and prioritizes leads based on conversion probability and deal value",
                icon: "🎯",
              },
              {
                title: "Sandbox Conversation Intelligence",
                description:
                  "Practice real sales conversations with AI-driven feedback and coaching",
                icon: "🧠",
              },
              {
                title: "Predictive Analytics",
                description:
                  "Forecast deal outcomes and identify risks before they impact your pipeline",
                icon: "📊",
              },
              {
                title: "Gmail Intelligence",
                description:
                  "AI-powered gmail insights that help you craft the perfect message for each prospect",
                icon: "✉️",
              },
              {
                title: "Automated Insights",
                description:
                  "Get instant recommendations on the best times to reach out and optimal messaging",
                icon: "⚡",
              },
              {
                title: "MCP Integration",
                description:
                  "Seamlessly integrate your Slack and Gmail for a unified sales experience",
                icon: "🔗",
              },
            ].map((feature, index) => (
              <Paper
                key={index}
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(84, 189, 219, 0.2)",
                    border: "1px solid rgba(84, 189, 219, 0.3)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "3rem", mb: 2 }}>
                  {feature.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "white",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.400",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
      {/* How It Works Section */}
      <Box
        sx={{
          position: "absolute",
          top: "200vh",
          width: "100%",
          bgcolor: "black",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              color: "white",
            }}
          >
            How It Works
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "grey.400",
              mb: 8,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Get started in minutes with our simple 3-step process
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 6,
            }}
          >
            {[
              {
                step: "1",
                title: "Connect Your Data",
                description:
                  "Integrate with your Slack and Gmail tools in one click and create your first deal",
              },
              {
                step: "2",
                title: "AI Pipeline Analysis",
                description:
                  "Our AI analyzes your sales conversations and customer interactions to identify key insights",
              },
              {
                step: "3",
                title: "Get Insights",
                description:
                  "Receive actionable recommendations and close more deals faster with GoatForce",
              },
            ].map((step, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "#00ccffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    {step.step}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2, color: "white" }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ color: "grey.400", lineHeight: 1.6 }}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Watch It Live Section */}
      <Box
        sx={{
          position: "absolute",
          top: "265vh",
          width: "100%",
          bgcolor: "rgba(255, 255, 255, 0.02)",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              background:
                "linear-gradient(45deg, rgb(255, 255, 255), rgb(84, 189, 219))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Watch It Live
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "grey.400",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            See GoatForce in action and discover how our AI transforms sales
            conversations into actionable insights
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Paper
              sx={{
                p: 3,
                bgcolor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
                maxWidth: "900px",
                width: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 20px 40px rgba(84, 189, 219, 0.3)",
                  border: "1px solid rgba(84, 189, 219, 0.5)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                  overflow: "hidden",
                  borderRadius: 2,
                  bgcolor: "black",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="GoatForce Demo Video"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      {/* Meet The Team Section */}
      <Box
        sx={{
          position: "absolute",
          top: "370vh",
          width: "100%",
          bgcolor: "black",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 8,
              background:
                "linear-gradient(45deg, rgb(255, 255, 255), rgb(84, 189, 219))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Meet The Team
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            {[
              {
                name: "Dariel Gutierrez",
                role: "FTL Intern",
                bio: "CS @ SDSU",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQFq17E8o7NgpA/profile-displayphoto-scale_400_400/B56ZeD3mXeHQAg-/0/1750264086049?e=1756944000&v=beta&t=nJ3GGvoFGYvyJnS_NwNqQD_WiJqiaIHGFDL3HHPI86o",
                linkedin: "https://linkedin.com/in/dariel-gutierrez",
                github: "https://github.com/darielgu",
              },
              {
                name: "Oliver Majano",
                role: "FTL Intern",
                bio: "CS @ SJSU",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQHJP5rCkoPPxg/profile-displayphoto-shrink_800_800/B56ZeJFMnPHUAc-/0/1750351530814?e=1756944000&v=beta&t=K75UEVnJL0mcjTIrmrs-3q7hqH0oaCyvMAVu9ZOQo1I",
                linkedin: "https://www.linkedin.com/in/olivermajano/",
                github: "https://github.com/iOliver678",
              },
              {
                name: "Costas Papanicolaou",
                role: "FTL Intern",
                bio: "CS @ UF",
                image:
                  "https://media.licdn.com/dms/image/v2/D4D03AQFlS6FDeviJlQ/profile-displayphoto-shrink_800_800/B4DZeFDgoZGkAc-/0/1750283981100?e=1756944000&v=beta&t=oKGIP0Yl4KFivLHRP28EtIK019GW9mG59wh-n9r7y7U",
                linkedin: "https://www.linkedin.com/in/costaspa/",
                github: "https://github.com/costasp11",
              },
            ].map((member, index) => (
              <Paper
                key={index}
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(84, 189, 219, 0.2)",
                    border: "1px solid rgba(84, 189, 219, 0.3)",
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 3,
                    border: "3px solid #00ccffff",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 1, color: "white" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    color: "#00ccffff",
                    fontWeight: "600",
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.400",
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: "0.95rem",
                  }}
                >
                  {member.bio}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#0077B5",
                      color: "#0077B5",
                      "&:hover": {
                        borderColor: "#0077B5",
                        bgcolor: "rgba(0, 119, 181, 0.1)",
                      },
                    }}
                    onClick={() => window.open(member.linkedin, "_blank")}
                  >
                    <LinkedIn />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                    onClick={() => window.open(member.github, "_blank")}
                  >
                    <GitHub />
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          top: "470vh",
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.9)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4, md: 8 },
          zIndex: 1,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 6,
              mb: 6,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "white" }}
              >
                GoatForce
              </Typography>
              <Typography sx={{ color: "grey.400", lineHeight: 1.6, mb: 3 }}>
                AI-powered sales intelligence that helps teams close more deals
                faster.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#00ccffff",
                    color: "#00ccffff",
                    "&:hover": {
                      borderColor: "#00ccffff",
                      bgcolor: "rgba(0, 204, 255, 0.1)",
                    },
                  }}
                  onClick={() => navigate("/dashboard")}
                >
                  Try GoatForce
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/dQw4w9WgXcQ",
                      "_blank"
                    )
                  }
                >
                  Watch Demo
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "white" }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1, sm: 3 },
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    color: "grey.400",
                    cursor: "pointer",
                    "&:hover": { color: "#00d9ffff" },
                  }}
                  onClick={() => {
                    document
                      .querySelector('[aria-label="particle effect"]')
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </Typography>
                <Typography
                  sx={{
                    color: "grey.400",
                    cursor: "pointer",
                    "&:hover": { color: "#00d9ffff" },
                  }}
                  onClick={() => {
                    const featuresSection = document.querySelector("h2");
                    featuresSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Features
                </Typography>
                <Typography
                  sx={{
                    color: "grey.400",
                    cursor: "pointer",
                    "&:hover": { color: "#00d9ffff" },
                  }}
                  onClick={() => {
                    const teamSection = document.querySelector(
                      'h2[children*="Meet The Team"]'
                    )?.parentElement;
                    teamSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Team
                </Typography>
                <Typography
                  sx={{
                    color: "grey.400",
                    cursor: "pointer",
                    "&:hover": { color: "#00d9ffff" },
                  }}
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 4,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "grey.400", fontSize: "0.9rem" }}>
              © 2025 GoatForce. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
