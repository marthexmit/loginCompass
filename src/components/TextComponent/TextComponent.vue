<template>
  <p :class="className">{{ text }}</p>
</template>

<script>
export default {
    name: "TextComponent",
    props: {
        text: {
            type: String,
            default: ""
        },
        className: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/TextComponent/TextComponent.scss';
</style>
