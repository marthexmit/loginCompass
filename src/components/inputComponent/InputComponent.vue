<template>
  <div>
    <input :class="classInput" :type="type" :placeholder="placeholder" @input="valueInputs"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "InputComponent",
  props: {
    type: {
      type: String,
    },
    classInput: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    ...mapActions(['setValidate']),
    valueInputs(e) {
      if (this.type === "text" || this.type === "password") {
        this.setValidate(e.target.value);
        console.log(e.target.value)
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/components/inputComponent/InputComponent.scss'
</style>