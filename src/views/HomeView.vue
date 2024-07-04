<script>
import swiperComponent from '@/component/swiperComponent.vue';
import cardComponent from '@/component/CardComponent.vue';
import mailComponent from '@/component/MailComponent.vue';
import mapComponent from '@/component/MapComponent.vue';

export default {
  name: "homeView",
  components: {
    swiperComponent,
    cardComponent,
    mailComponent,
    mapComponent,

  },
  setup() {
  },
};


// 

</script>


<template>
  <!-- 招牌畫面 -->
  <div class="banner">
    <img class="logo" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo">
  </div>
  <div class="About">

    <div class="landscape">
      <img src="https://yatayork.imgix.net/countryside_SubcontentPhoto.png" alt="landscape">
      <span class="motto">
        <p>將陶藝帶入自然，與自然相伴</p>
        <p>創造出地區獨一無二的鄉土陶藝</p>
        <p>集合了一群愛陶之人</p>
      </span>
    </div>


    <div class="create">
      <img src="https://yatayork.imgix.net/_pottery.jpeg" alt="create">

      <p class="intro">
        亞塔是一位專業陶藝老師<br>
        於民國99年創立「亞塔悠克」燒窯社團。<br>
        以超過20年的陶藝創作和教學經驗回歸鄉土<br>
      </p>

      <RouterLink to="/about">
        <span>關於我們</span><br>
        <span>AboutUs</span>
      </RouterLink>



    </div>


    <!-- <img src="https://yatayork.imgix.net/goto/right-arrow.png?w=64&h=32" alt=""> -->
  </div>



  <div class="preOrder">
    <swiperComponent></swiperComponent>
  </div>

  <div class="news">
    <h3>最新消息</h3>
    <cardComponent></cardComponent>
  </div>
  <div class="contact">
    <!-- map元件 左 -->
    <!-- email元件 右-->
    <h3>聯絡我們</h3>
    <div class="info">
      <mapComponent></mapComponent>
      <mailComponent></mailComponent>
    </div>


  </div>

</template>

<style lang="scss" scoped>
@import "../src/assets/main.scss";

// @mixin fontConfig (字體大小,顏色,字體粗細,行高,字間距)
// ($fontSize, $color, $fontWeight: 400, $lineHeight, $letterSpacing)

// @mixin backgroundImg-full($imgUrl)
// 大區塊背景 width100% 高500px(
.banner {
  min-width: 763px;
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
  display: flex;
  animation: appear linear forwards;
  animation-timeline: view();
  animation-range: entry 200px;
  margin-bottom: 64px;

  .intro {


    @include fontConfig(16px, #200b5b, 400, 2.2em, 0.3em)
  }

  //風景圖位置

  .landscape {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-width: 50%;

    img {
      width: 550px;
      margin-right: 5%;
    }

    .motto {
      writing-mode: vertical-lr;
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
  }

  //格言


  .create {

    min-width: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;


    img {
      width: 80%;
    }

    .intro {

      padding-top: 10px;

    }


    a {
      border: 1px solid #d3b073;
      position: relative;
      padding: 1em 2em 1em 2em;
      @include pageButtonDesign(white, "");


      &:after {
        @include absolute("", 1em, "", 10%);

        content: url("https://yatayork.imgix.net/goto/right-arrow.png?w=32&h=32");


      }

    }

  }

}




.preOrder {
  @include backgroundImg-full("https://yatayork.imgix.net/preorder_BackgroundImg.png");
  backdrop-filter: blur(33px);
  margin-bottom: 48px;
  position: relative;




}

.news {

  display: block;
  justify-content: center;
  width: 60%;
  margin: 0% 20% 1% 20%;

  h3 {
    display: flex;
    justify-content: center;
    min-width: 60%;
    @include fontConfig(32px, "", 400, "", 0.2em)
  }
}

.contact {

  margin-bottom: 64px;

  h3 {
    @include fontConfig(32px, "", 400, "", 0.2em);
    text-align: center;
  }

  .info {
    min-width: 60%;
    display: flex;
    margin: 0% 20% 0% 20%;




  }



}


@media (max-width: 1600px) {
  .About {

    margin-top: 32px;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    .landscape {
      margin-top: 0%;


      .motto {
        p {
          width: 20%;


          &:nth-child(1) {
            animation-delay: 1.4s;

          }

          &:nth-child(2) {
            animation-delay: 1.3s;
          }

          &:nth-child(3) {
            animation-delay: 1.2s;
          }
        }

      }
    }

    .create {
      width: 100%;
      flex-direction: column;
      align-items: center;

      position: relative;

      .intro {
        text-align: center;

        width: 70%;
      }


      img {
        width: 700px;
      }


    }

  }



}

@media(max-width:1200px) {
  .info {
    flex-direction: column;
    align-items: center;
  }
}
</style>../component/swiperComponent.vue@/component/MailComponent.vue