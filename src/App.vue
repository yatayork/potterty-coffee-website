<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="wrapper">

    <header>
      <router-link to="/"><img class="Logo-small" src="https://yatayork.imgix.net/yatatorkLogo.png"
          alt="logo"></router-link>
      <div class="page">
        <router-link to="/about">關於我們</router-link>
        <router-link to="PreOrder">預約體驗</router-link>
        <router-link to="/ContactMail">聯絡我們</router-link>
        <router-link to="/News">最新消息</router-link>
      </div>
    </header>
    <!-- 頁首 -->

    <RouterView></RouterView>

    <!-- 頁尾 -->
    <footer>
      <img class="Logo-big" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo">
      <div class="SocialButton">
        <a href="https://www.facebook.com/profile.php?id=100006388652311&locale=zh_TW"></a>
        <a href="https://www.instagram.com/owenhung._/"></a>
        <a href="https://www.youtube.com/channel/UCrtnc8ppyLHEv9brEwjb-Sw"></a>
        <a href="https://page.line.me/036zxtlb"></a>
      </div>
    </footer>
  </div>


</template>


<style lang="scss" scoped>
@import "../src/assets/main.scss";

.Logo-small {
  width: 128px;

}

.Logo-big {
  width: 256px;

}

header {

  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  .page {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5%;

    a {
      font-weight: 500;
      color: #c09562;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 25px;


      &:hover {
        scale: 1.01;
        border-bottom: 1px solid #c09562;
      }
    }
  }


}

footer {
  background-color: #e5cda1b0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 64px 0 64px 0;
  }


  .SocialButton {
    width: 20%;
    display: flex;
    justify-content: space-between;



    //照順序 fb ig yt line

    a:nth-child(1)::before {
      content: url("https://yatayork.imgix.net/yatatorkLogo.png?w=32&h=32");
    }

    a:nth-child(2)::before {
      content: url("https://yatayork.imgix.net/yatatorkLogo.png?w=32&h=32");
    }

    a:nth-child(3)::before {
      content: url("https://yatayork.imgix.net/youtube.png?w=32&h=32");
    }

    a:nth-child(4)::before {
      content: url("https://yatayork.imgix.net/yatatorkLogo.png?w=32&h=32");
    }

    a {
      border-radius: 50%;
      padding: 10px 10px 5px 10px;

      &:hover {
        background-color: white;
      }
    }
  }


}
</style>