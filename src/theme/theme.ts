import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
    primary: {
      main: "#ff0000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default theme;