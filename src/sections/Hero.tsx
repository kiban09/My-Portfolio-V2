import { Box, Typography, Stack, Chip, Divider, useTheme } from "@mui/material";
import profile from "../assests/123123.png";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CodeIcon from "@mui/icons-material/Code";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.gradientReverse,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Image with styled border */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 180, sm: 220, md: 280 },
            height: { xs: 180, sm: 220, md: 280 },
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: `0 0 20px ${theme.palette.primary.main}`,
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Box
            component="img"
            src={profile}
            alt="Kevin"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>

        {/* Text Content */}
        <Box sx={{ maxWidth: 600, mx: { xs: "auto", md: 0 } }}>
          <Typography variant="h4" color="primary" gutterBottom>
            About Me
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Hi, I'm Kevin. A passionate developer with a growing passion for modern web technologies. 
            I enjoy crafting responsive, user-friendly interfaces and continuously expanding my skills in building sleek, efficient web experiences.
          </Typography>

          <Typography fontWeight={600} sx={{ mb: 1 }}>
            Skills:
          </Typography>
          
          <Stack
            direction="row"
            spacing={1}
            rowGap={1.5}
            flexWrap="wrap"
            mb={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {["HTML", "CSS", "JavaScript", "ReactJS", "Java", "Material UI"].map((skill) => (
              <Chip key={skill} label={skill} color="primary" />
            ))}
          </Stack>

          <Typography fontWeight={600} sx={{ mb: 0.5 }}>
            Contact:
          </Typography>
          <Typography>📞 0945-275-6958</Typography>
          <Typography>✉️ kevintom111294@gmail.com</Typography>
          <Typography>📍 Baguio City, Philippines</Typography>
        </Box>
      </Stack>

      {/* Interests Section */}
      <Box sx={{ mt: 6, maxWidth: 1400, mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 3, flexWrap: "wrap" }}>
          <Typography variant="h5" color="primary" sx={{ mb: 0, whiteSpace: "nowrap" }}>
            Interests
          </Typography>

          <Divider
            sx={{
              flexGrow: 1,
              minWidth: 50,
              borderBottomWidth: 2,
              bgcolor: theme.palette.primary.main,
              alignSelf: "center",
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={2}
          rowGap={2}
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {[
            { label: "Gaming", icon: <SportsEsportsIcon sx={{ color: theme.palette.primary.main }} /> },
            { label: "Web Development", icon: <CodeIcon sx={{ color: theme.palette.primary.main }} /> },
            { label: "Learning new tech", icon: <AutoStoriesIcon sx={{ color: theme.palette.primary.main }} /> },
            { label: "UI/UX Design", icon: <DesignServicesIcon sx={{ color: theme.palette.primary.main }} /> },
            { label: "Game Development", icon: <SportsEsportsOutlinedIcon sx={{ color: theme.palette.primary.main }} /> },
          ].map((interest) => (
            <Box
              key={interest.label}
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: 2,
                p: 1.5,
                minWidth: 160,
                textAlign: "center",
                color: theme.palette.text.primary,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1.5,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                },
              }}
            >
              <Typography>{interest.label}</Typography>
              {interest.icon}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
