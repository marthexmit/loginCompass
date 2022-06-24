<template>
  <div class="divLogin">
    <section class="sectionForm">
      <form id="formLogin">
        <div class="describeComponent">
          <titleLogin classTitle="Olá,"/>
          <p>text</p>
        </div>
        <div class="registerComponent">
        <titleLogin classTitle="Login" class="secondary"/>
        <p>Inputs</p>
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

  export default {
    name: "loginPage",
    components: {
      titleLogin
    }
  }
  </script>

  <style lang="sass" scoped>
  @import '@/views/Login/Login.scss'
  </style>