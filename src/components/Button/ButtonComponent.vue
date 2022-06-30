<template>
  <button :class="classButton">{{ text }}</button>
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
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/components/Button/ButtonComponent.scss'
</style>