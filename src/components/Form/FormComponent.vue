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
      <InputComponent classInput="input inputName" type="text" placeholder="Usuário" />
      <InputComponent classInput="input inputPassword" type="password" placeholder="Senha" />
        <TextComponent className="regularSize error center" text="Ops, usuário ou senha inválidos. Tente novamente!"/>
        <ButtonComponent text="Continuar"  classButton="Button ButtonForm"/>
    </div>
  </form>
</template>

<script>
import InputComponent from "../inputComponent/InputComponent.vue";
import TitleLogin from "@/components/Title/titleLogin.vue"
import TextComponent from "@/components/TextComponent/TextComponent.vue";
import ButtonComponent from '../Button/ButtonComponent.vue';
export default {
  name: "FormComponent",
  components: {
    TextComponent,
    TitleLogin,
    ButtonComponent,
    InputComponent,
  }
};
</script>

<style lang="sass" scoped>
@import '@/components/Form/FormComponent.scss'
</style>
