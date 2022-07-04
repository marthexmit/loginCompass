<template>
  <form id="formLogin">
    <img src="@/assets/logo.png" alt="" class="logo-form invisible" >
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
        <TextComponent className="regularSize error center" id="center" text="Ops, usuário ou senha inválidos. Tente novamente!"/>
        <ButtonComponent text="Continuar" classButton="Button ButtonForm" :clickButton="Validate"/>
    </div>
  </form>
</template>

<script>
import InputComponent from "../inputComponent/InputComponent.vue";
import TitleLogin from "@/components/Title/TitleLogin.vue"
import TextComponent from "@/components/TextComponent/TextComponent.vue";
import ButtonComponent from '../Button/ButtonComponent.vue';
import { mapActions } from 'vuex';
export default {
  
  name: "FormComponent",
  
  components: {
    TextComponent,
    TitleLogin,
    ButtonComponent,
    InputComponent,
  },
  methods: {
    ...mapActions(['setName','setPassword','setButtonLogin']),
    Validate() {
       if (this.$store.state.control1 == true && this.$store.state.control2 == true){
        this.$router.push('/home')
       } else{
           document.getElementById('center').style.display = 'block';
       }
    },
  },
 
  
};

</script>

<style lang="scss" scoped>
@import '@/components/Form/FormComponent.scss';
</style>
