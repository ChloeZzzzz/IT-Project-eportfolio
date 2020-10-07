import React, {Component} from 'react';
import {Container_1, IMG_1, IMG_1_Container, Input, TXT_1, SaveDiv} from '../components/TemplateStyle';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {savePage, getPage} from '../api/folioAPI';
import SaveIcon from '@material-ui/icons/Save';


class Template_1 extends React.Component {
    constructor(props) {
        super();
        this.state={
            img: null,
            base64: '',
            content: '',
        }
        this.submitPage = this.submitPage.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitPage = event => {
        console.log(this.state.img);
        console.log(this.state.content);
        console.log(this.state.base64);
        console.log(this.props.data);
        var res = savePage({email: localStorage.getItem("email"), folioId: this.props.data.folioID, pageId: this.props.data.pageID, templateId: "1", content: [this.state.base64, this.state.content]});
        console.log(res);
    }

    componentDidMount = async () => {
        console.log("pageid");
        console.log(this.props.data.pageID);
        var res = await getPage({email: localStorage.getItem("email"), folioId: this.props.data.folioID, pageId: this.props.data.pageID});
        console.log(res);
        this.setState({
            base64: res[0],
            img: res[1]
        })
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            let img2 = img;
            // save it as base64 for db, url for preview
            var reader = new FileReader();
            var that = this;
            reader.onloadend = function() {
                console.log("RESULT", reader.result);
                that.setState({
                    img: URL.createObjectURL(img),
                    base64: reader.result
                })
            }
            reader.readAsDataURL(img2);
        }
    }

    handleChange(value) {
        this.setState({ content: value })
    }

    render() {
        return (
            <div>
                <SaveDiv>
                  <SaveIcon onClick={this.submitPage}/>
                </SaveDiv>
                <Container_1>
                    <IMG_1_Container>
                        <IMG_1 src={this.state.img} />
                        <Input type="file" name="image" onChange={this.onImageChange} />
                    </IMG_1_Container>
                    <TXT_1>
                    <ReactQuill
                        style = {{"height": "68vh", "width": "40vw"}}
                        onChange={this.handleChange}
                        value={this.state.content}
                        modules={Template_1.modules}
                        formats={Template_1.formats}
                        bounds={'.app'}
                        placeholder={this.props.placeholder}
                    />
                    </TXT_1>
                </Container_1>
            </div>
        );
    }
  }

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
 Template_1.modules = {
    toolbar: [
      [{ 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}]],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
}
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
Template_1.formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent'
]

export default Template_1;
