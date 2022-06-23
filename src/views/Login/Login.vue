<template>
  <div class="divLogin">
    <section class="sectionForm">
      <form id="formLogin">
        <div class="describeComponent">
          <h1>Componente Title</h1>
          <p>text</p>
        </div>
        <div class="registerComponent">
        <h1>Componente Title</h1>
        <p>Inputs</p>
        </div>
      </form>
    </section>
    <section class="sectionImg">
      <div class="logoContainer">
        <img class="imgLogo" src="@/assets/logo.png">
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "loginPage",
}
</script>

<style lang="sass" scoped>
@import '@/views/Login/Login.scss'
</style>