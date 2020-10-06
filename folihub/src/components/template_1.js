import React, {Component} from 'react';
import {Container_1, IMG_1, IMG_1_Container, Input, TXT_1} from '../components/TemplateStyle';
import {Button}  from '../components/Style';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {savePage} from '../api/folioAPI';

class Template_1 extends React.Component {
    constructor(props) {
        super();
        this.state={
            img: null,
            content: '',
        }
        this.submitPage = this.submitPage.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitPage = event => {
        console.log(this.state.img);
        console.log(this.state.content);
        console.log(this.props.data);
        var res = savePage({email: localStorage.getItem("email"), folioID: this.props.data, img: this.state.img, content: this.state.content});
        console.log(res);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                img: URL.createObjectURL(img)
            })
        }
    }

    handleChange(value) {
        this.setState({ content: value })
    }

    render() {
        return (
            <div>
                <Container_1>
                    <IMG_1_Container>
                        <IMG_1 src={this.state.img} />
                        <Input type="file" name="image" onChange={this.onImageChange} />
                    </IMG_1_Container>
                    <TXT_1>
                    <ReactQuill
                            style = {{"height": "50vh"}}
                        onChange={this.handleChange}
                        value={this.state.content}
                        modules={Template_1.modules}
                        formats={Template_1.formats}
                        bounds={'.app'}
                        placeholder={this.props.placeholder}
                    />
                    </TXT_1>
                </Container_1>
                <Button onClick={this.submitPage}>
                        next page
                </Button>
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
