<template>
  <div class="main-body">
    <BudgetDetail
      v-for="item in this.apiData"
      :key="item.id"
      :id="item.id"
      :type="item.type"
      :amount="item.amount"
      :actions="item.actions"
      :active="item.active"
      :linked="item.linked"
      :selectedColor="item.selectedColor"
      @checkbox-change="handleCheckboxChange"
      class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"
    >
    </BudgetDetail>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BudgetDetail from './BudgetDetail.vue'
import apiData from '../api/apiData.json'
export default {
  mounted () {
    this.getData()
    this.apiData = apiData
  },
  data () {
    return {
      apiData: []
    }
  },
  computed: {
    ...mapGetters([
      'cartCount'
    ])
  },
  components: { BudgetDetail },
  methods: {
    ...mapActions(['getData']),
    handleCheckboxChange ({ id, isChecked }) {
      const itemIndex = this.apiData.findIndex(item => item.id === id)
      if (itemIndex !== -1) {
        this.$set(this.apiData, itemIndex, { ...this.apiData[itemIndex], isChecked })
      }
    }
  }
}
</script>

<style>
.main-body {
  width: 100%;
  height: 172px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 890px) {
    display: block;
  }
}
</style>
