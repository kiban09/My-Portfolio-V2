import { Box, Typography, useTheme, Stack, IconButton, Button, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import profile from "../assests/hero.png";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const theme = useTheme();
  const [showCircle, setShowCircle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCircle(true), 800);
    const timer2 = setTimeout(() => setShowButtons(true), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", width: "100%", textAlign: { xs: "center", md: "left" } }}
      >
        {/* Text and Buttons */}
        <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "500px" } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.secondary,
              mb: 1,
              wordBreak: "break-word",
            }}
          >
            Hi, I'm Kevin
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            an aspiring&nbsp;
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                whiteSpace: "nowrap",
              }}
            >
              &lt;Web Developer /&gt;
            </Box>
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            rel="noopener noreferrer"
            href="/My-Portfolio-V2/Tom_Resume.pdf"
            target="_blank"
            sx={{
              mt: 2,
              gap: 1,
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            View / Download Resume
            <DownloadIcon />
          </Button>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 4, flexWrap: "wrap" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {[
              { title: "Facebook", icon: <FacebookIcon />, link: "https://www.facebook.com/kevin.tom.16" },
              { title: "LinkedIn", icon: <LinkedInIcon />, link: "https://linkedin.com/in/kevin-tom-42ba60261" },
              { title: "Github", icon: <GitHubIcon />, link: "https://github.com/kiban09" },
              { title: "FreeCodeCamp", icon: <LocalFireDepartmentIcon />, link: "https://www.freecodecamp.org/Kiban09" },
              { title: "CodePen", icon: <ViewInArOutlinedIcon />, link: "https://codepen.io/Kevin-Tom-the-builder" },
            ].map((item, index) => (
              <Tooltip title={item.title} key={item.title}>
                <IconButton
                  href={item.link}
                  target="_blank"
                  color="primary"
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    opacity: showButtons ? 1 : 0,
                    transform: showButtons ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 1s ease, transform 1s ease",
                    transitionDelay: `${0.4 + index * 0.2}s`,
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Box>

        {/* Circular Image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 200, sm: 250, md: 320, lg: 400 },
            height: { xs: 200, sm: 250, md: 320, lg: 400 },
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            mx: { xs: "auto", md: 0 },
            mb: { xs: 4, md: 0 },
            opacity: showCircle ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        >
          <Box
            component="img"
            src={profile}
            alt="Kevin"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              transform: "scale(0.96)",
            }}
          />

          {/* Static Dark Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "60%",
              background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
              pointerEvents: "none",
              borderRadius: "50%",
              zIndex: 2,
            }}
          />

          {/* Rotating Dashed Circle */}
          <Box
            component="svg"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 3,
              pointerEvents: "none",
              animation: showCircle ? "rotate 30s linear infinite" : "none",
              transformOrigin: "center",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              strokeLinecap="round"
              stroke={theme.palette.primary.main}
              strokeWidth="2"
            >
              <animate
                attributeName="stroke-dasharray"
                values="
                  14 25 2 10;
                  25 15 6 5;
                  30 8 10 3;
                  25 5 6 15;
                  14 25 2 10"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
          </Box>

          <style>
            {`
              @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </Box>
      </Stack>
    </Box>
  );
};
