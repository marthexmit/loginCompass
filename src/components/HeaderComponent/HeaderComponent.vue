<template>
    <header class="header">
        <div class="logo-container">
            <img :src="require('../../assets/logo-black.png')" alt="" class="logo-black" />
        </div>
        <div class="clock-container invisible">
            <ClockComponent />
        </div>
        <div class="weather-container">
            <WeatherComponent />
        </div>
    </header>
</template>

<script>
import ClockComponent from '../ClockComponent/ClockComponent.vue';
import WeatherComponent from '../WeatherComponent/WeatherComponent.vue';
export default {
    name: "HeaderComponent",
    components: {
        ClockComponent,
        WeatherComponent,
    }
}
</script>

<style lang="scss" scoped>
@import './HeaderComponent.scss';
</style>