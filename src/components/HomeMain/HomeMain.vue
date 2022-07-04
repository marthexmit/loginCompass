<template>
  <div class="separation">
    
  <img src="@/assets/ballCompass.png" alt="ballCompass" class="ballImage">

  <section class="secTexts">
    <div class="texts">
    <TextComponent text="Our mission is" class="textEN first"/>
    <TextComponent text="Nossa missão é" class="textPT"/>
    </div>
    <div class="texts">
    <TextComponent text="to transform the world" class="textEN"/>
    <TextComponent text="transformar o mundo" class="textPT"/>
    </div>
    <div class="texts">
    <TextComponent text="building digital experiences" class="textEN"/>
    <TextComponent text="construindo experiências digitais" class="textPT"/>
    </div>
    <div class="texts">
    <TextComponent text="that enable our client's growth" class="textEN"/>
    <TextComponent text="que permitam o crescimento dos nossos clientes" class="textPT"/>
    </div>
  </section>
  </div>
</template>

<script>
import TextComponent from '../TextComponent/TextComponent.vue';
export default {
    name: "HomeMain",
    components: { TextComponent }
}
</script>

<style lang="scss" scoped>
@import "./HomeMain.scss";
</style>