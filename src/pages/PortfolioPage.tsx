import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Games } from "../sections/Games";
import { Contact } from "../sections/Contact";
import theme from "../theme/theme";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location.state]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box id="about" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Hero />
      </Box>

      <Box id="projects" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Projects />
      </Box>

      <Box id="games" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Games />
      </Box>

      <Box id="contact" sx={{ minHeight: "70vh", bgcolor: "background.paper", color: "text.primary" }}>
        <Contact />
      </Box>
    </ThemeProvider>
  );
}
