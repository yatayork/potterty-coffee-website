<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
  <!-- 招牌畫面 -->
  <div class="banner">
    <img class="logo" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo">
  </div>
  <div class="About">
    <img class="create" src="https://yatayork.imgix.net/_pottery.jpeg" alt="create">
    <span class="intro">
      亞塔是一位專業陶藝老師<br>
      於民國99年創立「亞塔悠克」燒窯社團。<br>
      以超過20年的陶藝創作和教學經驗回歸鄉土<br>
    </span>

    <span class="motto">

      <p>將陶藝帶入自然，與自然相伴</p>
      <p>創造出地區獨一無二的鄉土陶藝</p>
      <p>集合了一群愛陶之人</p>
    </span>

    <img class="landscape" src="https://yatayork.imgix.net/countryside_SubcontentPhoto.png" alt="landscape">


    <router-link to="/about" class="AboutUsButton">
      <div>
        <p>關於我們</p>
        <p>About Us</p>
      </div>
      <img src="https://yatayork.imgix.net/goto/right-arrow.png?w=64&h=32" alt="">
    </router-link>
  </div>

  <div class="preOrder">

  </div>




</template>

<style lang="scss" scoped>
@import "../src/assets/main.scss";


// @mixin fontConfig (字體大小,顏色,字體粗細,行高,字間距)
// ($fontSize, $color, $fontWeight: 400, $lineHeight, $letterSpacing)

// @mixin backgroundImg-full($imgUrl)
// 大區塊背景 width100% 高500px(


.banner {
  @include backgroundImg-full("https://yatayork.imgix.net/ComfyUI_banner_ (1).png");
  animation: banner-image-animation linear;
  animation-timeline: view();
  animation-range: exit -200px;

  margin-bottom: 48px;

  .logo {
    width: 150px;
    height: 150px;
  }
}

.About {


  width: 100%;
  height: 700px;
  position: relative;
  animation: appear linear forwards;
  animation-timeline: view();
  animation-range: entry 200px;

  margin-bottom: 64px;

  .intro {

    @include absolute("", 5%, "", 29%);
    @include fontConfig(16px, #200b5b, 400, 2.2em, 0.3em)
  }

  //風景圖位置
  .landscape {
    width: 600px;
    @include absolute(10%, "", 3%, "");
  }

  //格言
  .motto {
    writing-mode: vertical-lr;
    z-index: 1;
    @include absolute("", "", 37%, "");
    @include fontConfig(22px, #782806, 700, "", 0.6em);



    p {

      text-decoration-line: underline;
      text-underline-offset: 3px;

      animation: appear-motto linear;
      animation-timeline: view();
      animation-range: cover 10px;


      &:nth-child(1) {

        margin-top: 175px;
        animation-delay: 1.4s;

      }

      &:nth-child(2) {
        margin: 100px 50px 0px 50px;
        animation-delay: 1.3s;
      }

      &:nth-child(3) {
        margin-top: 50px;
        animation-delay: 1.2s;
      }
    }


  }

  .create {
    width: 800px;
    position: absolute;
    right: 10%;
  }

  .AboutUsButton {

    @include absolute("", 5.5%, "", 12%);
    border: 1px solid #e5cda1;
    padding: 20px;
    width: 12.5%;


    p {
      padding: 2px;
      width: 100%;
      color: #d3b073;
      display: flex;
      justify-content: baseline;

      &:nth-child(1) {
        font-size: 16px;
      }

      &:nth-child(2) {
        font-size: 12px;
      }
    }

    img {
      @include absolute("", 30%, "", 10%)
    }


    &:hover {
      background-color: #d3b073;

      p {
        color: white;
      }
    }
  }

}

.preOrder {
  @include backgroundImg-full("https://yatayork.imgix.net/preorder_BackgroundImg.png")
}
</style>