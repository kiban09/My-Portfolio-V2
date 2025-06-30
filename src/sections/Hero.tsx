import { Box, Typography, Avatar, useTheme } from "@mui/material";
import profile from "../assests/hero.png"

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.gradient,
        px: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", md: "center" },
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.primary,
              mb: 1,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Hi, I’m Kevin
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            an aspiring{"  "}
            <Box component="span" sx={{ color: theme.palette.primary.main, display: { xs: "block", sm: "block" }}}>
              &lt;Web Developer /&gt;
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              maxWidth: 1000,
              mx: { xs: "auto", md: 0 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Creating responsive websites, projects, and games with modern technologies.
          </Typography>
        </Box>

        <Avatar
          alt="Profile"
          src= {profile}
          sx={{
            width: { xs: 150, sm: 200, md: 250 },
            height: { xs: 150, sm: 200, md: 250 },
            background: theme.palette.background.default,
          }}
        />
      </Box>
    </Box>
  );
};
