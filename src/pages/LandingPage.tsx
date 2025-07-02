import { Box, Typography, useTheme, Stack, IconButton, Button, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined';

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
      <Typography variant="h3" color="theme.palette.text.secondary" sx={{fontWeight: 700,}} gutterBottom>
        Hi, I'm Kevin
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        an aspiring{" "}
        <Box
          component="span"
          sx={{
            color: theme.palette.primary.main,
            display: { xs: "block", sm: "block" },
          }}
        >
          &lt;Web Developer /&gt;
        </Box>
      </Typography>

      

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          rel="noopener noreferrer"
          href="/My-Portfolio-V2/CV_Tom.pdf"
          target="_blank"
          sx={{ mt: 4, gap: 1 }}
        >
          View / Download CV
          <DownloadIcon />
        </Button>

        <Tooltip title="Facebook">
                <IconButton href="https://www.facebook.com/kevin.tom.16" target="_blank" color="primary" sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton href="https://linkedin.com/in/kevin-tom-42ba60261" target="_blank" color="primary" sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Github">
                <IconButton href="https://github.com/kiban09" target="_blank" color="primary" sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="FreeCodeCamp">
                <IconButton href="https://www.freecodecamp.org/Kiban09" target="_blank" color="primary" sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                  <LocalFireDepartmentIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="CodePen">
                <IconButton href="https://codepen.io/Kevin-Tom-the-builder" target="_blank" color="primary" sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                  <ViewInArOutlinedIcon />
                </IconButton>
              </Tooltip>
      </Stack>

      
    </Box>
  );
};
