import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import CollectionsIcon from '@material-ui/icons/Collections';
import ReplyIcon from '@material-ui/icons/Reply';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

export default function FolioMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon
        fontSize="small"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem dense="true">
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </StyledMenuItem>
        <StyledMenuItem dense="true">
          <ListItemIcon>
            <CollectionsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Preview" />
        </StyledMenuItem>
        <StyledMenuItem dense="true">
          <ListItemIcon>
            <ReplyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Export" />
        </StyledMenuItem>
        <StyledMenuItem dense="true">
          <ListItemIcon>
            <DeleteForeverIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}