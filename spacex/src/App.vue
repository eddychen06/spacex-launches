<template>
  <div>
    <h1>Flight Tracker</h1>
    <SearchBar @flight-number-updated="updateFlightNumber" @flight-search="fetchFlightData" />
    <FlightCard :flightData="flightData" v-if="flightDataFetched" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import FlightCard from "./components/FlightCard.vue";

export default {
  components: {
    FlightCard,
    SearchBar,
  },
  data() {
    return {
      flightNumber: "",
      flightData: null,
      flightDataFetched: false,
      errorData: null,
      isError: false
    };
  },
  methods: {
    updateFlightNumber(newFlightNumber) {
      this.flightNumber = newFlightNumber;
    },
    fetchFlightData() {
      const params = {
        access_key: "4b5c7a68cb64715033b0651d402d848b",
        flight_icao: this.flightNumber,
      };

      axios
        .get("http://api.aviationstack.com/v1/flights", {params}, {maxRedirects: 0})
        .then((response) => {
          this.flightData = response.data.data[0]
          this.flightDataFetched = true
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>
