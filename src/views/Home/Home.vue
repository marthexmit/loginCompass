<template>
<div>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <HomeMain />
  </main>
  <footer> 
    <HomeFooter/> 
  </footer>
</div>
</template>

<script>
import HomeFooter from '@/components/HomeFooter/HomeFooter.vue';
import HomeMain from '@/components/HomeMain/HomeMain.vue';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';

export default {
  name: "homePage",
  components: {
    HeaderComponent,
    HomeMain,
    HomeFooter
  }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
