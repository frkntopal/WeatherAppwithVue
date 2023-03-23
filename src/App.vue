<template>
  <div class="app">    
    <SearchBar />
    <WeatherData />
  </div>
</template>

<script>

import SearchBar from './components/searchbar/SearchBar'
import WeatherData from './components/weather/WeatherData'

export default {
  name: 'App',
  components: {
    SearchBar,
    WeatherData
  }
}
</script>