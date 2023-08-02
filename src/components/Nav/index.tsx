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
  StyledRootBox,
} from "./style";
import theme from "@/utils/Theme";
import { debounce } from "@/utils/GlobalFuntions";
import { setSearch, setSongs } from "@/reducers/SongReducer";
import Sidebar from "../Sidebar";
import { UserButton } from "@clerk/nextjs";
import store from "@/src/ducks/store";

const Nav = (): JSX.Element => {
  const dispatch = store.dispatch;
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  const handleDrawerClose = (): void => {
    setDrawerIsOpen(false);
  };

  const handleOpenDrawer = (): void => {
    setDrawerIsOpen((prev) => !prev);
  };

  const setSearchVal = (searchInputVal: string): void => {
    dispatch(setSearch({ search: searchInputVal }));
    dispatch(setSongs({ songs: [] }));
  };

  const handleSearch = debounce((inputVal: string) => {
    setSearchVal(inputVal);
  }, 1000);

  return (
    <StyledRootBox>
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
            sx={{ mr: 2, color: theme.palette.secondary.dark }}
          >
            <MenuIcon />
          </IconButton>
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
          <UserButton afterSignOutUrl="/" />
        </Toolbar>
      </AppBar>
    </StyledRootBox>
  );
};

export default Nav;
