<template>
  <div class="app">
    <div class="header">
      <header-bar></header-bar>
      <BodyBudget></BodyBudget>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import BodyBudget from '@/components/BodyBudget'
export default {
  components: {
    HeaderBar,
    BodyBudget
  },
  name: 'app'
}
</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  display: flex;
  align-items: center;
  height: 100vh;
}
.app {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  border-radius: 8px;
  padding: 36px;
  box-shadow: #dbdbdb 3px 15px 15px 10px;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 890px) {
    width: 80%;
    margin: auto;
    height: 100vh;
    padding: 36px 20px;
  }
  @media screen and (max-width: 660px) {
    width: 75%;
    margin: auto;
    height: 100vh;
  }
  @media screen and (max-width: 460px) {
    width: 65%;
    margin: auto;
    height: 100vh;
  }
}

.header {
  margin-top: 40px !important;
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  border: none;
  /* height: 244px !important; */
  @media screen and (max-width: 890px) {
    width: 95%;
    margin: auto;
  }
  /* @media screen and (max-width: 660px) {
    width: 70%;
    margin: auto;
  } */
  @media screen and (max-width: 460px) {
    width: 85%;
    margin: auto;
  }
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
