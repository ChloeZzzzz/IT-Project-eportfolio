import React from 'react'
import {CollectionCanvas, ItemContainer, Item, ItemDescription, ItemTitle, ItemDate} from './Style.js';
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolioMenu from './FolioMenu';

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
                        <FolioMenu/>
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