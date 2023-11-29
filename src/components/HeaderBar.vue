<template>
  <div class="menu-links col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <p>Per product widgets</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartCount'

    ])
  }
}
</script>
<style>
.menu-links{
  width: 90%;
  height: 48px;
  padding: 0px 0px 12px 0px;
  margin-bottom: 20px !important;
  border-bottom: 2px solid grey;
  margin: auto;
  @media (max-width: 890px) {
    width: 90%;
    margin: auto;
  }
  @media screen and (max-width: 660px) {
    width: 80%;
    text-align: center;
    margin: auto;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
    text-align: center;
    margin: auto;
  }
  @media screen and (max-width: 360px) {
    width: 30%;
    text-align: center;
    margin: auto;
    font-size: 26px;
  }
}
.menu-links p {
  font-family: 'Cabin';
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  /* text-align: center; */
  margin: 0px;
  color: black;
  @media screen and (max-width: 660px) {
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin: auto;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    text-align: center;
    font-size: 21px;
    margin: auto;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin: auto;
  }
}
.main-body {
  width: 100%;
  height: 172px;
}
</style>
