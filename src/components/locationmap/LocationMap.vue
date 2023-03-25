<template> 
  <div class="map-container">
    <GoogleMap class="google-map" :api-key="apiKey" style="width: 100%; height: 300px" :center="{ lat: lat, lng: lng }" :zoom="9">
      <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { GoogleMap, Marker } from "vue3-google-map";
import './Locationmap.styles.scss'

export default {
  components: { GoogleMap, Marker },
  data(){
    return {   
      apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
    }    
  },
  
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.$store.commit('updateCoordinates', coordinates);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    ...mapState({
      lat: state => state.lat,
      lng: state => state.lon
    })
  }
};

</script>