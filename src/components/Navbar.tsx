import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MailIcon from "@mui/icons-material/Mail";

import { useState, useEffect, JSX } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PageLoader } from "./PageLoader";

interface NavbarProps {
  title?: string;
  navItems?: string[];
}

const navIcons: Record<string, JSX.Element> = {
  Home: <HomeIcon />,
  About: <PersonIcon />,
  Projects: <CodeIcon />,
  Games: <SportsEsportsIcon />,
  Contact: <MailIcon />,
};

export const Navbar = ({
  title = "Portfolio | Kevin",
  navItems = ["Home", "About", "Projects", "Games", "Contact"],
}: NavbarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const lower = sectionId.toLowerCase();

    if (lower === "home") {
      if (location.pathname !== "/") {
        setLoading(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      return;
    }

    if (location.pathname !== "/portfolio") {
      setLoading(true);
      setTimeout(() => {
        navigate("/portfolio", { state: { scrollTo: lower } });
      }, 2000);
    } else {
      const section = document.getElementById(lower);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(lower);
      }
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const id = item.toLowerCase().replace(/\s+/g, "-");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems, location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 200);
    const contentTimer = setTimeout(() => setShowContent(true), 800);
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(8px)",
            boxShadow: "none",
            transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
            opacity: showNavbar ? 1 : 0,
            transition: "transform 1s ease, opacity 1s ease",
          }}
        >
          <Toolbar>
            <Box
              onClick={() => handleNavClick("home")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                ml: { sm: 0, md: 6, lg: 10 },
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 1s ease, transform 1s ease",
                transitionDelay: "0.3s",
              }}
            >
              <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                {title}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" }, mr: { sm: 0, md: 6, lg: 10 } }}>
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  variant="text"
                  disableRipple
                  sx={{
                    color:
                      activeSection === item.toLowerCase()
                        ? theme.palette.primary.main
                        : "white",
                    borderBottom:
                      activeSection === item.toLowerCase()
                        ? `1px solid ${theme.palette.primary.main}`
                        : "none",
                    borderRadius: 0,
                    textTransform: "none",
                    fontSize: "1rem",
                    minWidth: "auto",
                    padding: "0px 1px",
                    mr: 2,
                    backgroundColor: "transparent",
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? "translateY(0)" : "translateY(-10px)",
                    transition: "opacity 1s ease, transform 1s ease",
                    transitionDelay: `${0.5 + index * 0.2}s`,
                    "&:hover": {
                      color: theme.palette.error.main,
                      borderBottom: `1px solid ${theme.palette.error.main}`,
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleNavClick(item)}
                >
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

          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                width: 240,
                px: 2,
                py: 3,
                borderRight: `1px solid ${theme.palette.divider}`,
                boxShadow: "2px 0 8px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <Box
              sx={{
                mb: 3,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6">Kevin's Portfolio</Typography>
            </Box>

            <List>
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();

                return (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleDrawerToggle();
                        handleNavClick(item);
                      }}
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        bgcolor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                        color: isActive ? theme.palette.primary.main : "inherit",
                        transition: "all 0.3s ease",
                        "&:hover, &:active": {
                          bgcolor: "rgba(255,255,255,0.08)",
                          transform: "scale(0.98)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: isActive ? theme.palette.primary.main : "inherit",
                          minWidth: 32,
                        }}
                      >
                        {navIcons[item]}
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          fontSize: "1rem",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};
