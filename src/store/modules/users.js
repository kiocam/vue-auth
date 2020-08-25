import axios from 'axios'

const state = {
  users: [],
  authenticated: false
}

const getters = {
  allUsers: (state) => state.users,
  isAuthenicated: (state) => state.authenticated
}

const actions = {
  // Get the current users from server
  async fetchUsers ({ commit }) {
    const response = await axios.get('http://192.168.2.12:3000/users')
    console.log(response.data)
    commit('setUsers', response.data)
  },

  // Login user with credentials
  async loginUser ({ commit }, credentials) {
    const response = await axios.post('http://192.168.2.12:3000/login', credentials
    )

    console.log(response.data)
    commit('loginToken', response.data)
  },

  // Register User
  async registerUser ({ commit }, newUser) {
    const response = await axios.post('http://192.168.2.12:3000/signup', newUser)
    commit('newUser', response.data)
  }
}

const mutations = {
  setUsers: (state, users) => (state.users = users),
  loginToken: (state, authenticated) => (state.authenticated = authenticated),
  newUser: (state, user) => state.users.push(user)
}

export default {
  state,
  getters,
  actions,
  mutations
}
