import React from 'react';
import Welcome from "react-welcome-page";
import { Player } from 'video-react';

import { Component } from 'react';

import { colorPlan,Reports,Button, TutContainer} from "../components/Style";
import "video-react/dist/video-react.css";
import { TextField } from '@material-ui/core';
import Video from 'video.js';
import 'video.js/dist/video-js.css';
import tutvideo from "../video/tutVideo.mp4"


class Tut extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loading: false,
            loggedIn : false,
        }
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
                            image: require("../img/folihub_dark.png")
                        }
                    ]}
                />
            );
        } else {

            return (
                <div className="App">
                    <video controls autostart autoPlay src={tutvideo} type="video/mp4" />
                </div>

            )
        }
    }
}
export default Tut;