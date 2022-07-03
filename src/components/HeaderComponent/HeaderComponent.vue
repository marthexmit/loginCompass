<template>
    <header>
        <img :src="require('../../assets/logo-black.png')" alt="" class="logo-black" />
        <ClockComponent />
        <WeatherComponent />
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

<style>

</style>