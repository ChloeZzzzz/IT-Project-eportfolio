import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan} from '../components/ExportFolioStyle';
import {IMG_1} from '../components/TemplateStyle';

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
                    pages.push(<IMG_1 src={this.state.content[i][0].Content} />);
                    pages.push(<div dangerouslySetInnerHTML = {{__html: this.state.content[i][1].Content}}></div>);
                }
            }
            return (
                <div>
                    {pages}
                </div>
            )
        }
    }
}
export default ExportFolio;
