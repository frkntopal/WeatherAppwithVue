import { createStore } from "vuex";
import axios from "axios";

const key = process.env.VUE_APP_WEATHER_API_KEY;

export default createStore({
  state: {
    city: "",
    weather: null,
    forecast: [],
  },

  mutations: {
    setCity(state, payload) {
      state.city = payload;
    },
    setWeather(state, payload) {
      state.weather = payload;
    },
    setForecast(state, payload) {
      state.forecast = payload;
    },
    setLat(state, payload) {
      state.lat = payload;
    },
    setLon(state, payload) {
      state.lon = payload;
    },
  },

  actions: {
    async getWeather({ state, commit }) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${key}&units=metric`;
        const response = await axios.get(url);
        commit("setWeather", response.data);
        commit("setLat", response.data.coord.lat);
        commit("setLon", response.data.coord.lon);
        console.log(response.data.coord.lon, response.data.coord.lat);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getForecast({ state, commit }) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${state.city}&appid=${key}&units=metric`;
        const response = await axios.get(url);

        // 4 günlük tahminleri alma
        const forecast = response.data.list.filter((item) => {
          // "12:00:00" saat dilimine sahip tahminleri al
          return item.dt_txt.endsWith("12:00:00");
        });

        commit("setForecast", forecast);
        console.log(forecast, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
