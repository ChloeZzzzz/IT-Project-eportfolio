const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";

export async function getEportfolios() {
    const endpoint = BASE_FOLIO + '/getEportfolios';
    await axios.get(endpoint, {crossdomain: true}).then((response) => {
        return response.data;
    });
}