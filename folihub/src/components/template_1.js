import React, {Component} from 'react';
import {Container_1, IMG_1, TXT_1} from '../components/TemplateStyle';
class Template_1 extends React.Component {
    constructor(props) {
        super();
        this.state={
            img: null,
        }
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.file[0];
            this.setState({
                img: URL.createObjectURL(img)
            })
        }
    }

    render() {
        return (
            <Container_1>
                <IMG_1>
                    <img src={this.state.img} />
                    <h1>select image</h1>
                    <input type="file" name="image" onChange={this.onImageChange} />
                </IMG_1>
                <TXT_1>
                </TXT_1>
            </Container_1>
        );
    }
}
export default Template_1;