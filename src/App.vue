<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>





<template>

  <div class="wrapper">

    <header>
      <router-link to="/"><img class="logo" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo"></router-link>
      <div class="page">
        <router-link to="/about">關於我們</router-link>
        <router-link to="PreOrder">預約體驗</router-link>
        <router-link to="/ContactMail">聯絡我們</router-link>
        <router-link to="/News">最新消息</router-link>
      </div>

    </header>
  </div>

  <RouterView />
</template>


<style lang="scss" scoped>
@import "../src/assets/main.scss";

header {
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: end;
  padding-left: 10%;

  .logo {
    height: 150px;

  }

  .page {
    width: 70%;
    margin-bottom: 25px;
    padding-left: 10%;
  }

  a {
    font-weight: 500;
    color: brown;
    padding-left: 10px;
    font-size: 25px;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 16px;
  }
}
</style>