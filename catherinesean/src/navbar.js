import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {

  return (
    <div className="nav-bar">
      <AppBar>
        <Toolbar>
          <IconButton className="">

          </IconButton>
          <div className="date-details">
          <Typography className="wedding-date">
            May 29, 2021
          </Typography>
          <Typography className="wedding-location">
            Newport, Rhode Island
          </Typography>
          </div>
          <Typography className="title">
            Catharine & Sean
          </Typography>
          <div className="links">
            <Typography className="link">
              <a href="/">Home</a>
            </Typography>
            <Typography className="link">
              <a href="/schedule">Schedule</a>
            </Typography>
            <Typography className="link">
              <a href="/travel">Travel</a>
            </Typography>
            <Typography className="link">
              <a href="/registry">Registry</a>
            </Typography>
            <Typography className="link">
              <a href="/wedding-party">Wedding Party</a>
            </Typography>
            <Typography className="link">
              <a href="/photos">Photos</a>
            </Typography>
            <Typography className="link">
              <a href="/things-to-do">Things To Do</a>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
