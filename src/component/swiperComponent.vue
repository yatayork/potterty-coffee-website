<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="item in orderItems" :key="item.id">
      <div class="slide-content">
        <h3>{{ item.title }}</h3>
        <span v-html="item.content"></span>
      </div>
      <div class="itemPhoto">
        <img :src="item.img" alt="">
      </div>
      <RouterLink to="/about" class="reserveButton">
        <div>
          <p>即刻預約|Reservation</p>
        </div>

      </RouterLink>
    </swiper-slide>


    <!-- <swiper-slide>
        <h3>漆陶體驗</h3>
      </swiper-slide>
      <swiper-slide>
        <h3>藍染體驗</h3>
      </swiper-slide> -->
  </swiper>
</template>

<script type="module">
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

    const orderItems = [
      {
        id: 1,
        title: "製陶體驗",
        content: `手指觸摸的角度，是你所思；<br>
          手掌撫出的弧度，是你所想。<br>
          與你在這短暫的時刻<br>
          沉思為杯；<br>
          包容為碗；<br>
          為你的作品附著上屬於你的思想<br>`,
        img: "https://yatayork.imgix.net/swiper/pottery_doll.png"
      },
      {
        id: 2,
        title: "手沖咖啡體驗",
        content: "與蘊X咖啡共同合作，<br>三義在地種植的阿拉比卡種咖啡豆<br>苦澀；煩惱的不如意事<br>香氣；不經意的小確幸<br>甘甜；充滿身心的美好回憶<br>為自己盛上一杯芳香四溢也飽含人生的咖啡<br>",
        img: "https://yatayork.imgix.net/swiper/coffee_swiper.png"
      },
    ]

    return {
      modules: [Autoplay, Navigation],
      orderItems,
    };


  },

};



</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 90%;
}

.swiper-slide {
  font-size: 18px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  /* Center slide text vertically */
  display: flex;
  justify-content: baseline;
  align-items: center;

  .slide-content {

    min-width: 30%;
    width: 30%;
    height: 100%;
    color: white;
    text-align: left;
    text-indent: -1em;
    margin-left: 20%;

    h3 {
      margin-top: 10%;
      font-size: 64px;
      margin-bottom: 20px;
    }


  }

  .itemPhoto {

    min-width: 30%;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;


    img {
      border-radius: 25px;
      box-shadow: 10px 10px 5px rgb(0, 0, 0, 0.5);

    }
  }




  .reserveButton {
    min-width: 20%;
    background-color: black;
    color: #d3b073;

    border-radius: 20px;
    position: absolute;
    bottom: 9%;
    left: 20%;
    font-size: 32px;
    z-index: 1;


    div {
      display: flex;
      justify-content: center;
      align-items: center;


    }


    &:hover {
      background-color: #d3b073;
      color: white;
    }
  }


  @media (width <1360px) {
    .itemPhoto {
      display: none;
    }

    .slide-content {
      width: 100%;

      margin-left: 0%;
      text-align: center;

      h3 {
        margin-top: 2%;
      }
    }

    .reserveButton {
      border: 1px solid black;
      width: 50%;
      left: 25%;

    }
  }

}
</style>