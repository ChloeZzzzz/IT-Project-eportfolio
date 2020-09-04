import React from 'react'
class Home extends React.Component{
    render(){
        return (
            <div>
                <p>this is the home page</p>
                <a href = "./signup">sign up</a>
                <br />
                <a href = "./login">log in</a>
            </div>
        )
    }
}
export default Home;