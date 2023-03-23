import { createStore } from "vuex";
import axios from "axios";
const key = "9e06b5a1281bc72228b7f14c9e850bb5";

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
  },
  actions: {
    async getWeather({ state, commit }) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${key}&units=metric`;
        const response = await axios.get(url);
        commit("setWeather", response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getForecast({ state, commit }) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${state.city}&appid=${key}&units=metric`;
        const response = await axios.get(url);
        commit("setForecast", response.data.list);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
