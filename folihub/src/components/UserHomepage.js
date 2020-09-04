import React from 'react'
import {CollectionCanvas, ItemContainer, Item, ItemDescription, ItemTextContainer, ItemTitle, ItemDate} from './Style.js';

class UserHomepage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false, // the loading animation
            loggedIn : false,
            eportfolio: {
                name: "happy",
                date: "24/8/2020",
            },
        }
    }

    render(){
        return (
            <CollectionCanvas>
                <ItemContainer>
                    <Item>
                        <ItemDescription>
                            <ItemTitle>
                                {this.state.eportfolio.name}
                            </ItemTitle>
                            <ItemDate>
                                {this.state.eportfolio.date}
                            </ItemDate>
                        </ItemDescription>
                    </Item>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemContainer>
            </CollectionCanvas>
        )
    }
}
export default UserHomepage;