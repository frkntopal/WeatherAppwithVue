<template>
  <div class="app">
    <div class="header">
      <h1>Weather Forecast</h1>
      <SearchBar/>      
    </div>
    <div v-if="weather" class="content">  
      <LocationMap v-if="weather && weather.name"/>      
      <div class="city">{{ weather.name }} / {{ weather.sys.country }} </div>          
      <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
      <background-styles class="desc"/>
      <div class="minmax" >{{ Math.round(weather.main.temp_min)  }} °C / {{ Math.round(weather.main.temp_max)  }} °C</div>
    </div>     
  </div>
</template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import './WeatherData.styles.scss'
  import SearchBar from '../searchbar/SearchBar.vue'
  import BackgroundStyles from '../background/BackgroundStyles.vue'
  import LocationMap from '../locationmap/LocationMap.vue'



  
  export default {
  components: { SearchBar, BackgroundStyles, LocationMap },
    name: 'WeatherInfo',
    
    setup() {
      const store = useStore()      
  
      const weather = computed(() => store.state.weather)
      const forecast = computed(() => store.state.forecast) 

      return {
        weather,
        forecast,        
      }
    }
    
  }
  </script>