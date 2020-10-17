import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, FolioContainer, FolioHeader, FolioTitle, FolioOwner, Container_1_Export, PageContainer} from '../components/ExportFolioStyle';
import {IMG_1_Container, IMG_1, TXT_1} from '../components/TemplateStyle';

import {getFolio, getPage} from '../api/folioAPI';

class ExportFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            folioID: '',
            pageIDs: '',
            content: '',
            folioName: '',
        };
    };

    componentDidMount = async() => {
        var folioID = this.props.match.params.id;
        var res_pageids = await getFolio({email: localStorage.getItem("email"), folioId: folioID})
        var contents = []
        for (var i = 0; i < res_pageids.length; i++) {
            let pageContent = await getPage({email: localStorage.getItem("email"), folioId: folioID, pageId: res_pageids[i].PageID});
            contents.push(pageContent);
        }
        console.log(contents);
        this.setState({
            folioID: folioID,
            pageIDs: res_pageids,
            content: contents,
            folioName: res_pageids[0].FolioName,
        })
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
            var pages = [];
            for (var i = 0; i < this.state.content.length; i++) {
                // if this page is in template 1 display style
                if (this.state.content[i][0].TemplateID == "1") {
                    pages.push(
                    <Container_1_Export>
                        <IMG_1_Container>
                            <IMG_1 src={this.state.content[i][0].Content} />
                        </IMG_1_Container>
                        <TXT_1 dangerouslySetInnerHTML = {{__html: this.state.content[i][1].Content}}/>
                    </Container_1_Export>);
                }
            }
            return (
                <FolioContainer>
                    <FolioHeader>
                        <FolioTitle>
                            {this.state.folioName}
                        </FolioTitle>
                        <FolioOwner>
                            {localStorage.getItem("email")}
                        </FolioOwner>
                    </FolioHeader>
                    <PageContainer>
                        {pages}
                    </PageContainer>
                </FolioContainer>
            )
        }
    }
}
export default ExportFolio;
