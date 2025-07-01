import { AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  title?: string;
  navItems?: string[];
}

export const Navbar = ({ title = "Portfolio | Kevin", navItems = ["Home", "About me", "Projects", "Games", "Contact"] }: NavbarProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (sectionId: string) => {
    if (sectionId.toLowerCase() === "home") {
      navigate("/");
    } else {
      const section = document.getElementById(sectionId.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: theme.palette.background.default }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.main,}}>
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
            <Button key={item} sx={{ color: "white" }} onClick={() => handleNavClick(item)}>
                {item}
            </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
