import { AppBar, Box, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  title?: string;
  navItems?: string[];
}

export const Navbar = ({
  title = "Portfolio | Kevin",
  navItems = ["Home", "About", "Projects", "Games", "Contact"],
}: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId.toLowerCase() === "home") {
      navigate("/");
      setActiveSection("home");
    } else {
      if (location.pathname !== "/portfolio") {
        navigate("/portfolio", { state: { scrollTo: sectionId.toLowerCase() } });
      } else {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId.toLowerCase());
        }
      }
    }
  };


  useEffect(() => {
  if (location.pathname === "/") {
    setActiveSection("home");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

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
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 1s ease, transform 1s ease",
              transitionDelay: "0.3s",
              ml: 10,
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 10, }}>
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
      </AppBar>
    </Box>
  );
};