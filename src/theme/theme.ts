import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    gradient?: string;
  }
}

const theme = createTheme({

   typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
      gradient: `
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(20,0,0,0.7) 60%, #0a0a0a 90%),
      linear-gradient(to right, #0a0a0a 0%, #1a0a0a 100%, #0a0a0a 100%)
    `,
    },
    primary: {
      main: "#E53935",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default theme;