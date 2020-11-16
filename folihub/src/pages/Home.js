import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Light from "../img/folihub_light.png";
import { FadeDiv, colorPlan, HomePage, IntroImg, HomeRedirect, FirstIntro, IconComponent, Poster, Poster1, Poster2, Poster3, SecondIntro, AboutProduct, HomepageLogo, HomeTitle, Slogan, HomeComponents, LoginRedirect, SignUpRedirect, SignupText, LoginText, SignUpGoogleRedirect, GoogleIcon, GoogleLink, AboutProductBlock1, AboutProductBlock2, AboutProductImg, AboutProductText  } from "../components/Style";
import Google_Icon from "../img/google-icon.png";
import Lock from "../img/lock.jpg";
import flexible from "../img/flexible.jpg";
import inspiring from "../img/inspiring.jpg";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loggedIn : false,
            redirect: false,
            toPath: "",
        };
        this.redirectTo = this.redirectTo.bind(this);
    }

    redirectTo(path) {
        this.setState({
            redirect: true,
            toPath: path,
        })
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
            if (this.state.redirect) {
                return (
                    <Redirect to = {`/${this.state.toPath}`} />
                )
            }
            return (
                <HomePage>
                    <IntroImg>
                        <FirstIntro>
                            <FadeDiv>
                                <IconComponent>
                                    <HomeComponents>
                                        <HomepageLogo src={Logo_Light} />
                                        <HomeTitle>Folihub</HomeTitle>
                                    </HomeComponents>
                                    <Slogan>— Create your e-portfolio at any time, share with everyone</Slogan>
                                    <HomeRedirect>
                                        <SignUpRedirect onClick = {() => this.redirectTo("signup")}>
                                            <SignupText>Sign Up</SignupText>
                                        </SignUpRedirect>
                                        <LoginRedirect onClick = {() => this.redirectTo("Login")}>
                                            <LoginText>Login</LoginText>
                                        </LoginRedirect>
                                    </HomeRedirect>
                                    <SignUpGoogleRedirect>
                                        or sign up with&nbsp; 
                                        <GoogleIcon src={Google_Icon} /> &nbsp;
                                        <GoogleLink onClick = {() => this.redirectTo("Login")}>Google</GoogleLink>
                                    </SignUpGoogleRedirect>
                                </IconComponent>
                            </FadeDiv>
                            <Poster>
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
                        <hr/>
                        <AboutProductBlock1>
                            <AboutProductImg src={Lock} />
                            <AboutProductText>
                                <h3>Secure</h3>
                                Your E-portfolios will be encrypted and stored on the cloud, only authorized users can access your data. Folihub acts as a reliable backup tool that digitalizes traditional portfolios, so you do not need to worry about any physical damage and careless misconduct. All e-portfolios will be access controlled, your data security is always our prioritized concern. 
                            </AboutProductText>
                        </AboutProductBlock1>
                        <AboutProductBlock2>
                            <AboutProductText>
                                <h3>Flexible</h3>
                                By using Folihub, your work can be accessed at any time, anywhere. We provide several options for you to present your e-portfolio. You can either download them and share the local files, or generate a web page with real-book flipping page style and share the link. Feel free to choose any method you preferred to share and access!
                            </AboutProductText>
                            <AboutProductImg src={flexible} />
                        </AboutProductBlock2>
                        <AboutProductBlock1>
                            <AboutProductImg src={inspiring} />
                            <AboutProductText>
                                <h3>Inspiring</h3>
                                Couldn’t think of any idea to write your e-portfolio? Folihub provides several fantastic portfolio templates for you to start. Both portrait and landscape are available. Just fill in with texts and photos you like to create a nice and customized e-portfolio.
                            </AboutProductText>
                        </AboutProductBlock1>
                    </AboutProduct>
                </HomePage>
            )
        }
    }
}
export default Home;