import React, { useState } from 'react';
import useStyles from './style.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomizedMenus from './menu';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function NavigationBar() {
  const ariaLabel = { 'aria-label': 'description' };
  const menuId = 'primary-search-account-menu';
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showNav, setShowNav] = useState(true);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const changeToSearchBar = () => {
    setShowNav(!showNav);
  }
  const navBar =
    (<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <CustomizedMenus name="Home" />
      <CustomizedMenus name="Us Model" />
      <CustomizedMenus name="Our World" />
      <CustomizedMenus name="Be creative" />
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"  
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircleIcon/>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <SearchIcon onClick={() => changeToSearchBar()}/> 
      </IconButton>
    </Box>)

  const searchBar = 
  (<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <Input placeholder="Enter to search" inputProps={ariaLabel} disableUnderline="false" className={classes.searchInput_Style} />
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <CloseIcon onClick={() => changeToSearchBar()} />
    </IconButton>
  </Box>) 
  
  let bar = null;
  showNav ? (bar = navBar) : (bar = searchBar)

  return (
    <AppBar className={classes.appBar_style} >
      <Toolbar className={classes.toolBar_style} >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <span className={classes.appName_style}>PIMO</span>
        </Typography>
        <Box sx={{ flexGrow: 0.8 }} />
        {bar}
      </Toolbar>
    </AppBar>
  );

}

