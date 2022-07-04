<template>
  <div class="divLogin">
    <section class="sectionForm">
      <FormComponent />
    </section>
    <section class="sectionImg hide">
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
import FormComponent from "@/components/Form/FormComponent.vue"
export default {
    name: "loginPage",
    components: {
      FormComponent
    }
}
</script>
<style lang="scss" scoped>
  @import './Login.scss';
</style>