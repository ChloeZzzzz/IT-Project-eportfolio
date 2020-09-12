const BASE_URL = "https://folihub-api.herokuapp.com/user";

const axios = require('axios');

export async function postUserSignup(data) {
    const endpoint = BASE_URL + '/signup';
    /*
    console.log("post user sign up");
    await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then(response => {
        console.log("API: "+response);
        return response.json();
    });
    */
   console.log("post user sign up:")
   const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    console.log(response);
    return response.json();
}

export async function postUserLogin(data) {
    const endpoint = BASE_URL + '/login';
    /*
    console.log("post user sign up");
    await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then(response => {
        console.log("API: "+response);
        return response.json();
    });
    */
   console.log("post user log in:")
   const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    console.log(response);
    return response.json();
}