<template>
     <div v-if="forecast.length" class="forecast-container">
        <h2 class="title">5-day forecast for {{ weather.name }}</h2>
        <div class="container-wrap">
          <div class="daily-forecast" v-for="(item, index) in forecast" :key="index">
            <div class="forecast-card">
              <p class="date">{{ item.dt_txt.split(" ")[0] }}</p>
              <img class="icon" :src="getWeatherIcon(item.weather[0].icon)" :alt="item.weather[0].description">
              <p class="temp">Temperature: {{ Math.round(item.main.temp) }}°C</p>
              <p class="desc">Description: {{ item.weather[0].description }}</p>
              <p class="humidity">Humidity: {{ item.main.humidity }}%</p>
              <p class="wind">Wind Speed: {{ item.wind.speed }}m/s</p>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import './ForecastData.styles.scss'

export default {
  name: 'ForecastData',
  setup() {
    const store = useStore()
    const weather = computed(() => store.state.weather)
    const forecast = computed(() => store.state.forecast)
    return { forecast,weather }
  },
  methods: {
    getWeatherIcon(iconCode) {
      return `https://openweathermap.org/img/w/${iconCode}.png`
    }
  },
}
</script>