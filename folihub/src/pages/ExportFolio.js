import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, FolioContainer, FolioHeader, FolioTitle, FolioOwner, Container_1_Export, PageContainer} from '../components/ExportFolioStyle';
import {IMG_1_Container, IMG_1, TXT_1} from '../components/TemplateStyle';

import {getFolio, getPage} from '../api/folioAPI';
import Promise from 'bluebird';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import domtoimage from "dom-to-image";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
        this.printDocument = this.printDocument.bind(this);
    };

    componentDidMount = async() => {
        this.setState({loading:true})
        var folioID = localStorage.getItem("folioId");
        var res_pageids = await getFolio({email: localStorage.getItem("email"), folioId: localStorage.getItem("folioId")})
        var contents = []
        for (var i = 0; i < res_pageids.length; i++) {
            let pageContent = await getPage({email: localStorage.getItem("email"), folioId: localStorage.getItem("folioId"), pageId: res_pageids[i].PageID});
            contents.push(pageContent);
        }
        console.log(contents);
        this.setState({
            folioID: folioID,
            pageIDs: res_pageids,
            content: contents,
            folioName: res_pageids[0].FolioName,
            loading:false,
        })
    }

    async printDocument() {
        const divs = document.getElementsByClassName('print');
        const newList = [].slice.call(divs);
        var contentArray = [];
        var docDefinition = {
            content:  []
        }
        /*
        for (let i = 0; i < newList.length; i++) {
            domtoimage.toPng(newList[i])
                .then(function(dataURL) {
                    var img = new Image();
                    img.src = dataURL;
                    docDefinition.content[i] = [{ image: dataURL, height:  650, width: 900}];
                    //console.log(i + ": " + dataURL);
                });
        }

        //docDefinition.content = contentArray;
        console.log(docDefinition.content);
        console.log("... starting download ...");
        pdfMake.createPdf(docDefinition).download(this.state.folioName + '.pdf');
        */
        Promise.map(newList, async (element, index) => {
            domtoimage.toPng(element)
                .then(function(dataURL) {
                    //var img = new Image();
                    //img.src = dataURL;
                    contentArray[`${index}`] = [{ image: dataURL, width: 900, height: 650 }];
                });
        }).then(
            () => ( docDefinition.content.push(contentArray))
        ).then(
            () => {
                console.log(docDefinition.content);
                    
                console.log("... starting download ...")
                pdfMake.createPdf(docDefinition).download(this.state.folioName + '.pdf');
            }
        )
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
        }
        else {
            var pages = [];
            for (var i = 0; i < this.state.content.length; i++) {
                // if this page is in template 1 display style
                if (this.state.content[i][0].TemplateID == "1") {
                    pages.push(
                    <Container_1_Export className="print">
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
                    <button onClick={() => this.printDocument()}> print using PDFMake  </button>
                </FolioContainer>
            )
        }
    }
}
export default ExportFolio;
