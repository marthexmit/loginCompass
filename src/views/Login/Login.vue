<template>
  <div class="divLogin">
    <section class="sectionForm">
      <form id="formLogin">
        <div class="describeComponent">
          <h1>Componente Title</h1>
          <TextComponent className="regularSize subHello left" text="Para continuar navegando de forma segura, efetue o login na rede." />
        </div>
        <div class="registerComponent">
          <h2>Componente Title</h2>
          <p>Inputs</p>
          <TextComponent className="regularSize error center" text="Ops, usuário ou senha inválidos. Tente novamente!" />
        </div>
      </form>
    </section>
    <section class="sectionImg">
      <div class="logoContainer">
        <img class="imgLogo" :src="require('@/assets/logo.png')" />
      </div>
      <div class="bannerContainer">
        <img class="imgBanner" :src="require('@/assets/banner.png')" />
      </div>
    </section>
  </div>

</template>

<script>
import TextComponent from '@/components/TextComponent/TextComponent.vue';
export default {
    name: "loginPage",
    components: {
    TextComponent,
}
}
</script>

<style lang="sass" scoped>
@import '@/views/Login/Login.scss'
</style>