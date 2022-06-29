<template>
  <div id="titles">
      <h1 class="classTitle1" v-if="type === 'h1'"> {{ text }}</h1>
      <h2 class="classTitle2" v-else-if="type === 'h2'"> {{ text }} </h2>
      <h3 class="classTitle3" v-else-if="type === 'h3'"> {{ text }} </h3>
      <h4 class="classTitle4" v-else-if="type === 'h4'"> {{ text }} </h4>
      <h5 class="classTitle5" v-else-if="type === 'h5'"> {{ text }} </h5>
      <h6 class="classTitle6" v-else-if="type === 'h6'"> {{ text }} </h6>
  </div>
</template>

<script>
export default {
    name: 'TitleLogin',
    props:{
        type: {
            type: String,
            require: true,
        },
        nameClass: {
            type: String,
        },
        text:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="sass" scoped>
  @import '@/components/Title/TitleLogin.scss'
</style>