import { Box, Typography, Stack, TextField, Button, useTheme, Divider, Grid, Tooltip } from "@mui/material";
import { Facebook, LinkedIn, Mail } from "@mui/icons-material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
export const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.gradientReverse,
        px: 2,
        py: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid size={12} sx={{ display: "flex", justifyContent: "center"}}> 
          <Typography
            variant="h4"
            color="primary"
            sx={{ mb: 4, textAlign: "center" }}
          >
            Contact Me
          </Typography>
        </Grid> 
        {/* Social Links */}
        <Grid size = {{xs:12, md: 5}} sx={{ display: "flex", justifyContent: "center"}}>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Let's Connect
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mb: 1 }}>
              You can also find me here:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
  
  <Tooltip title="Facebook">
    <Button href="https://www.facebook.com/kevin.tom.16" target="_blank" variant="outlined" color="primary">
      <Facebook />
    </Button>
  </Tooltip>

  <Tooltip title="LinkedIn">
    <Button href="https://linkedin.com/in/kevin-tom-42ba60261" target="_blank" variant="outlined" color="primary">
      <LinkedIn />
    </Button>
  </Tooltip>

  <Tooltip title="Send me an Email">
    <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=kevintom111294@gmail.com" target="_blank" variant="outlined" color="primary">
      <Mail />
    </Button>
  </Tooltip>

  <Tooltip title="FreeCodeCamp">
    <Button href="https://www.freecodecamp.org/Kiban09" target="_blank" variant="outlined" color="primary">
      <LocalFireDepartmentIcon />
    </Button>
  </Tooltip>

  <Tooltip title="CodePen">
    <Button href="https://codepen.io/Kevin-Tom-the-builder" target="_blank" variant="outlined" color="primary">
      <ViewInArOutlinedIcon />
    </Button>
  </Tooltip>

</Stack>
          </Box>
        </Grid>
        
        <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, bgcolor: theme.palette.primary.main }} />
       
        {/* Message Form */}
        <Grid size = {{xs:12, md:5}} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              bgcolor: theme.palette.background.paper,
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              maxWidth: 400,
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h5" color="primary" gutterBottom>
              Send a Message
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>
              Feel free to reach out by sending a message below.
            </Typography>
            <TextField label="Name" fullWidth variant="outlined" />
            <TextField label="Email" fullWidth variant="outlined" />
            <TextField label="Message" fullWidth multiline minRows={4} variant="outlined" />
            <Button variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
