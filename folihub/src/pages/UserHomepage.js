import React from 'react'
import {CollectionCanvas, ItemContainer, Item, ItemDescription, ItemTitle, ItemDate} from '../components/Style.js';
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolioMenu from '../components/FolioMenu';
import Tooltip from '@material-ui/core/Tooltip';
import {getEportfolios} from '../api/folioAPI';
import NewFolioMenu from '../components/NewFolioMenu';

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

    async componentDidMount() {
        var data = await getEportfolios();
        console.log(data);
        this.setState({eportfolio: data});
    }

    render(){
        const items = this.state.eportfolio.map((e) => 
            <Item>
                <ItemDescription>
                    <ItemTitle>
                        {e.name}
                    </ItemTitle>
                    <ItemDate>
                        <Tooltip title="public">
                            <VisibilityIcon fontSize = "small"/>
                        </Tooltip>
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
                        <NewFolioMenu />
                    </Item>
                </ItemContainer>
            </CollectionCanvas>
        )
    }
}
export default UserHomepage;