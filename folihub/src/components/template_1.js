import React, {Component} from 'react';
import {Container_1, IMG_1, TXT_1} from '../components/TemplateStyle';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

class Template_1 extends React.Component {
    constructor(props) {
        super();
        this.state={
            img: null,
            content: '',
        }
        this.onImageChange = this.onImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            <Container_1>
                <IMG_1>
                    <img src={this.state.img} />
                    <h1>select image</h1>
                    <input type="file" name="image" onChange={this.onImageChange} />
                </IMG_1>
                <ReactQuill
                    onChange={this.handleChange}
                    value={this.state.content}
                    modules={Template_1.modules}
                    formats={Template_1.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </Container_1>
        );
    }
}
export default Template_1;
