import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Light from "../img/folihub_light.png";
import { colorPlan, HomePage, IntroImg, HomeRedirect, FirstIntro, IconComponent, Poster, Poster1, Poster2, Poster3, SecondIntro, AboutProduct, AboutUs, HomepageLogo, HomeTitle, Slogan  } from "./Style";

class Home extends React.Component {
    constructor(props) {
        super(props);
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
                <HomePage>
                    <IntroImg>
                        <FirstIntro>
                            <IconComponent>
                                <HomepageLogo src={Logo_Light} />
                                <HomeTitle>Folihub</HomeTitle>
                                <Slogan>this is the home page</Slogan>
                                <HomeRedirect>
                                    <a href = "./signup">sign up</a>
                                    <br />
                                    <a href = "./login">log in</a>
                                </HomeRedirect>
                            </IconComponent>
                            <Poster>
                                    abcde
                            </Poster>
                        </FirstIntro>
                        <SecondIntro>
                            <Poster1>
                            </Poster1>
                            <Poster2>
                            </Poster2>
                            <Poster3>
                            </Poster3>
                        </SecondIntro>
                    </IntroImg>
                    <AboutProduct>
                        This is about product
                    </AboutProduct>
                    <AboutUs>
                        This is about us
                    </AboutUs>
                </HomePage>
            )
        }
    }
}
export default Home;