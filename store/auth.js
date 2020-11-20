export const state = () => ({
  access_token: JSON.parse(localStorage.getItem('access_token')) || null,
})

export const mutations = {
  auth_success(state, data) {
    state.access_token = data.access_token
    localStorage.setItem('access_token', JSON.stringify(data.access_token))
  },
  auth_error(state) {
    state.access_token = null
    localStorage.clear('access_token')
  },
  logout_success(state) {
    state.access_token = null
    localStorage.clear('access_token')
  },
}

export const actions = {
  login(context, data) {
    return new Promise((resolve, reject) => {
      // HARDCODED CREDENTIALS
      if (data.username === 'admin' && data.password === 'admin') {
        context.commit('auth_success', {
          access_token: {
            user: data.username,
            level: 'admin',
          },
        })
        resolve()
      } else if (data.username === 'client' && data.password === 'client') {
        context.commit('auth_success', {
          access_token: {
            user: data.username,
            level: 'client',
          },
        })
        resolve()
      } else {
        context.commit('auth_error')
        reject(new Error('Informations de connexion incorrectes'))
      }
    })
  },

  logout(context) {
    context.commit('logout_success')
  },
}

export const getters = {
  isLoggedIn: (state) => !!state.access_token,
  isAdmin: (state) => state.access_token.level === 'admin',
  loggedUser: (state) => state.access_token.user,
}
