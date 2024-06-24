<template>
  <div>
    <div class="banner">
      <img class="logo" src="https://yatayork.imgix.net/yatatorkLogo.png" alt="logo">
    </div>
    <div class="SubContent">
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
    </div>

    <a href="/about">連看看</a>

  </div>
</template>

<style lang="scss" scoped>
@import "../src/assets/main.scss";

.banner {
  width: 100%;
  height: 500px;
  background-image: url("https://yatayork.imgix.net/ComfyUI_banner_ (1).png");

  background-size: 2140px 550px;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 48px;

  img {
    width: 150px;
    height: 150px;
  }
}

.SubContent {
  width: 100%;
  height: 700px;
  position: relative;
  animation: fade 2s linear 0s;

  .intro {
    position: absolute;
    font-size: 16px;
    color: rgba(32, 11, 91, 0.83);
    font-weight: 400;
    line-height: 2.2em;
    letter-spacing: 0.3em;

    right: 27.5%;
    bottom: 5%;

  }

  .landscape {
    position: absolute;
    width: 600px;
    left: 3%;
    bottom: 0;
    top: 10%;
  }

  .motto {
    writing-mode: vertical-lr;
    position: absolute;
    font-size: 16px;
    color: rgba(120, 40, 6, 0.83);
    font-weight: 400;
    left: 15%;
    letter-spacing: 0.3em;
    z-index: 1;

    p {
      background-color: rgba(255, 255, 255, 0.689);

      &:nth-child(1) {
        margin-top: 200px;
      }

      &:nth-child(2) {
        margin: 100px;
      }

      &:nth-child(3) {
        margin-top: 150px;
      }
    }


  }

  .create {
    width: 800px;
    position: absolute;
    right: 10%;
  }

}
</style>