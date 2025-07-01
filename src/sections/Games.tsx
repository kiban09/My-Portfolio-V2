import { Box, Typography, Button, useTheme, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import TabbedDodgeImg from "../assests/tabbedDodge.png";
import KinamReactionImg from "../assests/kinamReaction.png";
import Magic8BallImg from "../assests/magic8ball.png";
import HomeExerciseImg from "../assests/homeExercise.png";

interface Game {
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface GameSectionProps {
  games?: Game[];
}

export const Games = ({
  games = [
    {
      title: "Tabbed Dodge",
      description: "A simple dodging game with a few features. (APK)",
      link: "https://kevintom0909.itch.io/tabbed-dodge",
      image: TabbedDodgeImg,
    },
    {
      title: "Kinam Reaction",
      description: "A simple reaction game. (APK)",
      link: "https://kevintom0909.itch.io/kinam-reaction",
      image: KinamReactionImg,
    },
    {
      title: "Magic 8 Ball",
      description: "Shake for answers — your digital Magic 8 Ball is ready. (APK)",
      link: "https://kevintom0909.itch.io/magic-8-ball",
      image: Magic8BallImg,
    },
    {
      title: "Home Exercise",
      description: "Exercise and timer app for quick home workouts. (APK)",
      link: "https://kevintom0909.itch.io/home-exercise",
      image: HomeExerciseImg,
    },
  ],
}: GameSectionProps) => {
  const theme = useTheme();

  return (
    <Box
      id="games"
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 2,
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Games
      </Typography>

      <Typography
        sx={{
          color: theme.palette.text.secondary,
          mb: 4,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        A collection of Android games I've developed, available for download on Itch.io.
      </Typography>

      <Divider sx={{ width: "100%", maxWidth: 800, mb: 4, bgcolor: theme.palette.primary.main }} />

      <Grid container spacing={4} sx={{ maxWidth: 1000, width: "100%" }}>
        {games.map((game) => (
          <Grid size={{xs:12, sm:6 }} key={game.title}>
            <Box
              sx={{
                p: 3,
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: 2,
                bgcolor: "#1a1a1a",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {game.image && (
                <Box
                  component="img"
                  src={game.image}
                  alt={game.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
              )}

              <Typography variant="h6" color="primary" gutterBottom>
                {game.title}
              </Typography>

              <Typography sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                {game.description}
              </Typography>

              <Button
                variant="contained"
                href={game.link}
                target="_blank"
                sx={{
                  bgcolor: `${theme.palette.primary.main}`,
                  color: "white",
                  border: `1px solid ${theme.palette.background.paper}`,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark || "#b71c1c", 
                    borderColor: theme.palette.primary.light, 
                  },
                }}
              >
                View on Itch.io
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ width: "100%", maxWidth: 800, mt: 6, bgcolor: theme.palette.primary.main }} />
    </Box>
  );
};
