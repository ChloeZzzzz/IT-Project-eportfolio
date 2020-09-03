import React from 'react'
class Home extends React.Component{
    render(){
        return (
            <div>
                <p>this is the home page</p>
                <a href = "./signup">sign up</a>
                <a href = "./login">login</a>
            </div>
        )
    }
}
export default Home;