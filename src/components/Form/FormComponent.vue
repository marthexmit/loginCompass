<template>
  <form id="formLogin">
    <div class="describeComponent">
      <TitleLogin text="Olá," type="h2" />
      <TextComponent
        className="regularSize subHello left"
        text="Para continuar navegando de forma segura, efetue o login na rede."
      />
    </div>
    <div class="registerComponent">
      <TitleLogin text="Login" type="h3" />
      <!-- <InputExemp type="email" placeholder="Usuário" />
      <InputExemp type="password" placeholder="Senha" /> -->
        <TextComponent className="regularSize error center" text="Ops, usuário ou senha inválidos. Tente novamente!"/>
    </div>
  </form>
</template>

<script>
// import InputExemp from "../InputExemp/InputExemp.vue";
import TitleLogin from "@/components/Title/titleLogin.vue";
import TextComponent from "@/components/TextComponent/TextComponent.vue";
export default {
  name: "FormComponent",
  components: {
    TextComponent,
    TitleLogin,
    // InputExemp,
  }
};
</script>

<style lang="sass" scoped>
@import '@/components/Form/FormComponent.scss'
</style>
