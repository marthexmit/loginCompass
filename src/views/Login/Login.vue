<template>
  <div class="divLogin">
    <section class="sectionForm">
      <form id="formLogin">
        <div class="describeComponent">
          <h1>Componente Title</h1>
          <p>text</p>
        </div>
        <div class="registerComponent">
        <h2>Componente Title</h2>
        <inputLogin />
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
import InputLogin from '@/components/Input/inputLogin.vue';
export default {
    name: "loginPage",
    components: { InputLogin }
}
</script>

<style lang="sass" scoped>
@import '@/views/Login/Login.scss'
</style>