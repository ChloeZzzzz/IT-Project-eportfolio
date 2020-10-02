import React, {Component} from 'react';
import {Container_1, IMG_1, IMG_1_Container, Input, TXT_1} from '../components/TemplateStyle';
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
            let img = event.target.files[0];
            this.setState({
                img: URL.createObjectURL(img)
            })
        }
        console.log(this.state.img);
    }

    render() {
        return (
            <Container_1>
                <IMG_1_Container>
                    <IMG_1 src={this.state.img} />
                    <Input type="file" name="image" onChange={this.onImageChange} />
                </IMG_1_Container>
                <TXT_1>
                </TXT_1>
            </Container_1>
        );
    }
}
export default Template_1;