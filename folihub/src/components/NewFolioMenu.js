import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import {createEportfolio} from '../api/folioAPI';

export default function NewFolioMenu() {
    const [open, setOpen] = React.useState(false);
    const [visibility, setVisibility] = React.useState('private');
    const [name, setName] = React.useState('myFolio');
    const [layout, setLayout] = React.useState('landscape');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    const handleVisibilitytChange = (event) => {
        setVisibility(event.target.value);
    };

    const handleLayoutChange = (event) => {
        setLayout(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("onsubmit");
        console.log(visibility);
        console.log(name);
        console.log(layout);
        var response = await createEportfolio({"email": localStorage.getItem("email"),  "folioName": name, "visiblity": visibility, "layout": layout});
        console.log(response)
        if (true) {
            window.location.href = "/EditFolio";
        }
    }

    return (
      <div>
        
        <IconButton style={{marginLeft: 7, marginTop: 35}} onClick={handleClickOpen}>
            <AddIcon style={{ fontSize: 82, opacity: 0.8, color: "black"}}/>
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          aria-describedby="form-dialog-description"
        >

          <DialogTitle id="form-dialog-title">New E-portfolio</DialogTitle>

          <DialogContent>
            <form onSubmit = {handleSubmit}>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            value = {name}
            onChange = {handleNameChange}
            />
            <br/><br/>
            <FormLabel component="legend">Visibility</FormLabel>
            <RadioGroup row name="visibility" value={visibility} onChange={handleVisibilitytChange}>
                <FormControlLabel value="private" control={<Radio color = "default"/>} label="private" />
                <FormControlLabel value="public" disabled control={<Radio />} label="public" />
            </RadioGroup>
            <hr/>
            <FormLabel component="legend">Layout</FormLabel>
            <RadioGroup row name="layout" value={layout} onChange={handleLayoutChange}>
                <FormControlLabel value="landscape" control={<Radio color = "default"/>} label="landscape" />
                <FormControlLabel value="portrait" disabled control={<Radio />} label="portrait" />
            </RadioGroup>
            <hr/>
            <DialogActions>
                <Button type = "submit" >
                    Create
                </Button>
            </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }