<template>
  <div id="weather">
    <TextComponent className="mediumLowSize darkColor center" :text="[city, state].join(' - ')" />
    <div class="tempContainer">
        <img :src="require('../../assets/weatherIcons/' + icon + '.svg')" class="wicon" :alt="description + ' icon'" :title="description" />
        <p class="temp">{{ currentTemp }}°</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TextComponent from '../TextComponent/TextComponent.vue'
export default {
    name: "WeatherComponent",
    data() {
        return {
            city: "Porto Alegre",
            state: "RS",
            currentTemp: "0",
            icon: "01d",
            description: "",
            states: {
                'Acre': 'Rio Branco',
                'Alagoas': 'AL',
                'Amapá': 'AP',
                'Amazonas': 'AM',
                'Bahia': 'BA',
                'Ceará': 'CE',
                'Distrito Federal': 'DF',
                'Espírito Santo': 'ES',
                'Goiás': 'GO',
                'Maranhão': 'MA',
                'Mato Grosso': 'MT',
                'Mato Grosso do Sul': 'MS',
                'Minas Gerais': 'MG',
                'Paraíba': 'PB',
                'Pará': 'PA',
                'Paraná': 'PR',
                'Pernambuco': 'PE',
                'Piauí': 'PI',
                'Rio de Janeiro': 'RJ',
                'Rio Grande do Norte': 'RN',
                'Rio Grande do Sul': 'RS',
                'Rondônia': 'RO',
                'Roraima': 'RR',
                'Santa Catarina': 'SC',
                'São Paulo' : 'SP',
                'Sergipe': "SE",
                'Tocantins': 'TO',
            }
        }
    },
    beforeMount() {
        this.updateWeather();
    },
    mounted() {
        setInterval(this.updateWeather, 120000);
    },
    methods: {
        async updateWeather() {
            let location = await this.getLocation();

            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=${process.env.VUE_APP_OPENWEATHER_API_TOKEN}`;

            let data = {}

            await axios.get(url)
                 .then(response => {
                    data = response.data;
                 })
                 .catch(error => {
                    console.log(error);
                 });

            this.currentTemp = Math.round(data.main.temp);
            this.icon = data.weather[0].icon;
            this.description = data.weather[0].description;
            this.city = data.name;
            this.state = this.states[location.region];
        },
        async getLocation() {
            let loc = {}

            await axios.get("https://get.geojs.io/v1/ip/geo.json")
                 .then(response => {
                    loc = response.data;
                 })
                 .catch(error => {
                    console.log(error);
                 });

            return loc;
        },
    },
    components: { TextComponent },
}
</script>

<style lang="scss" scoped>
@import './WeatherComponent.scss';
</style>