<template>
    <h1 class="header">Hava Durumu Uygulaması</h1>
    <form @submit.prevent="searchWeather" class="form-container">
      <input type="search" v-model="city" placeholder="Şehir Adı Girin" />
      
    </form>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import './SearchBar.styles.scss'
  
  export default {
    name: 'WeatherForm',
    setup() {
      const store = useStore()
  
      const city = computed({
        get() {
          return store.state.city
        },
        set(value) {
          store.commit('setCity', value)
        }
      })
  
      const searchWeather = () => {
        store.dispatch('getWeather')
        store.dispatch('getForecast')
      }
  
      return {
        city,
        searchWeather
      }
    }
  }
  </script>