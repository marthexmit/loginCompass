<template>
  <div class="divLogin">
    <section class="sectionForm">
      <form id="formLogin">
        <div class="describeComponent">
          <titleLogin classTitle="Olá,"/>
          <TextComponent className="regularSize subHello left" text="Para continuar navegando de forma segura, efetue o login na rede." />
        </div>
        <div class="registerComponent">
          <titleLogin classTitle="Login" class="secondary"/>
          <inputLogin />
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
import titleLogin from "@/components/Title/titleLogin.vue"
import InputLogin from '@/components/Input/inputLogin.vue';
import TextComponent from '@/components/TextComponent/TextComponent.vue';
export default {
    name: "loginPage",
    components: {
      TextComponent,
      InputLogin,
      titleLogin,
    }
}
</script>
<style lang="sass" scoped>
  @import '@/views/Login/Login.scss'
</style>