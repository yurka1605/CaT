// https://api.vk.com/method/METHOD_NAME?PARAMETERS&access_token=dpH4JmiaYZEZWV2cz4ui&v=5.103
const apiKey = '67397e2a67397e2a67397e2a216748eab26673967397e2a39957909c571eb2d30540b92';
const cityesOut = [

]
getApi(`https://api.vk.com/method/database.getCities?country_id=1&need_all=0&access_token=${ apiKey }&v=5.103`);
function getApi(url) {
    const request = new Request( url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    });

    fetch(request)
        .then( response => {
            console.log(response);
            if (response.status === 200) return response.json();
            else if (response.status === 401) throw response.status;
            else throw new Error('Response status not 200.');
        })
        .catch( error => {
            console.log(error);
        });
}
