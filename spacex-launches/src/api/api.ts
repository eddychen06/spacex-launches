import axios from 'axios'

interface Response {
	text: string;
	author: string;
	category: string;
	id: number;
}
function getFirstLaunch() {
	const configFetch = {
        method: "post",
        url: "https://api.spacexdata.com/v5/launches/query",
        data: {
          query: {
            upcoming: true,
          },
          options: {
            limit: 1,
            sort: {
              flight_number: "asc",
            },
          },
        },
      };
        
    return axios(configFetch).then((res) => res.data);
}

