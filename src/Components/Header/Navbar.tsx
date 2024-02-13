"use client";
import Link from "next/link";

//
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import logo from "../../../public/dark-logo.png";

//drawer
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Image from "next/image";
const drawerWidth = 240;

const navItems = [
  {
    route: "Home",
    pathName: "#home",
  },
  {
    route: "About",
    pathName: "#about",
  },
  {
    route: "Service",
    pathName: "#service",
  },
  {
    route: "Contact",
    pathName: "#contact",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "20px" }}
    >
      <Image className="mx-auto mb-5" src={logo} height={50} width={50} alt="logo" />
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.pathName}>
            <ListItem
              disablePadding
              sx={{
                "& :hover": {
                  color: "red",
                  fontWeight: "800",
                  textDecoration: "underline",
                },
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                }}
              >
                <ListItemText primary={item.route} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <nav className="">
        <ul className="flex gap-14 text-xl max-lg:hidden  ">
          {navItems?.map((item) => (
            <li
              key={item.route}
              className="hover:text-[#27A1B0] hover:font-bold hover:underline"
            >
              <Link href={item.pathName}>{item.route}</Link>
            </li>
          ))}
        </ul>
        {/* Dwarer button for Open and close  */}
        <div className="max-lg:block lg:hidden">
          <IconButton
            color="inherit"
            size="medium"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* Drawer for small devices */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
