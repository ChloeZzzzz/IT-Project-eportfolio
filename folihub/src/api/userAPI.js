const BASE_USER = "https://folihub-api.herokuapp.com/user";
const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";
const aaaa = "https://folihub-api.herokuapp.com/eportfolio";


const axios = require('axios');

export async function postUserSignup(data) {
    const endpoint = BASE_USER + '/signup';
    console.log("post user sign up");
    await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then(response => {
        console.log("API: "+response);
        return response.json();
    });
    

}

export async function postUserLogin(data) {
    const endpoint = BASE_USER + '/login';
    
    console.log("post user log in");
    await axios.post(endpoint, data, {withCredentials:true, crossdomain:true}).then((response) => {
        console.log("API: "+response);
        return response.data;
    });
    /*
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
    */
}

export async function getEportfolios(data) {
    const endpoint = BASE_FOLIO + '/getEportfolios';
    await axios.get(endpoint, data, {crossdomain: true}).then((response) => {
        return response.data;
    });
}

export async function wwww() {
    const endpoint = aaaa + '/hackep';
    
    console.log("get user log in");
    await axios.get(endpoint, {crossdomain:true}).then((response) => {
        console.log(response);
        console.log(response.data[0])
        return response.data[0];
    });

}