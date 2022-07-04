<template>
  <button :class="classButton" @click="action">{{ text }}</button>
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
        action: {
            type: Function,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './ButtonComponent.scss';
</style>