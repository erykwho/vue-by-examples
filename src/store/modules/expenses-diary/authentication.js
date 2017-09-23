import axios from 'axios'
// const EXD_EXPENSES_URL = 'http://localhost:5000/v1/expenses'
const EXD_AUTH_URL = process.env.EXD_EXPENSES_URL + 'v1/login'
const EXD_CREATE_USER_URL = process.env.EXD_EXPENSES_URL + 'v1/users'
console.log('Auth URL: ', EXD_AUTH_URL)
console.log('Create User URL: ', EXD_CREATE_USER_URL)

const state = {
  exdLogged: false,
  userId: null
}

const getters = {
  exdLogged: (state) => {
    return state.exdLogged
  },
  authHeaders: (state) => {
    if (state.exdLogged) {
      return {
        'User-Id': JSON.stringify(state.userId)
      }
    } else {
      return {}
    }
  }
}

const actions = {
  login: (context, credentials) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_AUTH_URL, {
        ...credentials
      })
        .then((response) => {
          let userId = response.data.user_id
          context.commit('login', userId)
          resolve()
        })
        .catch((err) => {
          reject(err.response)
        })
    })
  },
  signUp: (context, credentials) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_CREATE_USER_URL, {
        first_name: credentials.firstName,
        last_name: credentials.lastName,
        email: credentials.email,
        password: credentials.password
      })
        .then((response) => {
          let userId = response.data.user_id
          context.commit('login', userId)
          resolve()
        })
        .catch((err) => {
          reject(err.response)
        })
    })
  },
  logout: (context) => {
    context.commit('logout')
  }
}

const mutations = {
  login: (state, userId) => {
    console.log(userId)
    state.exdLogged = true
    state.userId = userId
  },
  logout: (state) => {
    state.exdLogged = false
    state.userId = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
