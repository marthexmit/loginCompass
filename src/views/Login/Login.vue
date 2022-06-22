<template>
  <div>
    <section>
      <h1>Componente Title</h1>
      <p>text</p>
      <h2>Componente Title</h2>
      <p>Inputs</p>
    </section>
    <section>
      <div>
      <img :src="require('@/assets/logo.png')" />
      </div>
      <div>
      <img :src="require('@/assets/banner.png')" />
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "loginPage",
}
</script>

<style>
</style>