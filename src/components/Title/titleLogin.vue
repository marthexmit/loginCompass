<template>
  <h1 class="classTitle">{{ classTitle }}</h1>
</template>

<script>
export default {
    name: "titleLogin",
    props: {
        classTitle: {
            type: String
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/components/Title/titleLogin.scss'
</style>