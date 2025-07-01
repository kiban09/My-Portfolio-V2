import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import theme from "./theme/theme";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    </ThemeProvider>
  );
}
