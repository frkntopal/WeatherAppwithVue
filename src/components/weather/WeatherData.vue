<template>
    <div>


      <div v-if="weather" class="weather-container">
        <div class="weather-item">
          <h2 class="weather-title">{{ weather.name }} / {{ weather.sys.country }} </h2>
          <p>{{ Math.round(weather.main.temp) }}°C</p>
          <p>{{ weather.weather[0].main }}</p>
          <p>{{ weather.weather[0].description }}</p>
          <p>{{ Math.round(weather.main.temp_min)  }} °C / {{ Math.round(weather.main.temp_max)  }} °C</p>
        </div>
      </div>
  
      <div v-if="forecast.length">
        <h2>4 Günlük Hava Tahmini</h2>
        <div v-for="(item, index) in forecast" :key="index">
          <p>{{ item.dt_txt }}</p>
          <p>{{ item.main.temp }}°C</p>
          <p>{{ item.weather[0].description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import './WeatherData.styles.scss'
  
  export default {
    name: 'WeatherInfo',
    setup() {
      const store = useStore()
  
      const weather = computed(() => store.state.weather)
      const forecast = computed(() => store.state.forecast)
  
      return {
        weather,
        forecast
      }
    }
  }
  </script>