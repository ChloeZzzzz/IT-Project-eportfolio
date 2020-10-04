import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan} from '../components/Style';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

class EditFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            text: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({ text: value })
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
            return (
                <ReactQuill value={this.state.text}
                onChange={this.handleChange}
                value={this.state.text}
                modules={EditFolio.modules}
                formats={EditFolio.formats}
                bounds={'.app'}
                placeholder={this.props.placeholder} />
            )
        }
    }
}
export default EditFolio;