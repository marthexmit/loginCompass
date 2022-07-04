<template>
    <div class="timer-container">
        <TextComponent className="mediumLowSize right" text="Application refresh in" />
        <div class="time">
            <TextComponent :text="time" className="regularSize" />
            <TextComponent text="seconds" className="lowSize darkColor" />
        </div>
    </div>
</template>

<script>
import TextComponent from '../TextComponent/TextComponent.vue';
export default {
    name: "TimerComponent",
    data() {
        return {
            time: this.$store.state.timer,
        };
    },
    mounted() {
        this.timer();
    },
    methods: {
        updateTimer() {
            if (this.$store.state.timer) {
                this.$store.state.timer -= 1;
                this.time = this.$store.state.timer;
            }
        },
        timer() {
            this.time = this.$store.state.timer;
            setInterval(this.updateTimer, 1000);
        }
    },
    components: { TextComponent }
}
</script>

<style>

</style>