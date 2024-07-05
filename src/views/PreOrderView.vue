<template>
  <div class="orderInfo">
    <div>
      <h2>如何跟我們預約體驗</h2>
    </div>
    <div>
      <p>~歡迎使用Line官方帳號進行預約~</p>
      <img src="https://yatayork.imgix.net/M_036zxtlb_GW.png" alt="line-official">

      <p>也可使用首頁的聯絡我們 ! 發送mail與我們預約</p>
      <p>記得寫入時間與姓名讓我們與您聯繫!</p>
      <p>歡迎致電:0912345678 讓管理員為您預約時程!</p>


    </div>




  </div>

</template>




<style lang="scss" scoped>
@import "../src/assets/main.scss";


.orderInfo {


  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;


  div {


    &:nth-child(1) {

      @include gridConfig(1, 7, 1, 2);
      text-align: center;
      font-size: 28px;
    }


    &:nth-child(2) {

      @include gridConfig(1, 7, 2, 7);
      text-align: center;
      font-size: 28px;
    }






  }
}
</style>
