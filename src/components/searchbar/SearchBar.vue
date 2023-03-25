<template>
  <div class="app">
    <form @submit.prevent="searchWeather">
      <input class="form-container" type="search" v-model="city" placeholder="Enter the city" />
    </form>
    <world-image v-if="showWorldImage" class="world-image" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import './SearchBar.styles.scss'
import WorldImage from '../worldimage/WorldImage.vue'

export default {
  components: { WorldImage },
  name: 'WeatherForm',
  setup() {
    const store = useStore()

    const city = computed({
      get() {
        return store.state.city
      },
      set(value) {
        store.commit('setCity', value)
      },
    })

    const showWorldImage = ref(true)

    const searchWeather = () => {
      store.dispatch('getWeather')
      store.dispatch('getForecast')
      showWorldImage.value = false
    }

    return {
      city,
      searchWeather,
      showWorldImage,
    }
  },
}
</script>
