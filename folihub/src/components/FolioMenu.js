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
import { Redirect } from "react-router-dom";

import {colorPlan} from './Style';
import { renameSync } from 'fs';

import {deleteEP} from '../api/folioAPI';

import { useHistory } from 'react-router'

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

export default function FolioMenu(id) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const redirectTo = (path) => {
    setRedirect(path);
  };

  const history = useHistory();
  const deleteThis = async (data) => {
    deleteEP(data).then(() => {
      history.go(0)
    });
  }

  if (redirect != null) {
    return (<Redirect to = {`/${redirect}`}/>);
  } else {
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
          <StyledMenuItem dense="true" onClick = {() => redirectTo(`ExportFolio/${id.children}`)}>
            <ListItemIcon>
              <CollectionsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Preview" />
          </StyledMenuItem>
          <StyledMenuItem dense="true" onClick = {() => deleteThis({email: localStorage.getItem("email"), folioId: id.children})}>
            <ListItemIcon>
              <DeleteForeverIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
    );
  }
}