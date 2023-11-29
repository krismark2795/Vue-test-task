const state = {
  color: ['#2E3A8C', '#2E3A8C', '#2E3A8C'],
  letterColor: '',
  data: []
}

const actions = {
  // async getData ({commit, state}) {
  //   try {
  //     const response = await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')
  //     commit('addData', response.data)
  //     console.log(state.data)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   }
  // }
}

const mutations = {
  handleClick (state, payload) {
    console.log(payload.color, payload.id)
    switch (parseInt(payload.color)) {
      case 1:
        state.color[payload.id] = '#2E3A8C'
        state.letterColor = '#ffffff'
        break
      case 2:
        state.color[payload.id] = '#3b755f'
        state.letterColor = '#ffffff'
        break
      case 3:
        state.color[payload.id] = '#f2ebdb'
        state.letterColor = '#3b755f'
        break
      case 4:
        state.color[payload.id] = '#ffffff'
        state.letterColor = '#3b755f'
        break
      case 5:
        state.color[payload.id] = '#202020'
        state.letterColor = '#ffffff'
        break
    }
    console.log(payload.id, state.color[payload.id])
  },
  addData (state, temp) {
    state.data.push(temp)
    console.log(state.data)
  }
}

const getters = {
  cartCount (state) {
    return state.color
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
