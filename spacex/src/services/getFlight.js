const axios = require('axios');
const params = {
  access_key: 'cced1f0882f1931898b20fd0a466a3dd'
}

export const getFlights = async () => {
    axios.get('https://api.aviationstack.com/v1/flights', {params})
    .then(response => {
      const apiResponse = response.data;
      if (Array.isArray(apiResponse['results'])) {
          apiResponse['results'].forEach(flight => {
              if (!flight['live']['is_ground']) {
                  console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                      `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                      `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
              }
          });
      }
    }).catch(error => {
      console.log(error);
    });
}
