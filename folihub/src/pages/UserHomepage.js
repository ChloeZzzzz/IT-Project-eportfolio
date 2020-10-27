import React from "react";
import {
  CollectionCanvas,
  ItemContainer,
  Item,
  ItemDescription,
  ItemTitle,
  ItemDate
} from "../components/Style.js";
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FolioMenu from "../components/FolioMenu";
import Tooltip from "@material-ui/core/Tooltip";
import { getEportfolios } from "../api/folioAPI";
import NewFolioMenu from "../components/NewFolioMenu";
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import { colorPlan } from "../components/Style";

class UserHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
      eportfolio: []
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await getEportfolios(this.props.email).then(response => {
      this.setState({
        eportfolio: response,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Welcome
          loopDuration={1000}
          data={[
            {
              backgroundColor: colorPlan.Light,
              textColor: colorPlan.Dark,
              text: "Loading...",
              image: Logo_Dark
            }
          ]}
        />
      );
    } else {
      const items = this.state.eportfolio.map(e => (
        <Item>
          <ItemDescription>
            <ItemTitle>{e.FolioName}</ItemTitle>
            <ItemDate>
              <Tooltip title="public">
                <VisibilityIcon fontSize="small" />
              </Tooltip>
              {e.LastModified.slice(0, 10)}
              <FolioMenu />
            </ItemDate>
          </ItemDescription>
        </Item>
      ));
      return (
        <CollectionCanvas>
          <ItemContainer>
            {items}
            <Item>
              <NewFolioMenu />
            </Item>
          </ItemContainer>
        </CollectionCanvas>
      );
    }
  }
}
export default UserHomepage;
