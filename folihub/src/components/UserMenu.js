import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReorderIcon from '@material-ui/icons/Reorder';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
      horizontal: 'left',
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

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <ReorderIcon
        fontSize="medium"
        style={{color: colorPlan.Light}}
        aria-haspopup="true"
        onClick={handleClick} />
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
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