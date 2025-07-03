import { ThemeProvider, CssBaseline, Box, Fade } from "@mui/material";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Games } from "../sections/Games";
import { Contact } from "../sections/Contact";
import theme from "../theme/theme";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true);
    }, 300); // Fade-in delay

    if (location.state?.scrollTo) {
      const scrollDelay = setTimeout(() => {
        const target = document.getElementById(location.state.scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 800); // Allow fade to finish before scroll
      return () => clearTimeout(scrollDelay);
    }

    return () => clearTimeout(delay);
  }, [location.state]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Fade in={showContent} timeout={800}>
        <Box>
          <Box
            id="about"
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Hero />
          </Box>

          <Box
            id="projects"
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Projects />
          </Box>

          <Box
            id="games"
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Games />
          </Box>

          <Box
            id="contact"
            sx={{
              minHeight: "70vh",
              bgcolor: "background.paper",
              color: "text.primary",
            }}
          >
            <Contact />
          </Box>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}
