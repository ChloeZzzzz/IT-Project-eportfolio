import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, EditFolioContainer, EditFolioTitle, EditFolioManage, EditFolioIndex, EditFolioEditor, MyPageTitle, IndexCard, SelectedIndexCard, NewPage, EditFolioToolbar, SaveDiv, BookDiv, PDFDiv, EditForm} from '../components/EditFolioStyle';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Template_1 from '../components/template_1';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import GetAppIcon from '@material-ui/icons/GetApp';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {renameFolio, getFolio} from '../api/folioAPI';

class EditFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            isEdit: false,
            name: '',
            content: '',
            nPage: 0,
            currPage: 0,
        };
        this.changeEdit = this.changeEdit.bind(this);
        this.changeIndexCard = this.changeIndexCard.bind(this);
        this.addPage = this.addPage.bind(this);
        this.handleClickAway = this.handleClickAway.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    };

    changeIndexCard(event) {
      let val = event.i;
      this.setState({currPage: val});
    }

    changeEdit(event) {
      this.setState({isEdit: true});
    }

    handleClickAway() {
      this.setState({isEdit: false});

      renameFolio({email: localStorage.getItem("email"), folioID: this.props.match.params.id, name: this.state.name});
    }

    addPage(event) {
      let n = this.state.nPage;
      n += 1;
      this.setState({nPage: n});
    }

    componentDidMount() {
      var folioInfo = getFolio({email: localStorage.getItem("email"), folioID: this.props.match.params.id});
      // name is folioInfo.name
      this.setState({name: this.props.match.params.id});
    }

    onNameChange(e) {
      this.setState({name: e.target.value})
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
                        image: {Logo_Dark}
                    }
                ]}
                />
            );
        }
        else {
            var cards = [];
            if (this.state.nPage === 0) {
              this.setState({nPage: 1});
            }
            else {
              for (let i = 0; i < this.state.nPage; i++) {
                if (i === this.state.currPage) {
                  //change when having multiple templates
                  //change to a window for selecting templates
                  cards.push(<SelectedIndexCard />)
                }
                else {
                  cards.push(<IndexCard onClick={() => this.changeIndexCard({i})} />);
                }
              }
            }
            return (
                <EditFolioContainer>
                  <ClickAwayListener onClickAway={this.handleClickAway}>
                    <EditFolioTitle>
                      <MyPageTitle onClick={this.changeEdit}>
                        {(!this.state.isEdit) ?  this.state.name : <EditForm type="text" value = {this.state.name} onChange = {this.onNameChange}/>}
                        <hr />
                      </MyPageTitle>
                    </EditFolioTitle>
                  </ClickAwayListener>


                    <EditFolioManage>
                      <EditFolioToolbar>
                        <div></div>
                        <SaveDiv>
                          <SaveIcon />
                        </SaveDiv>
                        <BookDiv>
                          <ImportContactsIcon />
                        </BookDiv>
                        <PDFDiv>
                          <GetAppIcon />
                        </PDFDiv>
                      </EditFolioToolbar>
                    </EditFolioManage>
                    <EditFolioIndex>
                        {cards}
                        <NewPage onClick={this.addPage}>
                          <AddIcon />
                        </NewPage>
                    </EditFolioIndex>
                    <EditFolioEditor>
                      <Template_1 data = {{"folioID": this.props.match.params.id, "pageID": this.state.currPage}}/>
                    </EditFolioEditor>
                </EditFolioContainer>
            )
        }
    }
}

export default EditFolio;
