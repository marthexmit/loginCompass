<template>
  <button :class="classButton" v-on:click="clickButton">{{ text }}</button>
</template>

<script>

export default {
    name: "ButtonComponent",
    props: {
        text: {
            type: String,
            default: ""
        },
        classButton: {
            type: String
        },

        clickButton: {
            type: String,
            default: ""
        },
    },
};
</script>

<style lang="scss" scoped>
@import './ButtonComponent.scss';
</style>