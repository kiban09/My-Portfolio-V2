import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, useLocation  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import theme from "./theme/theme";
import { Navbar } from "./components/Navbar";
import { FloatingChatbot } from "./components/FloatingChatbot";
import { NotFound } from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatbot />
    </ThemeProvider>
  );
}
