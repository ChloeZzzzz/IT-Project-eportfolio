import React from 'react'
import {CollectionCanvas, ItemContainer, Item, ItemDescription, ItemTitle, ItemDate} from './Style.js';
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Popover from '@material-ui/core/Popover';

class UserHomepage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false, // the loading animation
            loggedIn : false,
            eportfolio: [
            {
                name: "Happy",
                date: "24/8/2020",
            },
            {
                name: "Sunday",
                date: "25/8/2020",
            }
            ],
        }

    }
/*
    ToolPopover() {
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;
      
        return (
          <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
              Open Popover
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
          </div>
        );
      }
      */

    render(){
        const items = this.state.eportfolio.map((e) => 
            <Item>
                <ItemDescription>
                    <ItemTitle>
                        {e.name}
                    </ItemTitle>
                    <ItemDate>
                        <VisibilityIcon fontSize = "small"/>
                        {e.date}
                        <MoreVertIcon fontSize = "small"/>
                    </ItemDate>
                </ItemDescription>
            </Item>)
        return (
            <CollectionCanvas>
                <ItemContainer>
                    {items}
                    <Item>
                        <AddIcon style={{ fontSize: 82, opacity: 0.7, marginLeft: 19, marginTop: 45}} />
                    </Item>
                </ItemContainer>
            </CollectionCanvas>
        )
    }
}
export default UserHomepage;