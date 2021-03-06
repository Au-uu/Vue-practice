import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
    /* plugins: [
      (store) => {
        store.subscribe()
      }
    ] */
    /* modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updateCount', { num: '2222' }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction ({ commit }) {
            commit('a/updateText', 'test text', { root: true })
          }
        }
      }
    } */
  })

  /* eslint-disable */
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
