<script>
// import { RouterLink } from 'vue-router'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
};
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


    <RouterLink to="/about" class="AboutUsButton">
      <div>
        <p>關於我們</p>
        <p>About Us</p>
      </div>
      <img src="https://yatayork.imgix.net/goto/right-arrow.png?w=64&h=32" alt="">
    </RouterLink>
  </div>

  <div class="preOrder">
    <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="slide-content">
          <h3>製陶體驗</h3>
          <span>
            手指觸摸的角度，是你所思；<br>
            手掌撫出的弧度，是你所想。<br>
            與你在這短暫的時刻<br>
            沉思為杯；<br>
            包容為碗；<br>
            為你的作品附著上屬於你的思想<br>
          </span>


        </div>
        <div class="test">
          <img src="https://yatayork.imgix.net/countryside_SubcontentPhoto.png" alt="">

        </div>

      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h3>手沖咖啡體驗</h3>
          <span>
            「與蘊X咖啡共同合作，<br>
            三義在地種植的阿拉比卡種咖啡豆」<br>
            苦澀；煩惱的不如意事<br>
            香氣；不經意的小確幸<br>
            甘甜；充滿身心的美好回憶<br>
            為自己盛上一杯芳香四溢也飽含人生的咖啡<br>

          </span>
        </div>
        <div class="test">
          <img src="https://yatayork.imgix.net/countryside_SubcontentPhoto.png" alt="">
        </div>

      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h3>ㄎㄣ</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo magnam ipsum nisi in magni excepturioptio
            debitis, ad cum ex voluptatibus ea officia aliquam nesciunt eligendi illum impedit enim adipisci.</span>
        </div>
        <div class="test">
          <img src="https://yatayork.imgix.net/countryside_SubcontentPhoto.png" alt="">
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <h3>漆陶體驗</h3>
      </swiper-slide>
      <swiper-slide>
        <h3>藍染體驗</h3>
      </swiper-slide> -->
    </swiper>
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
  @include backgroundImg-full("https://yatayork.imgix.net/preorder_BackgroundImg.png");
  backdrop-filter: blur(33px);

  .swiper {
    width: 100%;
    height: 90%;
  }

  .swiper-slide {

    text-align: center;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(22px);
    /* Center slide text vertically */
    display: flex;
    justify-content: baseline;
    align-items: center;

    .slide-content {

      width: 20%;
      color: white;
      text-align: left;
      margin-left: 20%;


      h3 {

        font-size: 64px;
        margin-bottom: 20px;
      }



    }

    .test {

      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;


      img {
        border-radius: 25px;
        box-shadow: 10px 10px 5px rgb(0, 0, 0, 0.5);

      }
    }


  }


}
</style>