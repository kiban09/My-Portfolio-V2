import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Games } from "./sections/Games";
import { Contact } from "./sections/Contact";
import theme from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Box id="home" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
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
