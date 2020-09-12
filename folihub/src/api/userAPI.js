const BASE_URL = "https://folihub-api.herokuapp.com/user";

const axios = require('axios');

export async function postUserSignup(data) {
    const endpoint = BASE_URL + '/signup';
    console.log("post user sign up");
    await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then(response => {
        console.log("API: "+response);
        return response.json();
    });
}