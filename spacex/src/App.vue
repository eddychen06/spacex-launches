<script>
import FlightCard from "./components/FlightCard.vue"
import axios from "axios"
const params = {
  access_key: 'cced1f0882f1931898b20fd0a466a3dd'
}

export default {
  name: "App",
  components: {
    FlightCard
  },
  data() {
    return {
      message: ""
    }
  },
  methods: {
    async getFlight() {
      await axios.get('https://api.aviationstack.com/v1/flights', { params })
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
  }
}

</script>

<template>
  <h1>Flight Tracker</h1>
  <form @submit.prevent="getFlight">
    <input ref="input" class="terminal-input" autofocus v-model="message"
      placeholder="Enter Flight Number (eg. AAL1004)" />
  </form>
  <FlightCard v-bind:message="message" />
</template>

