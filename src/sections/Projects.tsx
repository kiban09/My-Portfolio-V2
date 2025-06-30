import { Box, Typography, Button, Stack, useTheme, Dialog, DialogTitle, DialogContent, Divider } from "@mui/material";
import { useState } from "react";

interface ProjectSectionProps {
  projects?: { label: string; link?: string; description?: string }[];
}

export const Projects = ({
  projects = [
    { label: "Blog App", link: "https://kiban09.github.io/My-Blog-App/", description: "Simple CRUD Blog with modern design" },
    { label: "Landing Page", link: "https://kiban09.github.io/TimeManagementApp/", description: "A Time Management App landing page" },
    { label: "CodePen Projects", description: "Small interactive CodePen projects" },
  ],
}: ProjectSectionProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleButtonClick = (proj: { label: string; link?: string }) => {
    if (proj.label === "CodePen Projects") {
      setOpen(true);
    } else if (proj.link) {
      window.open(proj.link, "_blank");
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 12,
        px: 2,
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Projects
      </Typography>

      <Typography sx={{ color: theme.palette.text.secondary, mb: 4 }}>
        Explore my featured projects
      </Typography>

      <Divider sx={{ width: "100%", maxWidth: 800, mb: 4, bgcolor: theme.palette.primary.main }} />

      <Stack direction={{ xs: "column", sm: "column" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {projects.map((proj) => (
          <Box
            sx={{
              bgcolor: "#1a1a1a",
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: 2,
              p: 3,
              textAlign: "center",
              width: 250,
              "&:hover": { boxShadow: 4, bgcolor: "#222" },
            }}
          >
            <Typography color="primary" variant="h6">{proj.label}</Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mt: 1 }}>{proj.description}</Typography>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick(proj)}
              sx={{ mt: 2 }}
            >
              View
            </Button>
          </Box>
        ))}
      </Stack>
      <Divider sx={{ width: "100%", maxWidth: 800, mt: 4, bgcolor: theme.palette.primary.main }} />


      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.paper,
            borderRadius: 3,
            boxShadow: 8,
            p: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            color: theme.palette.primary.main,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          CodePen Projects
        </DialogTitle>

        <Divider sx={{ my: 1, bgcolor: theme.palette.primary.main }} />

        <DialogContent>
          <Typography sx={{ mb: 3, color: theme.palette.text.primary, textAlign: "center" }}>
            A collection of simple CodePen works:
          </Typography>

          <Stack spacing={2} alignItems="center">
            <Button
              variant="outlined"
              href="https://codepen.io/Kevin-Tom-the-builder/pen/WNmjZrb"
              target="_blank"
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                border: `1px solid ${theme.palette.primary.main}`,
                "&:hover": { bgcolor: "#333" },
                width: "80%",
              }}
            >
              Simple Calculator
            </Button>
            <Button 
              variant="outlined" 
              href="https://codepen.io/Kevin-Tom-the-builder/pen/dyrWExr" 
              target="_blank" 
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                border: `1px solid ${theme.palette.primary.main}`,
                "&:hover": { bgcolor: "#333" },
                width: "80%",
              }}
            >
              25 + 5 Clock
            </Button>
            <Button variant="outlined" 
              href="https://codepen.io/Kevin-Tom-the-builder/pen/ExMWMGx" 
              target="_blank" 
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                border: `1px solid ${theme.palette.primary.main}`,
                "&:hover": { bgcolor: "#333" },
                width: "80%",
              }}
            >
              Drum Machine
            </Button>
            <Button variant="outlined" 
              href="https://codepen.io/Kevin-Tom-the-builder/pen/bGZqWyW" 
              target="_blank" 
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                border: `1px solid ${theme.palette.primary.main}`,
                "&:hover": { bgcolor: "#333" },
                width: "80%",
              }}
            >
              Simple Markdown
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>

    </Box>
  );
};
