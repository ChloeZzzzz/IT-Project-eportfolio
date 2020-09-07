import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Light from "../img/folihub_light.png";
import { colorPlan, HomePage, IntroImg, HomeRedirect, FirstIntro, IconComponent, Poster, Poster1, Poster2, Poster3, SecondIntro, AboutProduct, HomepageLogo, HomeTitle, Slogan, HomeComponents, LoginRedirect, SignUpRedirect, SignupText, LoginText, SignUpGoogleRedirect, GoogleIcon, GoogleLink  } from "./Style";
import Google_Icon from "../img/google-icon.png";

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
                                <HomeComponents>
                                    <HomepageLogo src={Logo_Light} />
                                    <HomeTitle>Folihub</HomeTitle>
                                </HomeComponents>
                                <Slogan>— Create your e-portfolio at any time, share with everyone</Slogan>
                                <HomeRedirect>
                                    <SignUpRedirect href='signup'>
                                        <SignupText>Sign Up</SignupText>
                                    </SignUpRedirect>
                                    <LoginRedirect href="/login">
                                        <LoginText>Login</LoginText>
                                    </LoginRedirect>
                                </HomeRedirect>
                                <SignUpGoogleRedirect>
                                    or sign up with&nbsp; 
                                    <GoogleIcon src={Google_Icon} /> &nbsp;
                                    <GoogleLink href="/">Google</GoogleLink>
                                </SignUpGoogleRedirect>
                            </IconComponent>
                            <Poster>
                                    this is poster
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
                        <h1>About Our Product</h1>
                    </AboutProduct>
                </HomePage>
            )
        }
    }
}
export default Home;