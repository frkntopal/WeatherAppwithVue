<template>
  <div >
    {{ weather.weather[0].main }}
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, watchEffect } from 'vue'

const weatherStyles = {
  'Sunny': {
    background: 'url("https://i.pinimg.com/originals/d5/e2/14/d5e2148a83dd91f30aff3e24364d79c6.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'Rain': {
    background: 'url("https://cdn.pixabay.com/animation/2023/02/25/01/14/01-14-55-999_512.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'Clouds': {
    background: 'url("https://i.pinimg.com/originals/aa/96/97/aa9697a3f7a61389675b8dc109518753.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'Clear': {
    background: 'url("https://cdn.pixabay.com/animation/2022/10/27/19/36/19-36-05-330_512.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'Mist': {
    background: 'url("https://thumbs.gfycat.com/DeliciousUnfortunateCockroach-size_restricted.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'Snow': {
    background: 'url("https://i.pinimg.com/originals/18/79/5b/18795b33a753070366251be58b2bc29a.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  },
  'default': {
    background: 'url("https://www.corluhaber.com.tr/images/haberler/2017/09/tekirdag-icin-5-gunluk-hava-tahmini.gif")',
    cover: "cover",
    backgroundPosition : "center center"
  }
}

export default {
  name: 'WeatherStyles',
  setup() {
    const store = useStore()
    const weather = computed(() => store.state.weather)

    const weatherStyle = computed(() => {
      const desc = weather.value.weather[0].main
      return weatherStyles[desc] || weatherStyles['default']
    })

    watchEffect(() => {
      document.body.style.backgroundImage = weatherStyle.value.background
      document.body.style.backgroundSize = weatherStyle.value.cover
      document.body.style.backgroundPosition = weatherStyle.value.backgroundPosition
    })

    return {
      weather,
      weatherStyle
    }
  }
}
</script>
