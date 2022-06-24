<template>
  <div id="space">
    <div class="separation">
    <input type="text" class="user" placeholder="Usuário">
    <input type="text" class="password" placeholder="Senha">
    </div>
    <div class="fakeFotter">
        <button class="btnLogin">Cadastro</button>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'inputLogin',
}
</script>

<style lang="sass" scoped>
@import '@/components/Input/inputLogin.scss'
</style>