<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="wrapper">

    <!-- 頁首 全頁面顯示 -->
    <header>
      <router-link to="/"><img class="Logo-small" src="https://yatayork.imgix.net/yatatorkLogo.png"
          alt="logo"></router-link>
      <div class="page">
        <router-link to="/about">關於我們</router-link>
        <router-link to="/PreOrder">預約體驗</router-link>
        <router-link to="/ContactMail">聯絡我們</router-link>
        <router-link to="/News">最新消息</router-link>
      </div>
    </header>
    <!-- 頁首 -->

    <!-- 變化範圍 -->
    <RouterView></RouterView>


    <!-- 頁尾全頁面顯示 -->
    <footer>
      <img class="Logo-big" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo">
      <div class="SocialButton">
        <a href="https://www.facebook.com/profile.php?id=100006388652311&locale=zh_TW"></a>
        <a href="https://www.instagram.com/owenhung._/"></a>
        <a href="https://www.youtube.com/channel/UCrtnc8ppyLHEv9brEwjb-Sw"></a>
        <a href="https://page.line.me/036zxtlb"></a>
      </div>
      <div class="tel">
        <p>聯絡我們:TEL:09-12345678<a href="tel:+0912345678"></a></p>
        <p>窯址:XX縣XX鎮XX里XX路X麟X段XX號<a href=""></a></p>
      </div>
      <div class="copyright">
        <p>Copyright &copy; 2024 yatayork. All rights reserved. </p>
      </div>
    </footer>
  </div>


</template>

<style lang="scss" scoped>
@import "../src/assets/main.scss";

// 頁首logo
.Logo-small {
  width: 128px;
}

// 頁尾logo
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
  width: 100%;
  background-color: #e5cda1b0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 32px 0 16px 0;
  }


  .SocialButton {
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-right: 2%;

    //照順序 fb ig yt line HEX #b57341(顏色)
    a {
      border-radius: 50%;
      padding: 5% 5% 2.5% 5%;
      transition: transform 2s ease-in-out;

      &:hover {
        background-color: white;
        animation: float 1s ease-in-out infinite;
      }

      // 滑過會浮動
      // mixin 
      @include IconUrl-button(1, "Social_Icon_brown", "facebook_brown.png", 32, 32);
      @include IconUrl-button(2, "Social_Icon_brown", "instagram_brown.png", 32, 32);
      @include IconUrl-button(3, "", "youtube.png", 32, 32);
      @include IconUrl-button(4, "Social_Icon_brown", "line_brown.png", 32, 32);

      // &:nth-child(1)::before {
      //   content: url("https://yatayork.imgix.net/Social_Icon_brown/facebook_brown.png?w=32&h=32");
      // }
      // IconUrl-button($nth-child, $UrlFolder, $PictureName, $Width, $Height)
    }
  }

  .tel {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    letter-spacing: 0.2em;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 600;

      a {
        padding-top: 6px;
        margin-left: 1%;
        border-radius: 50%;
        @include IconUrl-button(1, "Icon_brown", "arrow.png", 24, 24);



        &:hover {
          scale: 1.1;
        }



        // @include IconUrl-button(1, "Icon_brown", "viber.png", 32, 32)
      }
    }

  }

}
</style>