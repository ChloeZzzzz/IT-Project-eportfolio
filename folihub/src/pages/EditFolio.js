import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan} from '../components/Style';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Template_1 from '../components/template_1';
import Index from '../components/editIndex';
import { Edit_Container } from '../components/Style.js';

class EditFolio extends React.Component {
    constructor(props) {
        super();
        this.state={
            loading: false,
            loggIn: false,
            text: '',
            img: null,
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
                loopDuration={1000}
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
                <Edit_Container>
                  <Index />
                  <Template_1 />
                </Edit_Container>
            )
        }
    }
}
export default EditFolio;
