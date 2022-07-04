<template>
<div>
  <HeaderComponent />
  <main>BODY IMAGEM TEXTOS</main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
export default {
  name: "homePage",
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
