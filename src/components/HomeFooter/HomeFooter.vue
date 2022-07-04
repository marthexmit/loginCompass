<template>
    <div class="separation">
        <div class="textFirst">
            <TextComponent class="infoText" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
        </div>
        <div class="counterContainer">
          <TimerComponent />
        </div>
        <div class="buttons">
          <ButtonComponent classButton="Button" :clickButton= "restartTimer" text="Continue navegando" class="ButtonKeepBrowsing"/>
          <ButtonComponent classButton="Button" :clickButton="Return" text="Logout" class=" logoutAdjust ButtonLogout"/>
        </div>
    </div>
</template>

<script>
import TextComponent from '@/components/TextComponent/TextComponent.vue';
import ButtonComponent from '@/components/Button/ButtonComponent.vue';
import TimerComponent from '../TimerComponent/TimerComponent.vue';
export default {
    name: "HomeFooter",
    components: {
    TextComponent,
    ButtonComponent,
    TimerComponent
    },
    methods: {
        restartTimer() {
            this.$store.state.timer = 601;
        },
        Return(){
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss" scoped>
@import './HomeFooter.scss';
</style>