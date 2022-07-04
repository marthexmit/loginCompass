<template>
  <div class="mainError">
    <div class="error">
      <TitleLogin class="titleError" text=Error type="h1" />
      <img src="@/assets/Error401.png" alt="error 401" class="error401">
      <TextComponent class="unauthorized" text="Unauthorized" />
      <TextComponent class="time" id="textRedirect" :text="'Redirecting in ' + time + ' seconds'"></TextComponent>
    </div>
  </div>
</template>

<script>
import TitleLogin from "@/components/Title/TitleLogin.vue";
import TextComponent from "../TextComponent/TextComponent.vue";

export default {
  name: "errorPage401",
  components: { TitleLogin, TextComponent },
  data() {
    return {
      time: 6
    }
  },
  mounted() {
    setTimeout(function () {
      let a = document.getElementById("textRedirect");
      a.style = "display:block"
    }, 1000);
    setInterval(this.returnPage, 1000)
  },
  methods: {
    returnPage() {
      this.time--;
      if (this.time == 0) {
        this.$router.push("/")
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/components/Error 401/Error401.scss'
</style>