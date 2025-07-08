import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Robot404 from "../assests/robot.png";

export const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          component="img"
          src={Robot404}
          alt="404 Robot"
          sx={{
            width: { xs: "80%", sm: 350, md: 400, lg: 450 },
            maxWidth: "90vw",
            objectFit: "contain",
          }}
        />

        <Box>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            Oops! Page not found.
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 400,
              mb: 4,
            }}
          >
            The page you’re looking for has vanished into cyberspace. Let’s bring you back home.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "white",
              px: 4,
              py: 1,
              borderRadius: 2,
              fontWeight: "bold",
              "&:hover": {
                bgcolor: theme.palette.error.main,
              },
            }}
          >
            Return Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
