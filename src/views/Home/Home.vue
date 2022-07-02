<template>
<div>
  <header>
    IMAGEM
    RELOGIO
    <WeatherComponent />
  </header>
  <main>BODY IMAGEM TEXTOS</main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import WeatherComponent from '@/components/WeatherComponent/WeatherComponent.vue'
export default {
  name: "homePage",
  components: { WeatherComponent }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
