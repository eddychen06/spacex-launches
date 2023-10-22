<template>
  <div>
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
    };
  },
  methods: {
    updateFlightNumber(newFlightNumber) {
      this.flightNumber = newFlightNumber;
    },
    fetchFlightData() {
      const params = {
        access_key: "e0667419decf9a290c2aa6199f05701f",
        flight_icao: this.flightNumber,
      };

      axios
        .get("http://api.aviationstack.com/v1/flights", {params})
        .then((response) => {
          this.flightData = response.data.data[0]
          this.flightDataFetched = true
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
