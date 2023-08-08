"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledDrawer,
  StyledInputBase,
} from "./style";
import theme from "@/src/utils/Theme";
import { debounce } from "@/src/utils/GlobalFuntions";
import { setSearch, setSongs } from "@/src/reducers/SongReducer";
import Sidebar from "../Sidebar";
import store from "@/src/ducks/store";
import { Avatar, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const Nav = ({
  navigate,
}: {
  navigate: (href: string) => void;
}): JSX.Element => {
  const dispatch = store.dispatch;
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerClose = (): void => {
    setDrawerIsOpen(false);
  };
  const logout = async (): Promise<void> => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      navigate("/login");
    } catch (err) {
      const error = err as { message: string; status: number };
      toast.error(error.message);
    }
  };

  const handleOpenDrawer = (): void => {
    setDrawerIsOpen((prev) => !prev);
  };

  const handleLogout = (): void => {
    setAnchorEl(null);
    void logout();
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const setSearchVal = (searchInputVal: string): void => {
    dispatch(setSearch({ search: searchInputVal }));
    dispatch(setSongs({ songs: [] }));
  };

  const handleSearch = debounce((inputVal: string) => {
    setSearchVal(inputVal);
  }, 1000);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      sx={{ zIndex: "99999" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem
        onClick={(): void => {
          handleLogout();
        }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );

  return (
    <Box width="100%" sx={{ flexGrow: "1" }} data-testid="nav">
      <StyledDrawer open={isDrawerOpen} onClose={handleDrawerClose}>
        <Sidebar handleCloseDrawer={handleDrawerClose} />
      </StyledDrawer>

      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
            sx={{ mr: 2, color: "darkblue" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              "@media (max-width: 500px)": {
                display: "none",
              },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontWeight={"600"}
              sx={{
                paddingRight: "10px",

                display: {
                  color: theme.palette.secondary.contrastText,
                },
              }}
            >
              Feel !t
            </Typography>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              defaultValue={""}
              onChange={(e) => {
                handleSearch(e?.target?.value);
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Nav;
