import { Box } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../assests/computerAnimation.json";

export const PageLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000, 
      }}
    >
      <Lottie animationData={animationData} loop style={{ width: 180, height: 180 }} />
    </Box>
  );
};
