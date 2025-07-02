import { Box, Typography, Stack, TextField, Button, useTheme, Divider, Grid, Tooltip } from "@mui/material";
import { Facebook, LinkedIn, Mail,  } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const theme = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wx0km4b",
        "template_77x3vwf",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "fLn1OkCpOV4hPrCDf"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again.");
      });
  };

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

              <Tooltip title="Github">
                <Button href="https://github.com/kiban09" target="_blank" variant="outlined" color="primary">
                  <GitHubIcon />
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
              alignItems: "center",
              gap: 2,
              width: "100%",
              maxWidth: 400,
              boxShadow: `0 0 10px ${theme.palette.primary.main}40`, 
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="h5" color="primary" gutterBottom sx={{ textAlign: "center" }}>
              Send a Message
            </Typography>

            <Typography sx={{ color: theme.palette.text.secondary, mb: 2, textAlign: "center" }}>
              Feel free to reach out by sending a message below.
            </Typography>

             <TextField
                label="Name"
                fullWidth
                variant="outlined"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                mt: 2,
                width: "100%",
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
