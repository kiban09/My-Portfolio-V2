import { Box, Typography, useTheme } from "@mui/material";

export const LandingPage = () => {
  const theme = useTheme();

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
      <Typography variant="h3" color="theme.palette.text.secondary" gutterBottom>
        Hi, I'm Kevin
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
    </Box>
  );
};
