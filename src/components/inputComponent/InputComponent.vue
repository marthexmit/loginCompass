<template>
  <div>
    <input class="input inputEmail" v-if="type === 'email'" :type="type" :placeholder="placeholder"/>
    <input class="input inputPassword" v-else-if="type === 'password'" :type="type" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
    name: "InputComponent",
    props:{
        type: {
            type: String
        },
        nameClass: {
            type: String,
        },
        placeholder:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="sass" scoped>
  @import '@/components/inputComponent/InputComponent.scss'
</style>