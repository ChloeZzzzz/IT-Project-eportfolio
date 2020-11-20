import React from "react";
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {
  colorPlan,
  EditFolioContainer,
  EditFolioTitle,
  EditFolioManage,
  EditFolioIndex,
  EditFolioEditor,
  MyPageTitle,
  IndexCard,
  SelectedIndexCard,
  NewPage,
  RemovePage,
  EditFolioToolbar,
  BookDiv,
  PDFDiv,
  EditForm
} from "../components/EditFolioStyle";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Template_1 from "../components/template_1";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import StarIcon from '@material-ui/icons/Star';
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import GetAppIcon from "@material-ui/icons/GetApp";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { renameFolio, getFolio, createPage } from "../api/folioAPI";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class EditFolio extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      loggIn: false,
      isEdit: false,
      name: "loading...",
      content: "",
      pageIds: [{ FolioName: "", PageID: 0 }],
      currPage: 0,
      redirect: false,
    };
    this.changeEdit = this.changeEdit.bind(this);
    this.changeIndexCard = this.changeIndexCard.bind(this);
    this.addPage = this.addPage.bind(this);
    this.removePage = this.removePage.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.export = this.export.bind(this);
  }

  changeIndexCard(event) {
    let val = event.i;
    this.setState({ currPage: val });
  }

  changeEdit(event) {
    this.setState({ isEdit: true });
  }

  handleClickAway() {
    this.setState({ isEdit: false });
    renameFolio({
      email: localStorage.getItem("email"),
      folioId: localStorage.getItem("folioId"),
      newName: this.state.name
    });
  }

  addPage = async () => {
    createPage({
      email: localStorage.getItem("email"),
      folioId: localStorage.getItem("folioId"),
      templateId: "1"
    }).then(async () => {
      await getFolio({
        email: localStorage.getItem("email"),
        folioId: localStorage.getItem("folioId")
      }).then((folioInfo) => {
        console.log(folioInfo);
        this.setState({
          name: folioInfo[0].FolioName,
          pageIds: folioInfo,
        });
      })
    });
  }

  removePage = async () => {

  }

  componentDidMount = async () => {
    await getFolio({
      email: localStorage.getItem("email"),
      folioId: localStorage.getItem("folioId")
    }).then((folioInfo) => {
      console.log(folioInfo);
      this.setState({
        name: folioInfo[0].FolioName,
        pageIds: folioInfo,
        currPage: 0,
      });
    })
  };

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  export(){
    this.setState({redirect: true})
  }

  render() {
    if (this.state.loading) {
      return (
        <Welcome
          loopDUration={1000}
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
      if (this.state.redirect) {
        return <Redirect to={`/ExportFolio/${localStorage.getItem("folioId")}`} />;
      } else {
        var cards = [];
        for (let i = 0; i < this.state.pageIds.length; i++) {
          if (i === this.state.currPage) {
            //change when having multiple templates
            //change to a window for selecting templates
            cards.push(<SelectedIndexCard> <StarIcon /> </SelectedIndexCard>);
          } else {
            cards.push(
              <IndexCard onClick={() => this.changeIndexCard({ i })}> {i+1} </IndexCard>
            );
          }
        }
        return (
          <EditFolioContainer>
            <ClickAwayListener onClickAway={this.handleClickAway}>
              <EditFolioTitle>
                <MyPageTitle onClick={this.changeEdit}>
                  {!this.state.isEdit ? (
                    this.state.name
                  ) : (
                    <EditForm
                      type="text"
                      value={this.state.name}
                      onChange={this.onNameChange}
                    />
                  )}
                  <hr />
                </MyPageTitle>
              </EditFolioTitle>
            </ClickAwayListener>

            <EditFolioManage>
              <EditFolioToolbar>
                <div></div>
                <div></div>
                <BookDiv>
                  <ImportContactsIcon />
                </BookDiv>
                <PDFDiv
                  onClick={() =>
                    this.export()
                  }
                >
                  <GetAppIcon />
                </PDFDiv>
              </EditFolioToolbar>
            </EditFolioManage>
            <EditFolioIndex>
              {cards}
              <NewPage onClick={this.addPage}>
                <AddIcon />
              </NewPage>
              <RemovePage onClick={this.removePage}>
                <RemoveIcon/>
              </RemovePage>
            </EditFolioIndex>
            <EditFolioEditor>
              <Template_1
                data={{
                  folioID: localStorage.getItem("folioId"),
                  pageID: this.state.pageIds[this.state.currPage].PageID
                }}
              />
            </EditFolioEditor>
          </EditFolioContainer>
        );
      }
    }
  }
}

export default withRouter(EditFolio);
