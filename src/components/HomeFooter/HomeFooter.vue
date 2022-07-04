<template>
    <div class="separation">
        <div class="">
            <TextComponent text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar." />
        </div>
        <ButtonComponent />
        <ButtonComponent />
    </div>
</template>

<script>
import TextComponent from '@/components/TextComponent/TextComponent.vue';
import ButtonComponent from '@/components/Button/ButtonComponent.vue';
export default {
    name: "HomeFooter",
    components: {
        TextComponent,
        ButtonComponent
    }
}
</script>

<style lang="scss" scoped>
@import './HomeFooter.scss';
</style>