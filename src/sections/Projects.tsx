import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import codepenimag from "../assests/codepenImg.png";
import landingPageImg from "../assests/LandingPageImg.png";
import blogAppImg from "../assests/BlogAppImg.png";

interface ProjectSectionProps {
  projects?: { label: string; link?: string; description?: string; image?: string }[];
}

export const Projects = ({
  projects = [
    {
      label: "Blog App",
      link: "https://kiban09.github.io/My-Blog-App/",
      description: "Simple CRUD Blog with modern design",
      image: blogAppImg,
    },
    {
      label: "Landing Page",
      link: "https://kiban09.github.io/TimeManagementApp/",
      description: "A Time Management App landing page",
      image: landingPageImg,
    },
    {
      label: "CodePen Projects",
      description: "Small interactive CodePen projects",
      image: codepenimag,
    },
  ],
}: ProjectSectionProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

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
      ref={sectionRef}
      sx={{
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 12,
        px: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Projects
      </Typography>

      <Typography sx={{ color: theme.palette.text.secondary, mb: 4 }}>
        Explore my featured projects
      </Typography>

      <Divider sx={{ width: "100%", maxWidth: 1000, mb: 4, bgcolor: theme.palette.primary.main }} />

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ width: "100%" }}
      >
        {projects.map((proj) => (
          <Card
            key={proj.label}
            sx={{
              width: isMobile ? "90%" : isTablet ? "30%" : "30%",
              minWidth: 160,
              maxWidth: 300,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "#1a1a1a",
              color: "white",
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 10px ${theme.palette.primary.main}`,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "scale(1.05)",
                "& .hover-image": {
                  transform: "scale(1.5)",
                  filter: "brightness(0.7)",
                },
              },
            }}
          >
            {proj.image && (
              <CardMedia
                component="img"
                image={proj.image}
                alt={`${proj.label} image`}
                className="hover-image"
                sx={{
                  height: isMobile ? 140 : 300,
                  width: "100%",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  objectFit: "cover",
                }}
              />
            )}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                bgcolor: theme.palette.background.paper,
                p: 2,
                borderRadius: 1,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" color="primary">
                  {proj.label}
                </Typography>
                <Typography sx={{ mt: 1, color: theme.palette.text.secondary }}>
                  {proj.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => handleButtonClick(proj)}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                    border: `1px solid ${theme.palette.background.paper}`,
                    "&:hover": { bgcolor: "#333" },
                  }}
                >
                  View
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Stack>

      <Divider sx={{ width: "100%", maxWidth: 1000, mt: 4, bgcolor: theme.palette.primary.main }} />

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
            <Button
              variant="outlined"
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
            <Button
              variant="outlined"
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
