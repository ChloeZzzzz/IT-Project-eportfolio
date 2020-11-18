import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, EditFolioContainer, EditFolioTitle, EditFolioManage, EditFolioIndex, EditFolioEditor, MyPageTitle, IndexCard, SelectedIndexCard, NewPage, EditFolioToolbar, SaveDiv, BookDiv, PDFDiv, EditForm} from '../components/EditFolioStyle';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Template_1 from '../components/template_1';
import AddIcon from '@material-ui/icons/Add';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import GetAppIcon from '@material-ui/icons/GetApp';
import SaveIcon from '@material-ui/icons/Save';
import {savePage} from '../api/folioAPI';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {renameFolio, getFolio, createPage} from '../api/folioAPI';

class EditFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            isEdit: false,
            name: 'loading...',
            content: '',
            pageIds: [{FolioName: '', PageID: 0}],
            currPage: 0,
        };
        this.submitPage = this.submitPage.bind(this);
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
      renameFolio({email: localStorage.getItem("email"), folioId: this.props.match.params.id, newName: this.state.name});
    }

    addPage(event) {
      createPage({email: localStorage.getItem("email"), folioId: this.props.match.params.id, templateId: "1"});
    }

    componentDidMount = async () => {
      var folioInfo = await getFolio({email: localStorage.getItem("email"), folioId: this.props.match.params.id});
      this.setState({
        name: folioInfo[0].FolioName,
        pageIds: folioInfo,
        currPage: 0
      });
    }

    submitPage = event => {
      var res = savePage({email: localStorage.getItem("email"), folioId: this.props.data.folioID, pageId: this.props.data.pageID, templateId: "1", content: [this.state.base64, this.state.text]});
      console.log(res);
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
            for (let i = 0; i < this.state.pageIds.length; i++) {
              if (i === this.state.currPage) {
                //change when having multiple templates
                //change to a window for selecting templates
                cards.push(<SelectedIndexCard />)
              }
              else {
                cards.push(<IndexCard onClick={() => this.changeIndexCard({i})} />);
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
                          <SaveIcon onClick={this.submitPage}/>
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
                      <Template_1 data = {{"folioID": this.props.match.params.id, "pageID": this.state.pageIds[this.state.currPage].PageID}}/>
                    </EditFolioEditor>
                </EditFolioContainer>
            )
        }
    }
}

export default EditFolio;
