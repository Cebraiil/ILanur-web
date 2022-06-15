import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

        <List >
          <Link to="/" >
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
          <Link to="/quran" >
            <ListItemButton>
                <ListItemText primary="Quran" />
            </ListItemButton>
          </Link>
        </List>
      <Divider />

      <p style={{padding:15, fontSize:13}}>
          © 2022 ilanur.com All Rights Reserved
      </p>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
      <AppBar variant="outlined" sx={{ bgcolor: "#fff" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon sx={{ color: "black" }} onClick={toggleDrawer(anchor, true)} />
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            ilanur
          </Typography>
          <Button  sx={{ color: "black" }} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
