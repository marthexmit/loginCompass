<template>
    <div id="clock">
        <p class="clockHours">{{ hours }}</p>
        <TextComponent className="mediumLowSize center darkColor" :text="day" />
    </div>
</template>

<script>
import TextComponent from '../TextComponent/TextComponent.vue'

export default {
    name: "ClockComponent",
    data() {
        return {
            hours: "00:00",
            day: ""
        }
    },
    components: { TextComponent },
    methods: {
        updateClock() {
            let time = new Date();

            this.hours = time.toTimeString().slice(0, 5);
            this.day = time.toLocaleDateString('pt-br', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        }
    },
    mounted() {
        setInterval(this.updateClock, 1000);
    },
}
</script>

<style lang="scss" scoped>
@import './ClockComponent.scss';
</style>