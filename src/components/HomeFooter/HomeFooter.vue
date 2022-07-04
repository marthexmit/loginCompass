<template>
    <div class="separation">
        <div class="textFirst">
            <TextComponent text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
        </div>
        <span id="bar"></span>
        <TimerComponent />
        
        <div class="buttons">
            <ButtonComponent class="buttonContinue" :action="restartTimer" text="Continuar navegando" />
            <ButtonComponent />
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
            this.$store.state.timer = 600;
        },
    },
}
</script>

<style lang="scss" scoped>
@import './HomeFooter.scss';
</style>