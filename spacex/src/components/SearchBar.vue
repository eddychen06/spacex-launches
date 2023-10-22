<template>
  <div>
    <input v-model="flightNumber" @input="onInput" @keyup.enter="searchFlight" placeholder="Enter Flight Number (eg. AAL1004)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      flightNumber: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("flight-number-updated", this.flightNumber);
    },
    searchFlight() {
      this.$emit("flight-search");
    },
  },
};
</script>