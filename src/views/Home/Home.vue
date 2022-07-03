<template>
<div>
  <header>
    IMAGEM
    <ClockComponent />
    CLIMA
  </header>
  <main>BODY IMAGEM TEXTOS</main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import ClockComponent from '@/components/ClockComponent/ClockComponent.vue';
export default {
    name: "homePage",
    components: { ClockComponent }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
