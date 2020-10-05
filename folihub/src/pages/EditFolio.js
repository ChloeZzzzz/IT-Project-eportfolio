import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, EditFolioContainer, EditFolioTitle, EditFolioManage, EditFolioIndex, EditFolioEditor, MyPageTite, IndexCard, SelectedIndexCard} from '../components/EditFolioStyle';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Template_1 from '../components/template_1';

class EditFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            content: '',
            nPage: 2,
            currPage: 0,
        };
        this.changeIndexCard = this.changeIndexCard.bind(this);
    };

    changeIndexCard(event) {
      this.setState({currPage: 1});
      console.log(this.state.currPage);
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
                  cards.push(<IndexCard onClick={this.changeIndexCard}/>);
                }
              }
            }
            return (
                <EditFolioContainer>
                    <EditFolioTitle>{this.props.match.params.id}Should be the Name of this eportfolio</EditFolioTitle>
                    <EditFolioManage>Export Save etc.</EditFolioManage>
                    <EditFolioIndex>
                        <MyPageTite>My Pages<hr/></MyPageTite>
                        {cards}
                    </EditFolioIndex>
                    <EditFolioEditor>
                      <Template_1 />
                    </EditFolioEditor>
                </EditFolioContainer>
            )
        }
    }
}

export default EditFolio;
