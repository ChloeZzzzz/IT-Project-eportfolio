import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan} from './Style';

class EditFolio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            loggIn: false,
            msg: '',
            email: '',
            password: '',
        };
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

        }
    }
}
export default EditFolio;
