import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = async (sectionId?: string) => {
    const result = navigate("/portfolio");
    if (result instanceof Promise) {
      await result;
    }
    if (sectionId) {
      setTimeout(() => {
        const target = document.getElementById(sectionId.toLowerCase());
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.gradient,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        Hi, I'm Kevin
      </Typography>

      <Typography sx={{ color: theme.palette.text.secondary, mb: 6, maxWidth: 600 }}>
        Creating responsive websites, projects, and games with modern technologies.
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
        <Button onClick={() => handleNavigate()} variant="outlined" color="primary">
          Home
        </Button>
        <Button onClick={() => handleNavigate("hero")} variant="outlined" color="primary">
          About me
        </Button>
        <Button onClick={() => handleNavigate("projects")} variant="outlined" color="primary">
          Projects
        </Button>
        <Button onClick={() => handleNavigate("games")} variant="outlined" color="primary">
          Games
        </Button>
        <Button onClick={() => handleNavigate("contact")} variant="outlined" color="primary">
          Contact
        </Button>
      </Stack>
    </Box>
  );
};
