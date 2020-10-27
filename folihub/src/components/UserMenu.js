import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermMediaIcon from '@material-ui/icons/PermMedia';

import {colorPlan} from './Style';

const StyledMenu = withStyles({
  paper: {
    width: '180px',
    boxShadow: `2px 2px 5px ${colorPlan.Dark_Medium}`,
    borderRadius: '5px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    height: '30px',
    '&:active': {
      backgroundColor: colorPlan.Medium_Light,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function UserMenu(e) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Avatar
        fontSize="medium"
        aria-haspopup="true"
        onMouseOver={handleClick}>{e.data.slice(0,1).toUpperCase()}</Avatar>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClick={handleClose}
            MenuListProps={{onMouseLeave: handleClose}}
        >
            <StyledMenuItem dense="true">
              <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
            <StyledMenuItem dense="true" component = "a" href = "./userHomepage">
              <ListItemIcon>
                  <PermMediaIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="My Hub" />
            </StyledMenuItem>
            <StyledMenuItem dense="true">
              <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
        </StyledMenu>
    </div>
  );
}