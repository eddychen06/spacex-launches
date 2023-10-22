<template>
    <div v-if="flightData">
        <div class="flight-card">
            <div class="header">
                <img src="data:image/png;base64,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" alt="">
                <div class="flight-name">
                    <p>{{ flightData.airline.name }} Flight {{ flightData.flight.number }}</p>
                    <h3>{{ getCityName(flightData.departure.icao)}} to {{ getCityName(flightData.arrival.icao)}}</h3>
                </div>
            </div>
            <div class="flight-alert">
                <p>Gate Departure in <span style="color: white">2h 40m</span></p>
            </div>
            <div class="flight-departure">
                <img src="../assets/arrow.png">
                <div class="departure-content">
                    <div class="departure-main">
                        <h2>{{ flightData.departure.iata }}</h2>
                        <h2 style="color: #3E8664">{{ flightData.departure.scheduled.substring(11, 16) }} AM</h2>
                    </div>
                    <div class="departure-details">
                        <div class="airport-details">
                            <p>{{ flightData.departure.airport }}</p>
                            <p>Terminal {{ flightData.departure.terminal }} . Gate {{ flightData.departure.gate }}</p>
                        </div>
                        <div class="time-details">
                            <p style="color: #3E8664">On Time</p>
                            <p>in 1h 40m</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="flight-arrival">
                <img src="../assets/arrow.png">
                <div class="arrival-content">
                    <div class="arrival-main">
                        <h2>{{ flightData.arrival.iata }}</h2>
                        <h2 style="color: #3E8664">{{ flightData.arrival.scheduled.substring(11, 16) }} AM</h2>
                    </div>
                    <div class="arrival-details">
                        <div class="airport-details">
                            <p>{{ flightData.arrival.airport }}</p>
                            <p>Terminal {{ flightData.arrival.terminal }} . Gate {{ flightData.arrival.gate }}</p>
                        </div>
                        <div class="time-details">
                            <p style="color: #3E8664">On Time</p>
                            <p>in 1h 40m</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import airports from "../airports.json"

export default {
    name: "FlightCard",
    data () {
        aiportData: Object
        cityData: Object
    },
    props: {
        flightData: Object
    },
    methods: {
        getCityName(icao) {
            return airports.find(x => x.icao === icao).city
        }
    }
}
</script>
