const BASE_USER = "https://folihub-api.herokuapp.com/user";

const axios = require('axios');

export async function postUserSignup(data) {
    const endpoint = BASE_USER + '/signup';
    console.log("post user sign up");
    var res = await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then(response => {
        console.log("API: ");
        console.log(response);
        console.log(response.request.responseURL);
        console.log(response.config.data);
        console.log(response.data);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", response.data);
        if (response.request.responseURL === "https://folihub-api.herokuapp.com/user/failuresignup") {
            return false;
        } else {
            return true;
        }
    });
    return res;

}

export async function postUserLogin(data) {
    const endpoint = BASE_USER + '/login';
    
    console.log("post user log in");
    var res = await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then((response) => {
        console.log("API: ");
        console.log(response);
        console.log(response.request.responseURL);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", response.data);
        if (response.request.responseURL === "https://folihub-api.herokuapp.com/user/failurelogin") {
            return false;
        } else {
            return true;
        }
    });
    return res;
}