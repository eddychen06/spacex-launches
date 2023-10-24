<template>
    <div v-if="flightData">
      <h2>{{ errorData.message }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        errorData: Object
    }
  };
  </script>