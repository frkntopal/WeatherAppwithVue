<template>
  <div class="app">    
    <WeatherData />
    <ForecastData/>
  </div>
</template>

<script>


import ForecastData from './components/forecast/ForecastData.vue';
import WeatherData from './components/weather/WeatherData'

export default {
  name: 'App',
  components: {
    WeatherData,
    ForecastData
}
}
</script>
